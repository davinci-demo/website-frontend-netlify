import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongoDBclient.js";
import { refreshGoogleAccessToken, GOOGLE_AUTHORIZATION_URL } from "./auth-helpers.js"
import jwt from "jsonwebtoken";

// See Next-Auth callback documentation at:
// https://next-auth.js.org/configuration/callbacks


// TODO: Need to find an SMTP provider for email signin option.
export const authOptions = {
    // Configure one or more authentication providers
    adapter: MongoDBAdapter(clientPromise),
    database: process.env.MONGODB_URI,
    providers: [
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        authorization: GOOGLE_AUTHORIZATION_URL,
        profile(profile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            role: profile.role
          }
        }
      }),
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],
    session: {
      strategy: 'database'
    },
    jwt: { // optional if needed for future implementation
      secret: process.env.NEXTAUTH_SECRET,

      async encode({ token, secret }) {
        return jwt.sign(token, secret=NEXTAUTH_SECRET, { algorithm: "HS256" });
      },

      async decode({ token, secret }) {
        return jwt.verify(token, secret=NEXTAUTH_SECRET, { algorithms: ["HS256"]});
      }

    },
    callbacks: {
      
      async signIn({ account, profile }) {


        if (!profile?.email) {
          throw new Error('No profile')
        }

        let user = await authOptions.adapter.updateUser({
          where: {
            email: profile.email,
          },
          create: {
            email: profile.email,
            name: profile.name,
            role: profile.role
          },
          update: {
            name: profile.name,
            role: profile.role
          }
        })
        if (user) {
          return true
        }
      },
      // Persist the token after signing in
      async session({ session, user}) {

        session.user.role = user.role

        return refreshGoogleAccessToken(session, user)

      }
    }
  }
  export default NextAuth(authOptions)