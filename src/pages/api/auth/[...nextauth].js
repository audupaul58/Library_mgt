import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



export const authOptions = {
  pages:{
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
     
      name: "Credentials",
      
     // credentials: {
     //   username: { label: "Username", type: "text", placeholder: "jsmith" },
     //   password: { label: "Password", type: "password" }
     // },
      async authorize(credentials, req) {
        if(credentials.username == 'Paul'){
          return {
            user:{
              name: "PAUL"
            }
          }
        }
            return null;
      }
    })
  ],
}

export default NextAuth(authOptions) 
