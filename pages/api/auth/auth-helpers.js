import NextAuth from "next-auth";
import { MongoClient } from "mongodb";


// See Next-Auth callback documentation at:
// https://next-auth.js.org/configuration/callbacks


// TODO: move into a secured file
export const GOOGLE_AUTHORIZATION_URL = 
'https://accounts.google.com/o/oauth2/v2/auth?' +
new URLSearchParams({
  prompt: 'consent',
  access_type: 'offline',
  response_type: 'code'
});


const client = new MongoClient(process.env.MONGODB_URI);


export const refreshGoogleAccessToken = async (session, user) => {

  const accounts = client.db().collection('accounts');
  
  const [google] = await accounts.findOne(
    {
      provider: "google",
      userId: user.id,
  });

  if (google.expires_at * 1000 < Date.now()) {

    try {

      const url = "https://oauth2.googleapis.com/token?" + 
      new URLSearchParams({
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: google.refresh_token
      });

      const response = await fetch(url, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
      })

      const { tokens } = await response.json();

      if (!response.ok) { throw tokens }

      await accounts.updateOne(
        {
          provider: "google",
          providerAccountId: google.providerAccountId
        },
        {
          access_token: tokens.access_token,
          expires_at: Math.floor(Data.now() / 1000 + tokens.expires_in),
          refresh_token: tokens.refresh_token ?? google.refresh_token
        }, {new: true});

    } catch (error) {

      console.error("Error refreshing access token.", error);

      return session.error = 'RefreshAccessTokenError' 

    }
  }
  return session
}
