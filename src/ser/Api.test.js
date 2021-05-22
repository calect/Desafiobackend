import ax from 'axios';

const api = ax.creat({
  baseURL: 'https://dadosabertos.camara.leg.br/swagger/api'
});

export default api;

