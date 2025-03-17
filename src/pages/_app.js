import "@/styles/global.scss";
import "@/styles/github-markdown.css";
import { NextUIProvider } from "@nextui-org/react";

import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";

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
        <div
          className="fixed bottom-10 right-10 bg-white/20 rounded-full p-2 cursor-pointer"
          id="affix"
          style={{ display: "none" }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src="/icons/caretTop.svg" className="w-8" />
        </div>
        <Footer />
      </NextUIProvider>
    </>
  );
}
