import { useState } from "react";
import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Article from "@/components/Article";

export default function UpdateWebsitePage({ token }) {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const [address, setAddress] = useState("");

  const deleteEvent = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.reload();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(address);

    const res = await fetch(`${API_URL}/websitedetails`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(address),
    });
  };

  return (
    <Layout title="User Dashboard">
      <div id="main" style={{ maxWidth: "72rem" }}>
        <article className="post featured">
          <header className="major">
            <span className="date text-dark" style={{ color: "#000" }}>
              welcome {user && user.username}
            </span>
          </header>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="address"
                name="address"
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>

            <input type="submit" className="btn" value="Update" />
          </form>
        </article>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
