import { useEffect, useContext, useState } from "react";
import WebContext from "@/context/WebContext";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  // context call
  const { website, error } = useContext(WebContext);

  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer id="footer">
        <section>
          <form method="post" onSubmit={handleSubmit}>
            <div className="fields">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact bg-blue">
          <section className="alt">
            <h3>Address</h3>
            <p>{website && website.address}</p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href={`tel:${website && website.phone_number}`}>
                +91 {website && website.phone_number}{" "}
              </a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href={`mailto:${website && website.email}`}>
                {website && website.email}
              </a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
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
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
