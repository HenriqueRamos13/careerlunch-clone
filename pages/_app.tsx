import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-7xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
