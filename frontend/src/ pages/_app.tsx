import "../styles/globals.css";
import { ThemeProvider } from "../components/ThemeContext";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
