
"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

export default function Register() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        };
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 4, maxWidth: 400, margin: 'auto', mx: 'auto' }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Criar Conta
            </Typography>
            <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Senha"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <TextField
                label="Confirmar Senha"
                type="password" 
                fullWidth
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button variant="contained" onClick={handleRegister}>
                Registrar
            </Button>
    </Box>
        );
    }
