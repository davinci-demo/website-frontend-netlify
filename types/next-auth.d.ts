import NextAuth from "next-auth";


export interface AuthenticatedUser extends User {

    accessToken?: string,
    refreshToken?: string
    
}

export enum Role {

    student = "student",
    instructor = "instructor",
    administrator = "administrator",

}


declare module "next-auth" {

    interface User extends DefaultUser {

        role: Role
        
    }

    interface Session extends DefaultSession {

        user: User
    
    }
    
}