import "@/styles/global.scss";
import "@/styles/github-markdown.css";
import { NextUIProvider } from "@nextui-org/react";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Heavenmei.io</title>
      </Head>

      <NextUIProvider>
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </NextUIProvider>
    </>
  );
}
