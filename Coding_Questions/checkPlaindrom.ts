
// In palindrom problem first we will reverse the original string store it into another variable and compare it to original string 


let s1:string = "Ara"
let s2:string = s1.toLowerCase()
let reversed1=""

for(let i = s2.length-1; i>=0; i--)
{
    reversed1 =  reversed1 + s2[i]
}
console.log(reversed1)



if(s2 === reversed1)
{
    console.log(` ${s1} is a Palindrom`)
}else 
{
    console.log(`${s1} is not a Palindrom`)
}
