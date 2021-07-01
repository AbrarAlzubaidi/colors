var username
var repeatTimes

confirm("this page won't make you enter your sensitive private information like your email or phone ^_^ ")
username=prompt("Please can you enter your name to welcome you ^_^")

// if user does not enter the name
while(!username)
{
  alert("i'll appreciate if you enter your name to welcome you ^_^")
  username=prompt("Please can you enter your name ^_^") 
    
}
 alert(" welcome to this website ^_^ " +username )

  var colorName=prompt("could you tell me what is your favorite color")
  
  // if user does not enter color
while(!colorName)
{
  alert(":( oh so you won't to till me your favorite color, but i'll appreciate if you tell me ^_^")
  colorName=prompt("could you tell me what is your favorite color")
}

// if user enter blue as fav color
  if(colorName=="blue")
  {
     alert(" Oh really, it is my favorite too have a nice read ^_^ " + username +", you can see your name and your favorite color at the end of the page " )

     repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

     print.call();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section style='color:blue'>"+"<li>"+ "Blue: is the color of trust and peace. It can suggest loyalty and integrity as well as conservatism and frigidity."+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png'height='100' width='100'/>" +"</section>" )

     } 
  }
   
//---------------------------------------------------------------
   // if user enter red as fav color
  else if (colorName=="red"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print.call();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section style='color:red'>"+"<li>"+ "Red: is the color of energy, passion, action, ambition and determination."+"</li>" +"<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'height='100' width='100'/>" +"</section>" )

     } 

  }
//------------------------------------------------------------
  // if user enter orange as fav color
 else if (colorName=="orange"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print.call();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section style='color:orange'>"+"<li>"+ "Orange: is the color of social communication and optimism. From a negative color meaning"+"</li>" +"<img src='https://i1.sndcdn.com/avatars-000291473999-m7ddns-t500x500.jpg'height='100' width='100'/>" +"</section>" )}

     } 

//------------------------------------------------------------
// if user enter yellow as fav color
 else if (colorName=="yellow"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print.call();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section style='color:yellow'>"+"<li>"+ "yellow: is the color of the mind and the intellect. It is optimistic and cheerful."+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/9/94/Auto_Racing_Yellow.svg'height='100' width='100'/>" +"</section>" )

     } 

  }
//---------------------------------------------------------
// if user enter green as fav color
 else {
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print.call();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section style='color:green'>"+"<li>"+ "Green: is the color of balance and growth. It can mean both self-reliance as a positive and possessiveness as a negative"+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Dark_green.PNG'height='100' width='100'/>" +"</section>" )

     } 

  }
//------------------------------------------------------------

  // function to print name and color and the content
 function print (){
   while ( repeatTimes > 10 ){
       repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")
      }

        for (var i=0; i<repeatTimes && repeatTimes <= 10 ; i++)
         {
              document.write("<h3>"+ username+" likes "+ colorName+"</h3>")
         }

 }
 

 