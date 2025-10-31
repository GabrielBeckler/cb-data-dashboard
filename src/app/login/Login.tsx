"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, Paper, Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", { email, password });
  };

  const handleRegister = () => {
    router.push("/register");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Lado da imagem */}
      <Grid
        item
        sm={6}
        md={7}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: "url('/Img/fotologin.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>

      {/* Lado do formulário */}
      <Grid
        item
        xs={12}
        sm={6}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Bem-vindo!
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            Faça login ou registre-se para continuar.
          </Typography>

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Senha"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, py: 1.2, fontWeight: "bold" }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{ py: 1.2, fontWeight: "bold" }}
            onClick={handleRegister}
          >
            Cadastrar
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
