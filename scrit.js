var numero = 38;
var ok = false;

while( !ok ){
    
    var r = ( prompt("Digite um numero: "));
    
    if( r == numero ){
        ok = true;
        alert("você  Ganhou eeeeee!!!!");
    }else if( r > numero ){
        alert("coloque numero Menor");
    }else {
        alert("coloque numero Maior");
    }
}