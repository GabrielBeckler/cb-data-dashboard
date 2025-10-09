"use client";

import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';


const Login = () => {
    const { data: session } = useSession();
    if (session) {
        return <> 
            <Button varant={'contained'} color={'error'} onClick={() => signOut()}>Sign out</Button>
        </>
    }
    return <>
        <h2>Please Login</h2> <br />
        <Button varant={'contained'} color={'sucess'} onClick={ () => signIn()}> Sign In</Button>
    </>
}

export default Login;