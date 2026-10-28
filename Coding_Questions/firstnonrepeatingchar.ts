//to find first non repeating character we need to use 2 loops and compare each ch to other ch's of string and count the occurances of it and if the count of first ch matches to one then we will return that ch


let str3 = "pprriyaaa"
let result4 =""

for(let i=0 ; i<str3.length;i++)
{
    let count = 0 

    for(let j = 0;j<str3.length;j++)
    {
        if(str3[i] === str3[j])
        {
            count = count+1
        }
    }

    if(count === 1)
    {
        console.log(str3[i])
        
    }
}

