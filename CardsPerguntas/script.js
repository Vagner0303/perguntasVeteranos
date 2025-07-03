
function mostrarPergunta(tipo){
    // variável para guardar a pergunta que será exibida
    let pergunta =""
    // verificando o tipo de habilidade escolhida
    if(tipo === "soft"){
        pergunta = "Qual foi o maior desafio que vocês tiveram?"
    }else if(tipo === "hard"){
        pergunta = "Qual tipo de linguagem de programação que vocês tem mais facilidade?"
    } else{
        pergunta = "tipo desconhecido"
    }

    // Mostrar a pergunta na tela dentro da div com id="pergunta"
    document.getElementById("pergunta").textContent = " ❓" + pergunta
    // Abre uma caixa de prompt para o usuário digitar sua resposta
    const resposta = prompt(pergunta)
    // Verifica se o usuário digitou alguma coisa
    if(resposta){
        // Mostra a resposta na tela
        document.getElementById("resposta").textContent = " 🎤 Sua resposta: " + resposta
    }else{
        // Mensagem caso o usuário clique em cancelar
        document.getElementById("resposta").textContent = " Nenhuma resposta fornecida"
    }
}