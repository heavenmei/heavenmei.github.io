import RootLayout from '@/components/Layout';
import '@/styles/global.scss';
import '@/styles/main.scss';
import '@/styles/github-markdown.css';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
