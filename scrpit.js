let resultado = document.getElementById('resultado');

function insert(num){
   let numero = resultado.innerHTML;
   resultado.innerHTML = numero + num;
}
function clean(){
    resultado.innerHTML = "";
}
function back(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}
function calculo(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
