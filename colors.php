<!doctype html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <title>Colors | FireMedia</title>
	  <link rel="icon" href="Blog/images/LogoFireICO.ico" type="image/x-icon">
      <link rel="stylesheet" href="colors.css">
      <script src="colors.js"></script>
   </head>
   <body id="background">
      <span style="font-size:40px;cursor:pointer;margin-left:3%;" onclick="openNav()">&#9776;</span>
      <div id="mySidenav" class="sidenav">
         <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
         <input type="text" id="custom" value="#"></input>
         <button id="customBtn" onclick="custom()">Search</button>
         <h1 onclick="library()" id="showLibrary">Show Color Library</h1>
         <div id="colorLibrary">
            <a id="1" href="javascript:changerCol('1')">Sky Blue</a>
            <a id="2" href="javascript:changerCol('2')">Gold</a>
            <a id="3" href="javascript:changerCol('3')">Navy Blue</a>
            <a id="4" href="javascript:changerCol('4')">Rose Red</a>
            <a id="5" href="javascript:changerCol('5')">Chocolate</a>
            <a id="6" href="javascript:changerCol('6')">Fuchsia</a>
            <a id="7" href="javascript:changerCol('7')">Ivory</a>
            <a id="8" href="javascript:changerCol('8')">Indigo</a>
            <a id="9" href="javascript:changerCol('9')">Vermilion</a>
            <a id="10" href="javascript:changerCol('10')">Skobeloff</a>
            <a id="11" href="javascript:changerCol('11')">Rust</a>
            <a id="12" href="javascript:changerCol('12')">Earth Blue</a>
			<br>
			<button id="randomize" onclick="randomizer()">Randomize Colors</button>
         </div>
         <h1>Toggle Greyscale</h1>
         <div id="blackWhite">
            <label class="switch">
            <input type="checkbox" id="toggler" onclick="toggler()">
            <span class="slider round"></span>
            </label>
         </div>
      </div>
      <h1 class="text" id="color"></h1>
	  <center>
         <button id="button" onclick="random()">Random Color</button>
      </center>
	
   </body>
</html>	