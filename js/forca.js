let tentativas = 6;
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

function verificaLetraEscolhida(letra){
    if (tentativas > 0)
    {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
    
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#c71585";
    document.getElementById(tecla).style.color = "#fff"

}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
       tentativas--; 
       carregaImagemForca();
        //verificar tentativas -msg
    }
    else {
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }        
    }

    if (vitoria == true) {
        //msg tela
        tentativas = 0;
    }
}

function carregaImagemForca(){
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = 'url("../img/forca1.png")';
            break;
        case 4:
            document.getElementById("imagem").style.background = 'url("../img/forca02.png")';
            break;
        case 3:
            document.getElementById("imagem").style.background = 'url("../img/forca03.png")';
            break;
        case 2:
            document.getElementById("imagem").style.background = 'url("../img/forca04.png")';
            break;
        case 1:
            document.getElementById("imagem").style.background = 'url("../img/forca05.png")';
            break;
        case 0:
            document.getElementById("imagem").style.background = 'url("../img/forca06.png")';
            break;
        default:
            document.getElementById("imagem").style.background = 'url("../img/forca.png")';
            break;
    }   
}