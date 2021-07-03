import { parseCookies } from "@/helpers/index";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

import { API_URL } from "@/config/index";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Article from "@/components/Article";

export default function DashboardPage({ projects, token }) {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

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
  return (
    <Layout title="User Dashboard">
      <div id="main">
        <article className="post featured">
          <header className="major">
            <span className="date text-dark" style={{ color: "#000" }}>
              welcome {user && user.username}
            </span>
          </header>
        </article>
        <section className="posts">
          {projects.map((project) => (
            <>
              <Article key={project.id} project={project} />
              <button>Delete</button>
            </>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/projects?_sort=created_at`);
  const projects = await res.json();

  return {
    props: { projects },
  };
}
