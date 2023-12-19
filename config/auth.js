import { GoogleProviders } from 'next-auth/providers/google'

const authConfig = {
    provider: [

        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true },
                password: { label: 'password', type: 'password', required: true },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                const currentUser = users.find(user => user.email === credentials.email)

                if (currentUser && currentUser.password === credentials.password) {
                    const { password, ...userWithoutPass } = currentUser;

                    return userWithoutPass;
                }

                return null
            }
        })
    ]
}

export default authConfig