/* eslint-disable */
import axios from "axios";

export default axios.create({
  baseURL: `https://dummyjson.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
