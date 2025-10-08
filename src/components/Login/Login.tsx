"use client";

import { useSession, signIn, signOut } from "next-auth/react"

const Login = () => {
    const { data: session } = useSession();

    if (session) {
        return <> 
            Signed in as {session?.user?.email} <br/>
            <p>Signed in as {session?.user?.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
        </>
    }
    return <>
        Not signed in <br />
        <button onClick={ () => signIn()}> Sign In</button>
    </>
}

export default Login;