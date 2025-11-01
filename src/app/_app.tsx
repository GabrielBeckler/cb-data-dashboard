// import { SessionProvider } from 'next-auth/react';
// import { CssBaseline, ThemeProvider, IconButton, useTheme, createTheme } from '@mui/material';
// import React from 'react';
// import Box from '@mui/material/Box';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';


// const ColorModeContext = React.createContext( defaultValue: { toggleColorMde: () => {}})

// const ToggleColorMode = () => {
//   const [mode, setMode] = React.useState<'ligth' | 'dark'>(initialState: 'light');
//   const colorMode = React.useMemo(
//     factory: () => ({
//       toggleColorMode: () => {
//         toggleColorMode: () => {
//           setMode(value:(prevMode: 'ligth' | 'dark') => (prevMode === 'light' ? 'dark' : 'light'));
//         },
//       }),
//       deps: [],
//   );

//   const theme = React.useMemo(
//     factory: () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     deps: [mode],
//   );
//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>

// const App : React.FC= ({
//   Component,  pageProps: {session, ...pageProps}
// }) => {
//   const theme = useTheme();
//   const colorMode = React.useContext(ColorModeContext;)
//   return (
//     <ColorModeContext.provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//     <SessionProvider session={pageProps.session}>
//       <CssBaseline />
//         <Box
//           sx={{
//             display: 'flex',
//             width: '100%',
//             aligniTEMS: 'center',
//             justifyContent: 'center',
//             bgcolor: 'background.default',
//             color: 'text.primary',
//             borderRadius: 1,
//             p: 3,
//           }}
//         >
//           {theme.palette.mode} mode
//           <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit"
//             {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
//           </IconButton>
//         </Box>
//       <Component {...pageProps} />
//     </SessionProvider>
//       </ThemeProvider>
//     </ColorModeContext.provider>
//   );
// }


// export default App;



"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import {
  CssBaseline,
  ThemeProvider,
  IconButton,
  useTheme,
  createTheme,
  Box,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// -------------------- CONTEXTO DE COR --------------------
const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

// -------------------- COMPONENTE DE TROCA DE TEMA --------------------
const ToggleColorMode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Estado do tema
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  // Função que alterna entre os modos
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Criação do tema dinâmico baseado no modo atual
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

// -------------------- APP PRINCIPAL --------------------
const App: React.FC<any> = ({ Component, pageProps }) => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <SessionProvider session={pageProps.session}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
          gap: 2,
        }}
      >
        {theme.palette.mode === "dark" ? "Modo escuro" : "Modo claro"}
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Component {...pageProps} />
    </SessionProvider>
  );
};

// -------------------- EXPORTAÇÃO FINAL --------------------
export default function RootApp(props: any) {
  return (
    <ToggleColorMode>
      <App {...props} />
    </ToggleColorMode>
  );
}
