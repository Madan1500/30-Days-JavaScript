// Task 1
for(let i = 1;i<11;i++)
    console.log(i)
// Task 2
for(let i = 1;i<11;i++)
    console.log(`5 x ${i} = ${5*i}`)
// Task 3
let sum = 0,initial =1;
while(initial<11){
    sum+=initial;
    initial++;
}
console.log(sum)
// Task 4
initial -= 1
while(initial){
    console.log(initial)
    initial--;
}
// Task 5
let n = 1
do{
    console.log(n)
    n++;
}while(n<5)
// Task 6
n =5
let factorial = 1
do{
    factorial *= n
    n--;
}while(n)
console.log(factorial)
// Task 7
for(let i = 0; i < 5; i++) {
    let row = '';
    for(let j = 0; j < i + 1; j++) {
        row += '* ';
    }
    console.log(row); // Print the row after accumulating asterisks
}
// Task 8   
for(let i = 1;i<=10;i++){
    if(i === 5)
        continue
    console.log(i)
}
// Task 9
for(let i = 1;i<=10;i++){
    if(i === 7)
        break
    console.log(i)
}