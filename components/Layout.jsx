import Head from "next/head";
import styles from "@/styles/Layout.module.css";
import Header from "./header";
import Footer from "./footer";
import { useRouter } from "next/router";
import Nav from "./Nav";

const Layout = ({ title, keyword, description, children }) => {
  const routes = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keyword" content={keyword} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "dj event",
  description: "test project",
  keyword: "textProject,djEvent",
};
