function soma(n1,n2,n3,n4){
    let somaNotas = n1+n2+n3+n4
    return somaNotas
}
console.log(soma(10,9,10,8))

function media(somaNotas){
    return somaNotas/4  
}

console.log(`Média do aluno Theo: ${media(37)}`)

console.log(`Média do aluno Theo: ${media(soma(10,9,10,8))}`)