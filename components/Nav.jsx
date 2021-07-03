import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import WebContext from "@/context/WebContext";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { ImWhatsapp } from "react-icons/im";
import { NEXT_URL } from "../config/index";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  // context call
  const { website, error } = useContext(WebContext);
  return (
    <nav id="nav">
      <ul className="links">
        {user && (
          <>
            <li>
              <Link href={`${NEXT_URL}/account/dashboard`}>Dashboard</Link>
            </li>
            <li>
              <Link href={`${NEXT_URL}/account/updatewebsite`}>
                Update Website
              </Link>
            </li>

            <li>
              <Link href={`${NEXT_URL}/account/addnewpost`}>Add New Post</Link>
            </li>

            <li>
              <button
                className="btn-secondary"
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
      <ul className="icons">
        <li>
          <a
            className="icon brands alt fa-facebook-f"
            href={`${website && website.facebook_url}`}
            target="blank"
          >
            <FaFacebook className="icon brands alt fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            className="icon brands alt fa-facebook-f"
            href={`${website && website.instagram_url}`}
            target="blank"
          >
            <FaInstagram className="icon brands alt fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            className="icon brands alt fa-facebook-f"
            href={`${website && website.twitter_url}`}
            target="blank"
          >
            <FaTwitter className="icon brands alt fa-facebook-f" />
          </a>
        </li>
        <li>
          <a
            className="icon brands alt fa-facebook-f"
            href={`${website && website.whatsapp_number}`}
            target="blank"
          >
            <ImWhatsapp className="icon brands alt fa-facebook-f" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
