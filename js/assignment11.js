



function multiplicationTable(num){
    for(let i = 1; i<= 10; i++){
        const product = num * i;
        console.log(num + ' x ' + i + ' = ' + product);
    
    }
}
console.log("multiplacation result is : ");
multiplicationTable(10);