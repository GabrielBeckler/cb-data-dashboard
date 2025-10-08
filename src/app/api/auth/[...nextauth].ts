import NextAuth, {NextAuthOptions} from 'next-auth'; 
// NextAuth é o módulo principal de autenticação.
// NextAuthOptions é uma interface TypeScript que define quais campos a configuração pode ter (provedores, callbacks, páginas, etc).
import GoogleProvider from 'next-auth/providers/google';
// importa o provedor do Google, que é um tipo de “conector” que permite autenticar com a conta do Google.importante provedores de autenticao

export const authOptions: NextAuthOptions = {
    // Aqui você está criando um objeto de configuração (authOptions) que o NextAuth vai usar para saber como autenticar os usuários.
    providers: [
        // propriedade providers é um array de provedores de login.
        GoogleProvider({ // Aqui você está adicionando/inicializando o provedor do Google.
            clientId: process.env.GOGLE_ID as string, //aqui você está pegando o ID do cliente do Google das variáveis de ambiente.
            // O "as string" é uma asserção de tipo do TypeScript que diz ao compilador para tratar o valor como uma string.
            clientSecret: process.env.GOOGLE_SECRET as string, //aqui você está pegando o segredo do cliente do Google das variáveis de ambiente.
            authorization: {
                params: {
                    prompt: "consent", 
                    // Faz o Google sempre perguntar qual conta o usuário quer usar, mesmo que já esteja logado.
                    access_type: "offline",
                    // Permite que o app receba um refresh token, ou seja, o login continua válido mesmo depois que o usuário fecha o navegador. o refresh token
                    response_type: "code"
                    // Indica que queremos um código de autorização, não um token direto — é o padrão mais seguro (OAuth2).
                }
            }
        }),
    ]
}

export default NextAuth(authOptions);
// diz como o NextAuth deve se conectar com o Google, usando o client ID e o client secret, pra que o usuário possa clicar em “Entrar com Google” e fazer login de forma segura.
//Login com o google