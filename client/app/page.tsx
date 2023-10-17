"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

// const getProjects = async () => {
//   const res = await fetch("http://localhost:1337/api/projects", {
//     headers: {
//       Authorization:
//         "Bearer 9d7784ea786aaba14ad2aee9441ac8bf129e6138a58653c70b09d79ead3ecdb248801e37671d088dd91bbbf8a905f4a4bf6e826885d7088fdfa8134743d6cbedf8e709967e3ae56c11573da908c3b0c629483a321c7090e788a97e7c73ed48585d8ef177f11f50d8c6bae72fce8798de9e0ae286cfef76bc636dc2f72b28687e",
//     },
//   });
//   return res.json();
// };

export default function Home() {
  // const projects = await getProjects();
  // console.log(projects);

  const onClick = async () => {
    const res = await fetch("http://localhost:1337/api/projects", {
      headers: {
        Authorization:
          "Bearer 9d7784ea786aaba14ad2aee9441ac8bf129e6138a58653c70b09d79ead3ecdb248801e37671d088dd91bbbf8a905f4a4bf6e826885d7088fdfa8134743d6cbedf8e709967e3ae56c11573da908c3b0c629483a321c7090e788a97e7c73ed48585d8ef177f11f50d8c6bae72fce8798de9e0ae286cfef76bc636dc2f72b28687e",
      },
    });
    console.log(await res.json());
  };

  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("http://localhost:1337/api/projects", {
  //       headers: {
  //         Authorization:
  //           "Bearer 9d7784ea786aaba14ad2aee9441ac8bf129e6138a58653c70b09d79ead3ecdb248801e37671d088dd91bbbf8a905f4a4bf6e826885d7088fdfa8134743d6cbedf8e709967e3ae56c11573da908c3b0c629483a321c7090e788a97e7c73ed48585d8ef177f11f50d8c6bae72fce8798de9e0ae286cfef76bc636dc2f72b28687e",
  //       },
  //     });
  //     console.log(await res.json());
  //   })();
  // }, []);

  return (
    <main className={styles.main}>
      <button onClick={onClick}>Fetch</button>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer">
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
