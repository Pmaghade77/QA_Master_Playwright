// to remove dup character from we need to iterate each ch from string check if its present in another variable if its presrnt there don't add to that variable if its not then add it 



let str2 = 'aaaaahant'
let result2 =""

for(let ch of str2)
{
  if(!result2.includes(ch))
  {
    result2 = result2 + ch
  }
}

console.log(result2)


