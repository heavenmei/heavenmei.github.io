import '@/styles/global.scss';
import '@/styles/main.scss';
import RootLayout from '@/components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
