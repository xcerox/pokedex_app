import axios from 'axios';
import { isNull } from 'lodash';

let me = null;
class PokeService {

  constructor() {
    if (isNull(me)) {
      me = this;
      me.URL_INFO = 'https://pokeapi.co/api/v2/';

      me.getAll = me.getAll.bind(me);
    }

    return me;
  }

  getInfo(id) {
    return axios.get(`${this.URL_INFO}pokemon/${id}`);
  }

  getAllEvolutions(id) {
    return axios.get(`${this.URL_INFO}evolution-chain/${id}`);
  }

  getDescription(id){
    return axios.get(`${this.URL_INFO}pokemon-species/${id}`);
  }

  getAll() {
    return axios.get(`${this.URL_INFO}pokemon/?offset=0&limit=949`);
  }

  getInfoAndDescription(id) {
    return axios.all([me.getInfo(id), me.getDescription(id)]);
  }
}

export default new PokeService();