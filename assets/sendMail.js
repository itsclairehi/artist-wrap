function sendMail(event){

  //field input values
var aNameVal = document.getElementById('aname').value
var pNameVal= document.getElementById('pname').value
var cNameVal= document.getElementById('cname').value
var sessionsVal = document.getElementById('sessions').value
var songTitleVal= document.getElementById('songTitle').value
var descriptionVal= document.getElementById('description').value

  //verbatim in email
    var name="Artist Name: "+aNameVal
    var pname="Partner name: "+pNameVal
    var cname="Client's name(s): "+cNameVal
    var sessions="session dates: "+sessionsVal
    
    event.preventDefault()
    

//if all fields filled in, send email, else say 'please fill in all fields'

if(aNameVal&&pNameVal&&cNameVal&&sessionsVal&&songTitleVal&&descriptionVal){
  
  //writes email
  document.location.href = 'mailto:claire@austinclassicalguitar.org?subject='+songTitleVal+' wrap-up&body='+name+'%0D%0A'+pname+'%0D%0A'+cname+'%0D%0A'+sessions+'%0D%0A%0D%0A'+'Description: '+descriptionVal

  window.alert("Please attach mp3 or wav file of song to email. Thank you!!")
  
} else{
  window.alert("Please fill out all fields.")
  
}

}
