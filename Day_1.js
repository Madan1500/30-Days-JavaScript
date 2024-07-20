var age = 18
console.log(age)

let name = "Madan Mohan Behera"
console.log(name)

const isRaining = false
console.log(isRaining)

let student = {
    name,
    isRaining,
    age
}

const new_array = [age,name,isRaining,student]
new_array.forEach((e)=> console.log(typeof e))

let isRunning = true
isRunning = "yes"
console.log(isRunning)

const observer = true
// observer = fasle will give the error


