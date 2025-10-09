"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Typography, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (username === "admin" && password === "password") {
            router.push("/dashboard");
        } else {
            alert("Invalid credentials");
        }   
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Card sx={{ width: 400, p:3}}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Login
                    </Typography>

                    <form onSubmit={handleLogin}>
                        <TextField
                            label="Username"
                            type="text"
                            fullWidth
                            margin="normal"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        
                       
                        <TextField
                            label="PassWord"
                            type="password"
                            fullWidth
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                            >
                            Entrar
                        </Button>

                        
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
}
