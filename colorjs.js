
// global variables
var username
var repeatTimes
var colorName

// to confirm user
confirm("this page won't make you enter your sensitive private information like your email or phone ^_^ ")
username=prompt("Please can you enter your name to welcome you ^_^")

login();
colorConfirm(colorName);

function login(){

  // if user does not enter the name
while(!username)
{
  alert("i'll appreciate if you enter your name to welcome you ^_^")
  username=prompt("Please can you enter your name ^_^") 
    
}
 alert(" welcome to this website ^_^ " +username )

<<<<<<< HEAD
   colorName=prompt("could you tell me what is your favorite color (red,blue,green,yellow,orange,purple)")

   // if user does not enter color
=======
  var colorName=prompt("could you tell me what is your favorite color (red,blue,green,yellow,orange")
  
  // if user does not enter color
>>>>>>> 981f2e35a1dff7638e06686a40327bfd9fde4a30
while(!colorName)
{
  alert(":( oh so you won't to till me your favorite color, but i'll appreciate if you tell me ^_^")
  colorName=prompt("could you tell me what is your favorite color")
}

}

function colorConfirm(colorName){

// if user enter blue as fav color
  if(colorName=="blue")
  {
     alert(" Oh really, it is my favorite too have a nice read ^_^ " + username +", you can see your name and your favorite color at the end of the page " )

     repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

     print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='fifthSection'>"+"<li>"+ "Blue: is the color of trust and peace. It can suggest loyalty and integrity as well as conservatism and frigidity."+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png'height='100' width='100'/>" +"</section>" )

     } 
  }
   
//---------------------------------------------------------------
   // if user enter red as fav color
  else if (colorName=="red"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='firstSection'>"+"<li>"+ "Red: is the color of energy, passion, action, ambition and determination."+"</li>" +"<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC'height='100' width='100'/>" +"</section>" )

     } 

  }
//------------------------------------------------------------
  // if user enter orange as fav color
 else if (colorName=="orange"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='secondSection'>"+"<li>"+ "Orange: is the color of social communication and optimism. From a negative color meaning"+"</li>" +"<img src='https://i1.sndcdn.com/avatars-000291473999-m7ddns-t500x500.jpg'height='100' width='100'/>" +"</section>" )}

     } 

//------------------------------------------------------------
// if user enter yellow as fav color
 else if (colorName=="yellow"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='thirdSection'>"+"<li>"+ "yellow: is the color of the mind and the intellect. It is optimistic and cheerful."+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/9/94/Auto_Racing_Yellow.svg'height='100' width='100'/>" +"</section>" )

     } 

  }
//---------------------------------------------------------
// if user enter green as fav color
 else if (colorName=="green"){
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='fourthSection'>"+"<li>"+ "Green: is the color of balance and growth. It can mean both self-reliance as a positive and possessiveness as a negative"+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Dark_green.PNG'height='100' width='100'/>" +"</section>" )

     } 

  }

  else if(colorName=="purple") {
    alert(" your favorite color is "+colorName+" , that's intresting  " +username +", have a nice read ^_^" +" , you can see your name and your favorite color at the end of the page ")

    repeatTimes=prompt("could you tell me how many time you want to repeat your name and your favorite color?. please make sure choose number from 1 to 10 ^^  ")

    print();

     for (var i=0; i<repeatTimes; i++){
       document.write("<section id='sixthSection'>"+"<li>"+ "Purple:combines the calm of blue and the energy of red."+"</li>" +"<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Solid_purple.svg/1024px-Solid_purple.svg.png'height='100' width='100'/>" +"</section>" )

     } 

  }

  else{
    alert(" sorry your inserted color doed not found ")
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
 

 