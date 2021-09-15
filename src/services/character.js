import { api } from "./api";

export async function getCharacters() {
  try{
    const {data} = await api.get('characters?ts=1630935411823&apikey=7079651304a622a7d3578e229daabdda&hash=f40ee5c0eb250382dc4dbc7ec49a8593')
    return data?.data?.results
  }catch(error){

  }
}