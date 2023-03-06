/*let valores = [2, 8, 10, 23, 5]

for (let pos = 0; pos < valores.length; pos++)
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`) 
*/
    //simplificando esse código, é correto usar

let num = [2, 8, 10, 23, 5]

    for(let pos in num){
        console.log(`A posição ${pos} tem o valor de ${num[pos]}`)
       
    }

    let pos = num.indexOf(23)
        console.log(`O valor ${num.indexOf()} está na posição ${pos}`)
        

    