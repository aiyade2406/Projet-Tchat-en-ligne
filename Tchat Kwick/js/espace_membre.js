let left =document.getElementById('left');
       
      

console.log(localStorage.getItem('jetone'));
let bouton= document.getElementById('bouton');
let boutonenvoyer= document.getElementById('envoyerMess');
let boutone= document.getElementById('boutonliste');
boutonenvoyer.addEventListener("click", envoyer);
bouton.addEventListener("click", lancer);
boutone.addEventListener("click", listemessage);

function lancer(){
fetch("http://greenvelvet.alwaysdata.net/kwick/api/logout/"+localStorage.getItem('jetone')+"/"+localStorage.getItem('identifiant'))
.then(reponse => reponse.json())
.then(reponse2=>console.log(reponse2))
window.location.href="login.html";

console.log('sa marche');




}   
function utili(){
  fetch("http://greenvelvet.alwaysdata.net/kwick/api/user/logged/"+localStorage.getItem('jetone'))
.then(response=> response.json())
.then(res2 =>{

let user=res2.result.user


for (let index = 0; index < res2.result.user.length; index++) {

      let unconnecter=document.createElement('div');

    unconnecter.className='connecter';

    let droite=document.getElementById('droite');

    
    droite.appendChild(unconnecter)
    unconnecter.innerHTML = user[index];
   

}

});



}

function listemessage(){
  fetch("http://greenvelvet.alwaysdata.net/kwick/api/talk/list/"+localStorage.getItem('jetone')+"/0")
.then(responses=> responses.json())
.then(res3 =>{
for (let i = 0; i < res3.result.talk.length; i++) {


let contenu= res3.result.talk[i].content

console.log(contenu)





let nom_uttilisateur=  res3.result.talk[i].user_name



let zonemessage= document.createElement('div');
zonemessage.className='message';

let zonetchat=document.getElementById('listedesmessage');
zonetchat.appendChild(zonemessage)
zonemessage.innerHTML = res3.result.talk[i].user_name+": "+contenu;


;


}

});



}




function envoyer(){
  var inputmessage = document.getElementById("message").value;
  const encoded = encodeURI(inputmessage);
  console.log("http://greenvelvet.alwaysdata.net/kwick/api/say/"+localStorage.getItem('jetone')+"/"+localStorage.getItem('identifiant')+"/"+encoded)
      fetch("http://greenvelvet.alwaysdata.net/kwick/api/say/"+localStorage.getItem('jetone')+"/"+localStorage.getItem('identifiant')+"/"+encoded)
    .then(response5=> response5.json())
    .then(res5 =>{
        
      
  });
}
