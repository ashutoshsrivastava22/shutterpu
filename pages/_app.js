import { AuthProvider } from "@/context/AuthContext";
import { WebProvider } from "@/context/WebContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WebProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </WebProvider>
    </>
  );
}

export default MyApp;
