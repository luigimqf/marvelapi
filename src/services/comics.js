import { api } from "./api";

export async function getComics() {
  try{
    const {data} = await api.get('comics?ts=1630935411823&apikey=7079651304a622a7d3578e229daabdda&hash=f40ee5c0eb250382dc4dbc7ec49a8593')
    return data?.data?.results
  }catch(error){

  }
}