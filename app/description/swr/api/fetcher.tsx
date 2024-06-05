import axios from "axios";

const allProducts = "https://dummyjson.com/products";

export const fetcher = () => axios.get(allProducts).then((res) => res.data);
