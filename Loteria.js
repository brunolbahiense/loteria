class Loteria {
    gerarNumero(limit) {
        return Math.floor(Math.random() * limit)
    } 

    sortfunction(a, b) { 
        return (a - b)
    }

    baseDeCalculo(qtdJogos, qtdNumeros, qtdProbabilidades){
        let resultado = {}
        for (let i = 0; i < qtdJogos; i++) {
            const sorteio = []
            while(sorteio.length < qtdNumeros) {
                const numeroGerado = this.gerarNumero(qtdProbabilidades)
                if (!sorteio.includes(numeroGerado) && numeroGerado !== 0) {
                    sorteio.push(numeroGerado)
                } 
            }
            resultado[`jogo_${i + 1}`] = sorteio.sort(this.sortfunction)
        }
        return resultado
    }

    megasena(jogos, numeros = 6) {
        if( numeros > 20) numeros = 20
        if( numeros < 6) numeros = 6
       return this.baseDeCalculo(jogos, 6, 60)
    }
    lotofacil(jogos, numeros = 15) { 
        if( numeros > 18) numeros = 18
        if( numeros < 15) numeros = 15
        return this.baseDeCalculo(jogos, numeros, 25)
    }
    quina(jogos, numeros = 5) { 
        if( numeros > 15) numeros = 15
        if( numeros < 5) numeros = 5
        return this.baseDeCalculo(jogos, numeros, 80)
    }
}


