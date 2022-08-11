export const state = () => ({
    products: [],
    list: [],
    loading: false,
})

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    setList(state, list) {
        state.list = list
    },
    setLoading(state) {
        state.loading = !state.loading
    }
}

export const actions = {
    async fetchProducts({ state, commit }) {
        commit('setLoading')
        if (state.products.length === 0) {
            // make request
            const products = await this.$axios.$get('https://script.google.com/macros/s/AKfycbz6okDH1siCTnAVTveZf16Qh10S9XDiM9zwu5pD_lg1gUdS90Geyc6CHm0Bznn6NCTl/exec?listing=eol')
            commit('setProducts', products)
            commit('setList', products.slice(0, 10))
        }
        commit('setLoading')
    },
    addToList({ state, commit }){
        commit('setList', state.products.slice(0, state.list.length + 10))
    },
    listFilterByTheme({ state, commit }){
        commit('setList', state.products.filter(product => product.theme === 'City'))
    },
}

export const getters = {
    getProducts: state => state.products.slice(0, 10),
    getList: state => state.list,
    getNexProducts: state => state.products.slice(0, 20),
    getLoading: state => state.loading,
    getTheme: state => state.products
        .filter(item => item.theme !== '')
        .map(record => record.theme.trim())
        .filter((recordTheme, index, self) => self.indexOf(recordTheme) === index)
}