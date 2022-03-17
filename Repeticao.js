//comentario de uma linha
/* 
bloco de comentario
*/ 
 let numero = 0;
 while(numero<=10){
    
    if(numero%2==0){
        console.log(`Valor Nº: ${(numero)} é Par!`);
    }else{
        console.log(`Valor Nº: ${(numero)}`);
    }
    numero++;
 }

 let numero1 = 11;
 console.log("REPETIÇÃO DO/WHILE");
do{
    console.log(`Valor Nº: ${(numero1)}`);
    numero1++;
}while(numero1<=10);

console.log("REPETIÇÃO FOR");
for(let numero2=0; numero2<=10; numero2++){
    console.log(`Valor Nº: ${(numero2)}`);
    if(numero%2==0){
        console.log(`Valor Nº: ${(numero2)} é Par!`);
    }else{
        console.log(`Valor Nº: ${(numero2)}`);
    }
}