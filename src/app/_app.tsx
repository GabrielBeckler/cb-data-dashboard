import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CssBaseline />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
