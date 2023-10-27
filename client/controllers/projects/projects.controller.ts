import fetcher from "../fetcher";
import { GetAll } from "./projects.type";

const routes = {
  getAll: "api/projects",
};

const ProjectsController = {
  async getAll(): Promise<GetAll[]> {
    const res = await fetcher(routes.getAll);
    const resData = await res.json();
    return resData.data;
  },
};

export default ProjectsController;
