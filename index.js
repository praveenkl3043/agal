const btn=document.getElementsByClassName("enter");
const result=document.getElementsByClassName("data");

const url="https://urlhaus-api.abuse.ch/v1/urls/recent/";


btn[0].addEventListener("click",async function (){


   result[0].innerHTML="Loading..."
  

    try{
        let res= await fetch(url);
        let objet=await res.json();
        console.log(objet)
        result[0].innerHTML=`
        <p><span>${objet[0].id}<span></p>
       
        `
    }catch (error){
        console.log(error);
        
    }
});