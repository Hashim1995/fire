// import CredentialsProvider from "next-auth/providers/credentials"

// export const options = {
//   providers: [

//     CredentialsProvider({
//       credentials: {
//         email: { label: "email", type: "email", placeholder: "your best email" },
//         password: { label: "password", type: "password" }
//       },
//       async authorize(credentials) {
//         const payload = {
//           email: credentials.email,
//           password: credentials.password,
//         };

//         const res = await fetch('https://ivisaapp.azurewebsites.net/api/v1/auth/login', {
//           method: 'POST',
//           body: JSON.stringify(payload),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         const userJson = await res.json();
//         const user = userJson.data
//         return user
//       }
//     })
//   ],
//   pages: {
//     signIn: '/auth/signin',
//     // signOut: '/auth/signout',
//     // error: '/auth/error',
//     // verifyRequest: '/auth/verify-request',
//     // newUser: '/auth/new-user'
//   },
// }

import CredentialsProvider from 'next-auth/providers/credentials';

export const options = {
  providers: [
    CredentialsProvider({
      name: 'my-project',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch('https://ivisaapp.azurewebsites.net/api/v1/auth/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const userJson = await res.json();
        const user = userJson.data
        const jwt = userJson?.data?.token
        return {
          ...user,
          jwt,
        };

      },
    }),

  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',

  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },

  },

  debug: process.env.NODE_ENV === 'development',
};