import axios from "axios";

export const baseURL = "http://localhost:3000";

export const converterApi = axios.create({ baseURL });
