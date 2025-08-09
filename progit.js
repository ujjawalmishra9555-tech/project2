console.log("hii project 2");
let btn1 = document.querySelector("button");
let inp = document.querySelector("input");

btn1.addEventListener("click",async()=>{
     let num = parseInt(inp.value);
    console.log(num);
   let imgnew = await getimg(num);
   let img = document.querySelector("#img1");
 img.src = imgnew[0];
 
let mainbx = document.querySelector(".mainbox");

if (mainbx){
 mainbx.append(img);
} else{
  console.log("error hai bhai")
};

 mainbx.innerHTML = "";

   console.log(imgnew);

});


let url = "https://deckofcardsapi.com/api/deck/new/draw/?count=";


async function getimg(num) {
  try{
    let resl = await axios.get(url+num);
    console.log(resl.data.cards);
    return  resl.data.cards.map(card => card.image);

  }catch(erro){
    console.log("error ho gaya sayed tum ne count nhi diya",erro)
  }
};

