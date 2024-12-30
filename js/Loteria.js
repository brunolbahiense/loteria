export default class Loteria {
    #gerarNumero(limite) {
        return Math.floor(Math.random() * limite)
    } 

    #organizarArray(a, b) { 
        return (a - b)
    }

    #baseDeCalculo(qtdJogos, qtdNumeros, qtdProbabilidades, range){
        let resultado = {}
        if(qtdNumeros < range[0]) qtdNumeros = range[0]
        if(qtdNumeros > range[1]) qtdNumeros = range[1]
        for (let i = 0; i < qtdJogos; i++) {
            const sorteio = []
            while(sorteio.length < qtdNumeros) {
                const numeroGerado = this.#gerarNumero(qtdProbabilidades)
                if (!sorteio.includes(numeroGerado) && numeroGerado !== 0) {
                    sorteio.push(numeroGerado)
                } 
            }
            resultado[`jogo_${i + 1}`] = sorteio.sort(this.#organizarArray)
        }
        return resultado
    }

    megasena(jogos, numeros = 6) {
       return this.#baseDeCalculo(jogos, numeros, 60, [6, 20])
    }

    lotofacil(jogos, numeros = 15) { 
        return this.#baseDeCalculo(jogos, numeros, 25, [15, 18])
    }

    quina(jogos, numeros = 5) { 
        return this.#baseDeCalculo(jogos, numeros, 80, [5, 15])
    }
}

const aposta = new Loteria()
console.log(aposta.megasena(10))

