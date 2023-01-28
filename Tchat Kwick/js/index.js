function getValue() {
   
    var inputpseudo = document.getElementById("pseudo").value;
    var inputpassword = document.getElementById("password").value;
    
    fetch(`http://greenvelvet.alwaysdata.net/kwick/api/signup/${inputpseudo}/${inputpassword}`)
  .then(res => res.json())
  .then (res2 =>{
    console.log(res2)
    let jeton=res2.result.token;
    if(res2.result.status =="done"){
      window.location.href="login.html"
    }
    if(res2.result.status =="failure"){
      alert("Cette uttilisateur existe déja")
    }
  });





}