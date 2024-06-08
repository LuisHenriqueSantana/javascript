var  num = [1,3,5]
num[3] = 2
num.push(7)
num.length
num.sort()

// console.log(num)
// console.log(num.length)
// console.log(num[4])     

for(let pos = 0; pos < num.length; pos++){
    console.log(num[[pos]])
}

for(let pos in num){
    console.log(num[pos])
}

