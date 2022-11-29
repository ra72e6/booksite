import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, session, ...pageProps }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
