import "@/styles/global.scss";
import "@/styles/github-markdown.css";
import "react-photo-view/dist/react-photo-view.css";
import { NextUIProvider } from "@nextui-org/react";
import { PhotoProvider } from "react-photo-view";

import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Heavenmei.io</title>
        <meta name="author" content="Heavenmei" />
      </Head>

      <PhotoProvider maskOpacity="0.5">
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
      </PhotoProvider>
    </>
  );
}
