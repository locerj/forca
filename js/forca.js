let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "ITALIA",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "LIMÃO",
        categoria: "FRUTA"
    },
    palavra005={
        nome: "LARANJA",
        categoria: "FRUTA"
    },
    palavra006={
        nome: "GOIABA",
        categoria: "FRUTA"
    },
    palavra007={
        nome: "CARRO",
        categoria: "TRANSPORTE"
    },
    palavra008={
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra009={
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra010={
        nome: "CAVALO",
        categoria: "ANIMAIS"
    },
    palavra011={
        nome: "EMA",
        categoria: "ANIMAIS"
    },
    palavra012={
        nome: "BALEIA",
        categoria: "ANIMAIS"
    }
]; 
criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada, palavraSecretaCategoria);


}
montarPalavraNaTela()
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = " ";

    for (i =0; i<palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;";
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"
        }
        else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"
        }
    }
}