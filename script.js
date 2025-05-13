//cada pergunta tem:
// - A pergunta
// - as opções
// - a alternativa certa (começa no 0)
const perguntas = [
    {
        pergunta: "Uma loja oferece 25% de desconto em um produto que custa R$ 240,00. Qual é o valor do desconto?",
        opcoes: ["R$ 60,00", " R$ 50,00", "R$ 55,00", "R$ 65,00", "R$ 70,00"],
        correta: 0
    },

    {
        pergunta: "Se 5 lápis custam R$ 12,00, quanto custarão 8 lápis na mesma proporção?",
        opcoes: ["R$ 18,00", "R$ 19,20", "R$ 20,00", "R$ 22,00", "R$ 23,50"],
        correta: 1
    },

    {
        pergunta: "Uma empresa cobra uma taxa fixa de R$ 50,00 mais R$ 20,00 por hora de serviço. Qual é a expressão que representa o custo total (C) em função do número de horas (h)?",
        opcoes: [" C = 70h", "C = 50h + 20", "C = 20h + 50", "C = 50 + h", "C = 20h - 50"],
        correta: 2
    },

    {
        pergunta: "Qual é a área de um triângulo com base de 10 cm e altura de 8 cm?",
        opcoes: ["40 cm²", "80 cm²", "100 cm²", "60 cm²", "50 cm²"],
        correta: 4
    },

    {
        pergunta: "As idades dos cinco alunos de um grupo são: 16, 17, 18, 19 e 20 anos. Qual é a média de idade do grupo?",
        opcoes: ["17", "18", "18,5", " 19", "17,5"],
        correta: 1
    },

    {
        pergunta: "Em uma urna há 5 bolas vermelhas, 3 verdes e 2 azuis. Qual a probabilidade de se retirar uma bola azul?",
        opcoes: ["1/10", "2/10", "1/5", "3/10", " 2/5"],
        correta: 2
    },

    {
        pergunta: "Se um gráfico mostra que uma fábrica produziu 1200 peças em janeiro e 1500 em fevereiro, qual foi o aumento percentual da produção?",
        opcoes: ["20%", "25%", "30%", "15%", "10%"],
        correta: 1
    },

    {
        pergunta: "Qual é a solução da equação x² - 5x + 6 = 0?",
        opcoes: ["x = 3 ou x = 2", "x = 1 ou x = 6", " x = −2 ou x = −3", "x = 1 ou x = 5", "x = 0 ou x = 6"],
        correta: 0
    },

    {
        pergunta: "Um ingresso de cinema adulto custa R$ 20 e o infantil R$ 12. Se uma família comprou 2 ingressos adultos e 3 infantis por R$ 76, isso está correto?",
        opcoes: ["sim", "não", "Só se houver desconto", "Faltam dados", "Apenas se o ingresso adulto for R$ 18"],
        correta: 0
    },

    {
        pergunta: "Qual é o volume de um cubo com aresta de 4 cm?",
        opcoes: ["64 cm³", "16 cm³", "32 cm³", "48 cm³", "40 cm³"],
        correta: 0
    }
]
// variaveis para controlar o quiz
let perguntaAtual = 0 //Qual pergunta esta sendo mostrada
let pontuacao = 0 //Quantidade dos acertos
let erros = 0 //Quantidade dos erros
let opcaoSelecionada = null //Qual opcao o usuario selecionou

const pergunta = document.getElementById("pergunta")
const opcoes = document. getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

// funçao que atualiza o placar
function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador. textContent = erros
}
    // funcao que mostra a pergunta atual
    function mostrarPerguntas() {
        //Pega a pergunta atual
        const perguntaAtualObj = perguntas[perguntaAtual]
        // Mostra o texto da pergunta
        pergunta. textContent = perguntaAtualObj.pergunta
        opcoes. textContent = "" //limpa as opcoes anteriores I
        // Cria um botão para cada opcao de resposta
        perguntaAtualObj.opcoes.forEach((opcao, indice) => {
            const botao = document.createElement("button")
            botao.textContent = opcao
            botao.classList.add("opcao")
            botao.addEventListener("click", () => selecionarOpcao(indice))
            opcoes.appendChild(botao)
    
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true //desabilita o botao de próxima
}
//Para quando o usuàrio escolher uma opcao
function selecionarOpcao(indice){
    opcaoSelecionada= indice
    //Atualiza o vizual da opçaõ selecionada
    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i)=>{
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false //Habilita o botão de próxima
}
function mostrarPontuacao () {
quiz.classList.add("esconder")
pontuacaoFinal. classList.remove("esconder")
valorPontuacao. textContent = pontuacao
}
// Função para ir para a próxima pergunta
botaoProxima. addEventListener("click", () => {
// Verifica se a resposta está correta
if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
pontuacao++
} else {
erros++
}
atualizarPlacar()

perguntaAtual++
if(perguntaAtual < perguntas.length){
    mostrarPerguntas()
} else {
    mostrarPontuacao()
}
})
//Botão para reiniciar o quiz
botaoReiniciar.addEventListener("click", () =>{
    //Reseta todas as variáveis
    perguntaAtual = 0
    pontuacao = 0
    erros = 0
    //Oquiz aparece  e a pontuação final some
    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPerguntas()
})
//Inicia o quiz com a primeira pergunta
mostrarPerguntas()