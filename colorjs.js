var username
username=prompt("Please can you enter your name ^_^")

while(!username)
{
  alert("i'll appreciate if you enter your name to welcome you ^_^")
  username=prompt("Please can you enter your name ^_^") 
    console.log(username)

}
 alert(" welcome to this website ^_^ " +username )
  console.log(username)

  var colorName=prompt("could you tell me what is your favorite color")
  
while(!colorName)
{
  alert(":( oh so you won't to till me your favorite color, but i'll appreciate if you tell me ^_^")
  colorName=prompt("could you tell me what is your favorite color")
}
  if(colorName=="blue")
  {
     alert(" Oh really, it is my favorite too have a nice read ^_^ " + username +", you can see your name and your favorite color at the end of the page " )
     console.log(username+" likes  "+colorName)

  }
  else{
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")
         console.log(username+" likes  "+colorName)

  }
 
 document.write("<h3>"+username+" likes "+colorName+"</h3>")