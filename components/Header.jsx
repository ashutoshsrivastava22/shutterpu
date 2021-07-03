import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <>
      <header id="header">
        <h3>
          <a href="/" className="logo">
            Shutter Up
          </a>
        </h3>
      </header>
    </>
  );
};

export default Header;
