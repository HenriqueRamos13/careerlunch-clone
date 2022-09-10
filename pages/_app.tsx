import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-7xl">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
