//task1
const CountToN=(x)=>
{
    let absx=Math.abs(x);
    
    let index =1;
    while(index<=absx)
    {
        console.log(index);
        index++;
    }
};
CountToN(10)
//task2
function getnumber()
{
    let num = Number( prompt("Enter a Number: ") );
    
       while(isNaN(num)) 
       {
           num=Number(prompt("Enter a Number"));
           
       } 
       console.log(num + 10);
}


getnumber();






//task4
function Multiples (m,n,mult)

{
    let absx=Math.abs(m);
    
    let index =1;
    while(index<=absx)
    {
        mult.push(m*index);
        index++;
    }
}
let t=[]
Multiples(10,5,t)