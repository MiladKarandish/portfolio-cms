import styles from "./page.module.css";
import ProjectsController from "@/controllers/projects/projects.controller";

export default async function Home() {
  // This is a fetch request to strapi api
  const projects = await ProjectsController.getAll();

  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <div key={project.id}>{project.attributes.title}</div>
      ))}
    </main>
  );
}
