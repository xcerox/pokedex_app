import axios from 'axios';
import { isNull } from 'lodash';

let me = null;
class PokeService {

  constructor() {
    if (isNull(me)) {
      me = this;
      me.URL_INFO = 'https://pokeapi.co/api/v2/';
      me.URL_IMGAGES = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

      me.getImage = me.getImage.bind(me);
      me.getAll = me.getAll.bind(me);
    }

    return me;
  }

  getImage(id) {
    return axios.get(`${this.URL_IMGAGES}${id}.png`);
  }

  getInfo(id) {
    return axios.get(`${this.URL_INFO}pokemon/${id}`);
  }

  getAllEvolutions(id) {
    //https://pokeapi.co/api/v2/evolution-chain/1/
    return axios.get(`${this.URL_INFO}evolution-chain/${id}`);
  }

  getAll() {
    return axios.get(`${this.URL_INFO}pokemon/`);
  }
}

export default new PokeService();