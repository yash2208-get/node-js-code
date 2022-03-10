// console.log("Welcome Js 😎😎")
let a=5;
let flat=1;
for(let j=2; j*j<=a;j++)
{
    if(a%j==0)
    {
        flat=0;
        break;
    }
}
    if(flat==1)
    {
        console.log("Is Prime 😎😎")
    }
    else
    {
        console.log("Is Not Prime 😌😌")
    }
