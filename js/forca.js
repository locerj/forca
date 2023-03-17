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
    },
    palavra013={
        nome: "A ERA DO GELO",
        categoria: "TV E CINEMA"
    },
    palavra014={
        nome: "O HOMEM ARANHA",
        categoria: "TV E CINEMA"
    },
    palavra015={
        nome: "A MULHER MARAVILHA",
        categoria: "TV E CINEMA"
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

    console.log(palavraSecretaSorteada);

    for (i =0; i<palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined){

            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+listaDinamica[i]+"</div>"
            }
            else {
                listaDinamica[i] = "&nbsp;";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"
            }

            
        }
        else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i]=" ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>"+listaDinamica[i]+"</div>"
            }
            else {
              palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>"+listaDinamica[i]+"</div>"  
            }
            
        }
    }
    console.log(listaDinamica);
}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
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

       if (tentativas == 0) {
            abreModal("Ops!", "Não foi dessa vez...<br>A palavra secreta era " + palavraSecretaSorteada);
       }
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
        abreModal("Parabéns!", "Você venceu!!!");
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

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;
    let modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector('#btnReiniciar');
btnReiniciar.addEventListener("click", function(){
    location.reload();
});
