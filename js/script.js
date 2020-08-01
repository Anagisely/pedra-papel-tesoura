/*0 é pedra
  1 é papel
  2 é tesoura */ 

let valueScore = document.getElementById("value-score")
let score = 0
const rock= document.getElementById("rock")
const paper= document.getElementById("paper")
const scissors= document.getElementById("scissors")
const reset = document.getElementById("reset")

reset.addEventListener('click',(e) =>{
     score = 0
     valueScore.innerHTML = score
})


rock.addEventListener('click', (e)=>{
   let pedra = e.path[1].value
   while(pedra==0){
    let computer = parseInt(Math.random()*(3-0)-0)
    
   if(pedra==computer){
          window.alert("EMPATE!!")
   }if(computer==1){
          window.alert("você perdeu")
   }if(computer==2){
          window.alert("você ganhou!!!")
          score ++
    }
    valueScore.innerHTML = score

    pedra++
}
})
paper.addEventListener('click', (e)=>{
    let papel = e.path[1].value
   while(papel==1){
    let computer = parseInt(Math.random()*(3-0)-0)
   if(papel==computer){
        window.alert("EMPATE!!")
   }if(computer==0){
        window.alert("você ganhou!!")
        score ++
   }if(computer==2){
        window.alert("você perdeu")
   }
   valueScore.innerHTML = score

   papel++
}
})
scissors.addEventListener('click', (e)=>{
    let tesoura = e.path[1].value
   while(tesoura==2){
    let computer = parseInt(Math.random()*(3-0)-0)
   if(tesoura==computer){
        window.alert("EMPATE!!")
   }if(computer==0){
        window.alert("você perdeu")
   }if(computer==1){
        window.alert("você ganhou!!!")
        score ++
   }
   valueScore.innerHTML = score

   tesoura++
}
})

