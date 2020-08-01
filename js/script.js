/*0 é pedra
  1 é papel
  2 é tesoura */ 


 const rock= document.getElementById("rock")
  const paper= document.getElementById("paper")
  const scissors= document.getElementById("scissors")
rock.addEventListener('click', (e)=>{
   let pedra = e.path[1].value
   while(pedra==0){
    let computer = parseInt(Math.random()*(3-0)-0)
    
   if(pedra==computer){
       console.log("EMPATE!!")

   }if(computer==1){
        console.log("você perdeu")
   }if(computer==2){
       console.log("você ganhou!!!")

    }
    pedra++
    
}
})
paper.addEventListener('click', (e)=>{
    let papel = e.path[1].value
   while(papel==1){
    let computer = parseInt(Math.random()*(3-0)-0)
   if(papel==computer){
       console.log("EMPATE!!")

   }if(computer==0){
        console.log("você ganhou!!")
   }if(computer==2){
       console.log("você perdeu")
   }
   papel++
}
})
scissors.addEventListener('click', (e)=>{
    let tesoura = e.path[1].value
   while(tesoura==2){
    let computer = parseInt(Math.random()*(3-0)-0)
   if(tesoura==computer){
       console.log("EMPATE!!")

   }if(computer==0){
        console.log("você perdeu")
   }if(computer==1){
       console.log("você ganhou!!!")
   }
   tesoura++
}
})

function resetar(){
    document.getElementById('placar').innerHTML = "0";
}



















/*

let computer = parseInt(Math.random()*3)
console.log(computer)



    console.log(`placar usuario é ${placarUser} e placar computer é ${placarComputer}`)
    if(computer== 0 && user ==1){
        console.log( "usuario venceu")
        placarUser++
    }else if (computer==1 && user==2){
        console.log( "usuario venceu")
        placaruser++ 
    }else if(computer==2 && user==0){
        console.log( "usuario venceu")
        placarUser++
    }
    else if (computer==2 && user==1){
        console.log( "computador venceu")
        placarComputer++ 
    }else if(computer==0 && user==2){
        console.log( "computador venceu")
        placarComputer++
    }else if(computer == 1 && user==0){
        console.log( "computador venceu")
        placarComputer++
    }else if(){
        console.log("empate")
    }*/
