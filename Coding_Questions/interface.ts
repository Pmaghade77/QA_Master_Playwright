// interface defines the blueprint/contract of an object defines the shape of it
//properties+ methods 


interface Users{
    name:string,
    age:number
    start():void
}

let user:Users =
{
    name:'Prashant',
    age:30,
    start()
    {
        console.log("Start method inside object who is following interface")
    }
}

const {name:fname,age,start} = user

console.log(fname)
start()

