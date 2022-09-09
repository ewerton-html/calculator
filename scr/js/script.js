const botoes = document.getElementById("botoes");
const localValor = document.getElementById("valor");
const numeros = [1,2,3,4,5,6,7,8,9];
const operadores =["+","-","*","/"]
let calculo = [];
let calcLocal = 0;



botoes.addEventListener("click", (event)=>{
    const nameTag = event.path[0];
    const nameClass = nameTag.className;
    const nameId = nameTag.id;

    if(nameClass === "botao") {
        valoresDisplay(nameId)
}});

// enviando valores para o display
function valoresDisplay(v){
//  separando botoes com funções e númericos
    if(v.length == 1){
        
        calculo.push(v);
        calcLocal = calculo.length-1;
        calculo = naoRepetir(calculo);

        let calculoValor="";
        calculoValor = calculo.join("");

        localValor.innerText=`${calculoValor}`; 
    } else {
        calculoEvento(v)
    }
}
// não repetir operadores
function naoRepetir(calc){
    let index = calc.length - 1;
    let antesIndex = index - 1;
        
    operadores.forEach((element) => {
        if(calc[antesIndex] == element){
            operadores.forEach((e) => {
                if(calc[index] == calc[antesIndex]){
                    calc.pop()
    
                } else if (calc[index] == e) {
                    calc.pop()
                }

            })
        }
    })
    return(calc);
};

// funcões dos botões 
function calculoEvento(evento){
    if (evento == "igual"){
        let calculoValorFinal = `${eval(calculo.join(""))}`;

        console.log("valor final="+calculoValorFinal)

        localValor.innerText= calculoValorFinal; 
        calculo.splice(0);
        calculo.push(calculoValorFinal);
        console.log(calculo);

    } else {
        calculo = [];
        localValor.innerText="";
    }
}    
