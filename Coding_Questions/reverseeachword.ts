// to reverse each word from string we need to seperate each word from sentence then reverse each word in the same order 


let str1= "I love Javascript"
let words = str1.split(" ")
let result = ""

for(let i =words.length-1;i>=0;i--)
{
    result = result + words[i] + " "
}

console.log(result)


