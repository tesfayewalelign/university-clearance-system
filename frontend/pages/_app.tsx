import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { ThemeProvider } from "../src/components/ThemeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
