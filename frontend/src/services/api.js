import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5050/api/tutorials" });

export const getTutorials = () => API.get("/");
export const createTutorial = (data) => API.post("/", data);
export const updateTutorial = (id, data) => API.put(`/${id}`, data);
export const deleteTutorial = (id) => API.delete(`/${id}`);
