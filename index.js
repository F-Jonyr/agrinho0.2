const perguntas = [
    {
        pergunta: "Você está no mercado. O que faz?",
        opcoes: [
            { texto: "Compra só o necessário", pontos: 10 },
            { texto: "Compra tudo que vê pela frente", pontos: -5 }
        ]
    },
    {
        pergunta: "Sobrou comida em casa. O que você faz?",
        opcoes: [
            { texto: "Aproveita em outra refeição", pontos: 10 },
            { texto: "Joga fora", pontos: -10 }
        ]
    },
    {
        pergunta: "Você vê uma promoção tentadora de produtos que não precisa.",
        opcoes: [
            { texto: "Ignora a promoção", pontos: 10 },
            { texto: "Compra mesmo sem precisar", pontos: -5 }
        ]
    },
    {
        pergunta: "Na feira, você prefere:",
        opcoes: [
            { texto: "Produtos locais e frescos", pontos: 10 },
            { texto: "Produtos industrializados", pontos: -3 }
        ]
    }
];

let atual = 0;
let pontos = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const pontosEl = document.getElementById("pontos");
const botao = document.getElementById("iniciar");

function mostrarPergunta() {
    const q = perguntas[atual];

    perguntaEl.textContent = q.pergunta;
    opcoesEl.innerHTML = "";

    q.opcoes.forEach(op => {
        const btn = document.createElement("button");
        btn.textContent = op.texto;

        btn.onclick = () => {
            pontos += op.pontos;
            pontosEl.textContent = pontos;

            atual++;

            if (atual < perguntas.length) {
                mostrarPergunta();
            } else {
                finalizarJogo();
            }
        };

        opcoesEl.appendChild(btn);
    });
}

function finalizarJogo() {
    perguntaEl.textContent = "🎉 Jogo finalizado!";
    opcoesEl.innerHTML = "";

    let mensagem = "";

    if (pontos >= 30) {
        mensagem = "Excelente! Você tem hábitos muito conscientes 🌱";
    } else if (pontos >= 10) {
        mensagem = "Bom! Mas ainda pode melhorar 👍";
    } else {
        mensagem = "Você precisa repensar seus hábitos de consumo ⚠️";
    }

    opcoesEl.innerHTML = `<p><strong>${mensagem}</strong></p>`;
}

botao.addEventListener("click", () => {
    atual = 0;
    pontos = 0;
    pontosEl.textContent = "0";
    mostrarPergunta();
});
