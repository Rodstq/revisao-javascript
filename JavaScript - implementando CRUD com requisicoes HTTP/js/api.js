const URL_BASE = "http://localhost:3000/pensamentos"

const api = {
    async buscarPensamentos() {
    try {
        const response = await axios.get(URL_BASE)
        const pensamentos = await response.data
        return pensamentos;
    } catch (error) {
        alert('Erro ao buscar pensamentos')
        throw error
    }
    },

    async buscarPensamentoPorId(id) {
    try {
        const response = await axios.get(`${URL_BASE}/${id}`)
        const pensamento = await response.data
        return pensamento;
    } catch (error) {
        alert('Erro ao buscar pensamento')
        throw error
    }
    },

    async salvarPensamentos(pensamento) {
    try {
        const response = await axios.post(URL_BASE, pensamento)
        return await response.data
    } catch (error) {
        alert('Erro ao salvar pensamentos')
        throw error
    }
    },

    async editarPensamentos(pensamento) {
    try {
        const response = await axios.put(`${URL_BASE}/${pensamento.id}`, pensamento)
         console.log("Status HTTP:", response.status);

        const resultado = await response.data;
        console.log("Resposta da edição:", resultado);

        return resultado;      
    } catch (error) {
        alert('Erro ao editar pensamentos')
        throw error
    }
    },

    async excluirPensamento(id) {
    try {
        const response = await axios.delete(`${URL_BASE}/${id}`)
         console.log("Status HTTP:", response.status);

        const resultado = await response.data;
        console.log("Resposta da edição:", resultado);

    } catch (error) {
        alert('Erro ao excluir pensamentos')
        throw error
    }
    }
}

export default api;