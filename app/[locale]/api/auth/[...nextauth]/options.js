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
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'my-project',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
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
        return user

      },
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error',
    // verifyRequest: '/auth/verify-request',
    // newUser: '/auth/new-user'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // Store the entire user object in the token
      }
      return token;
    },

    async session({ session, token }) {
      session.user = token.user; // Transfer the user data from the token to the session
      return session;
    },
  },

  // Enable debug messages in the console if you are having problems
  debug: process.env.NODE_ENV === 'development',
};