import RootLayout from "@/components/Layout";
import "@/styles/global.scss";
import "@/styles/github-markdown.css";
import { NextUIProvider } from "@nextui-org/react";

export const dynamic = "error";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </NextUIProvider>
  );
}
