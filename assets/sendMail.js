function sendMail(event){
    var name="Artist Name: "+document.getElementById('aname').value
    var pname="Partner name: "+document.getElementById('pname').value
    var cname="Client's name(s): "+document.getElementById('cname').value
    var sessions="session dates: "+document.getElementById('sessions').value
    var songTitle=document.getElementById('songTitle').value
    var description=document.getElementById('description').value

    console.log(name, pname, cname, sessions )
    console.log("hello")
    event.preventDefault()
    
    //open email
  document.location.href = 'mailto:cpuckett9@gmail.com?subject='+songTitle+' wrap-up&body='+name+'%0D%0A'+pname+'%0D%0A'+cname+'%0D%0A'+sessions+'%0D%0A%0D%0A'+'Description: '+description

  window.alert("Please attach mp3 or wav file of song to email. Thank you!!")

}


{/* <script type="text/javascript">
  var email = "someone@microsoft.com";
  document.write('<a href="mailto:'+email+'">email</a>');
</script> */}

//create email and email button
//   document.write('<a href="mailto:cpuckett9@gmail.com?subject='+songTitle+' wrap-up&body='+name+'%0D%0A'+pname+'%0D%0A'+cname+'%0D%0A'+sessions+'%0D%0A'+description+'">email</a>')