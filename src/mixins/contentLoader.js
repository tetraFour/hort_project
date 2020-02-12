import Vue from "vue";
import api from "../assets/config/projects";

export const ContentLoader = Vue.extend({
  data() {
    return {
      projects: {},
      startupProjects: {},
      designersProjects: {},
      developersProjects: {}
    };
  },
  mounted() {
    this.projects = [...api];
    this.startupProjects = {
      ...this.projects.filter(project => project.id === "startups")[0]
    };
    this.designersProjects = {
      ...this.projects.filter(project => project.id === "designers")[0]
    };
    this.developersProjects = {
      ...this.projects.filter(project => project.id === "developers")[0]
    };
  }
});
