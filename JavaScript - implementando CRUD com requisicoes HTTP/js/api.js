const api = {
    async buscarPensamentos() {
    try {
        const response = await fetch('http://localhost:3000/pensamentos')
        const pensamentos = await response.json()
        return pensamentos;
    } catch (error) {
        alert('Erro ao buscar pensamentos')
        throw error
    }
    },

    async salvarPensamentos(pensamento) {
    try {
        const response = await fetch('http://localhost:3000/pensamentos', {
            method: "POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(pensamento)
        })
        const pensamentos = await response.json()
        return pensamentos;
    } catch (error) {
        alert('Erro ao buscar pensamentos')
        throw error
    }
    }
}

export default api;