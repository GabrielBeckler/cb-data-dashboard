import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username) {
          return {
            id: "1",
            name: credentials.username,
            email: `${credentials.username}@gmail.com`,
            image: `https://i.pravatar.cc/150?u=${credentials.username}`,
          }
        }
        return null
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
})
export { handler as GET, handler as POST }