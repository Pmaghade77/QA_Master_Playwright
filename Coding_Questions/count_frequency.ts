//count frequency of characters in string 

let s = "priyapry"

for(let i=0; i<s.length;i++)
{

        let count = 0 

        for (let j = 0; j<s.length;j++)
        {
            if(s[i] === s[j])
            {
                count= count+1

            }
        }
         console.log(s[i] + " appears " + count + " time(s)");
}


