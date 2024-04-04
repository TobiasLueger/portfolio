import "../styles/globals.css";
import type { AppProps } from "next/app";
import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "bjjeXLdQeH8WSrp6EWs73Qtt",
  use: [apiPlugin],
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
