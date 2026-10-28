// Reverse a string without Take a string and print it back to front — no split(), reverse(), or join().
//Pranita - atinarp

let str="Akshay"
let reversed =""

for(let i =str.length-1;i>0;i--)
{
    reversed += str[i]
}

console.log(reversed)


// we can solve this using 2 pointer approacg 

function reversstring (str:string) :string
{
    let arr =str.split("")
    let left = 0 
    let right = str.length-1 

    while(left < right)
    {
        [arr[left],arr[right]] = [arr[right],arr[left]]
        left++
        right--
    }

    return arr.join("")
}
console.log(reversstring("Prashant Maghade"))


function reverseString(str:string):string
{
    let arr = str.split("")
    let left = 0 
    let right = str.length-1
    let temp =""

    while(left<right)
    {
        temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp

        left++
        right--

    }
    return arr.join("")
}

console.log(reverseString("Playwright"))