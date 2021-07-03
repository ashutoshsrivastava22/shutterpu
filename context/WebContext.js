const { createContext, useState } = require("react");
const { API_URL, NEXT_URL } = require("../config");
import { useEffect } from "react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";
const WebContext = createContext();

export const WebProvider = ({ children }) => {
  const routes = useRouter();
  const [website, setWebsite] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWebsite();
  }, []);

  // load website
  const loadWebsite = async () => {
    const websiteRes = await fetch(`${API_URL}/websitedetails`);
    const webData = await websiteRes.json();

    if (websiteRes.ok) {
      setWebsite(webData[0]);
    } else {
      setWebsite(null);
      setError(websiteRes.error);
    }
  };

  return (
    <WebContext.Provider value={{ website, error }}>
      {children}
    </WebContext.Provider>
  );
};

export default WebContext;
