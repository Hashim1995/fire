import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    CredentialsProvider({
      name: "my-project",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        try {
          const userJson = await axios.post(
            "https://ivisavmlinux.azurewebsites.net/api/v1/auth/login",
            payload
          );
          const user = userJson.data;
          const jwt = user?.token; // Ensure this matches the structure returned by your API

          if (user) {
            return Promise.resolve({ ...user, jwt });
          } else {
            return null;
          }
        } catch (e) {
          // Redirecting to the login page with error messsage in the URL
          throw new Error(JSON.stringify(e.response.data));
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Assign the user data to the token
      }
      return token; // Return the token object, not the user object
    },
    async session({ session, token }) {
      session.user = token.user; // Make sure this correctly assigns the user data
      return session;
    },
  },
  redirect: false,
  debug: process.env.NODE_ENV === "development",
};
