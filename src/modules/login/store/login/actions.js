import { http } from "@/helpers/httpResquest";
import { keys } from "@/constans/keys";

export const getFilms = async ({ commit }, payload) => {
  let endpoint = `swapiv2/films`;
  let resp = await http.get(endpoint, keys.APIMANA, payload);
  commit("set_RespFilms", resp.data);
};

export const getPokemons = async ({ commit }, payload) => {
    let endpoint = `pkapiv2/pokemon`;
    let resp = await http.get(endpoint, keys.APIMANA, payload);
    commit("set_RespFilms", resp.data);
  };

