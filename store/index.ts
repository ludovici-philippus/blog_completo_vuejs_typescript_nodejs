export const state = () => ({
  categoria: '',
  api_path: 'http://localhost:5000'
});

export const mutations = {
}
export const getters = {
  getApiPath(state: any) {
    return state.api_path;
  },
  getCategoria(state: any) {
    return state.categoria;
  }
}
