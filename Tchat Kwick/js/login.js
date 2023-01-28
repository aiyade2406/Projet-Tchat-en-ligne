
            function getValue() {
                let reesayer='Veuilez ressayer';
                var inputpseudo = document.getElementById("pseudo").value;
                var inputpassword = document.getElementById("password").value;
                fetch(`http://greenvelvet.alwaysdata.net/kwick/api/login/${inputpseudo}/${inputpassword}`)
                .then(res => res.json())
                .then (data => {
                    //console.log(data);
                        if(data.result.status =="done"){
                           // console.log('voila');
                            
                            localStorage.setItem('jetone',data.result.token);
                            
                            let identifiant=data.result.id
                            //console.log(identifiant)
                            localStorage.setItem('identifiant',identifiant);
                            //console.log(identifiant)
                            window.location.href="espace_membre.html"
                        }
                        if (data.result.status =="failure") {
                            alert('Compte inexistant')
                            
                        }
                      
                    }
                  
    
                );
            
                
        }