// import '@/styles/globals.css';
// import { SessionProvider } from 'next-auth/react';
// // import type { AppProps } from 'next/app';
// // import type { Session } from 'next-auth';

// export default function App({
//   Component,  pageProps: { session, ...pageProps }
// }) {
//   return (
//     <SessionProvider session={session}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   );

// } 

import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
