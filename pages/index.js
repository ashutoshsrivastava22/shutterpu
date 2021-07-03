import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import WebContext from "@/context/WebContext";
import Article from "@/components/Article";
import { useEffect, useContext, useState } from "react";
export default function Home({ projects }) {
  // context call
  const { website, error } = useContext(WebContext);

  return (
    <div id="wrapper" className="fade-in ">
      <div id="intro">
        <Layout website={website}>
          <div id="main">
            <article className="post featured">
              <header className="major">
                <span className="date text-dark" style={{ color: "#000" }}>
                  Welcome
                </span>
              </header>

              <a className="image main">
                <img
                  src={` ${website ? website.feature_image[0].url : ""} `}
                  alt=""
                />
              </a>
            </article>

            <section className="posts">
              {projects.map((project) => (
                <Article key={project.id} project={project} />
              ))}
            </section>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/projects?_sort=created_at`);
  const projects = await res.json();

  console.log(projects);
  return {
    props: { projects },
  };
}
