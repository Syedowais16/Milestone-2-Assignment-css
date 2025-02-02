// pages/_app.js
import React from "react";
import Layout from "@/components/Layout";
import "@/styles/globals.css"; // Import global CSS

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
