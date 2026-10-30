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

    async buscarPensamentoPorId(id) {
    try {
        const response = await fetch(`http://localhost:3000/pensamento/${id}`)
        const pensamento = await response.json()
        return pensamento;
    } catch (error) {
        alert('Erro ao buscar pensamento')
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
        alert('Erro ao salvar pensamentos')
        throw error
    }
    },

    async editarPensamentos(pensamento) {
    try {
        const response = await fetch(`http://localhost:3000/pensamento/${pensamento.id}`, {
            method: "PUT",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(pensamento)
        })
         console.log("Status HTTP:", response.status);

        const resultado = await response.json();
        console.log("Resposta da edição:", resultado);

        return resultado;      
    } catch (error) {
        alert('Erro ao editar pensamentos')
        throw error
    }
    }
}

export default api;