window.onload = startChange;

function changeBG() {
    hexString = Number(color).toString(16);
    if (hexString.length < 6) {
        while (hexString.length != 6) {
            hexString = "0" + hexString;
        }
    }
    hexCode = "#" + hexString;
    document.getElementById("background").style.backgroundColor = hexCode;
    color = color - 1;
    if (color == 0) {
        color = 16777215;
    }
    document.getElementById("color").innerHTML = hexCode;
}

function changeBGGrey() {
    hexString = Number(color).toString(16);
    if (hexString.length < 2) {
        hexString = "0" + hexString;
    }
    hexCode = "#" + hexString + hexString + hexString;
    document.getElementById("background").style.backgroundColor = hexCode;
    color = color - 1;
    if (color == 0) {
        color = 255;
    }
    document.getElementById("color").innerHTML = hexCode;
}

var changer;
var changerGrey;

function startChange() {
    color = 16777215;
    changer = setInterval(changeBG, 10);
	randomizer();
}

function endChange() {
    clearInterval(changer);
}

function startChangeGrey() {
    color = 255;
    changerGrey = setInterval(changeBGGrey, 40);
}

function endChangeGrey() {
    clearInterval(changerGrey);
}

function random() {
    clearInterval(changer);
    clearInterval(changerGrey);
    color = Math.floor(Math.random() * 16777216)
    hexString = Number(color).toString(16);
    if (hexString.length < 6) {
        while (hexString.length != 6) {
            hexString = "0" + hexString;
        }
    }
    hexCode = "#" + hexString;
    document.getElementById("background").style.backgroundColor = hexCode;
    document.getElementById("color").innerHTML = hexCode;
}

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function changerCol(id) {
	var colors=["Sky Blue","Gold","Navy Blue","Rose Red","Chocolate","Fuchsia","Ivory","Indigo","Vermilion","Skobeloff","Rust","Earth Blue","Snow","Egg Yolk","Leaf","Bronze","Cream","Storm Gray","Olive","Pumpkin","Wheat","Jade","Eggplant","Slate","Mustard","Cotton Candy","Cinnamon","Coral","Midnight","Lavender","Mahogany","Silver","Coquelicot","Lime","Carrot","Peas","Maroon","Aqua","Teal"];
	var code=["#87CEEB","#FFD700","#000080","#FF033E","#7B3F00","#FF00FF","#FFFFF0","#4B0082","#E34234","#007474","#b7410e","#344277","#fffafa","#ffcc5f","#3A5F0B","#CD7F32","#FFFDD0","#717486","#808000","#ff7518","#f5deb3","#00A36C","#483248","#C0C2C9","#e1ad01","#ffbcd9","#D2691E","#FF7F50","#191970","#E6E6FA","#C04000","#C0C0C0","#ff3800","#00FF00","#ed9121","#739122","#800000","#00ffff","#008080"];
	clearInterval(changer);
    clearInterval(changerGrey);
	
	color=document.getElementById(id).innerHTML;
	hex=colors.indexOf(color);
	console.log(code[hex]);
	document.getElementById("background").style.backgroundColor = code[hex];
	document.getElementById("color").innerHTML = code[hex];
}

function toggler() {
    var toggler = document.getElementById("toggler");
    if (toggler.checked == true) {
        endChange();
        startChangeGrey();
    } else {
        startChange();
        endChangeGrey();
    }
}

function custom() {
    var col = document.getElementById("custom").value;

    if (col.charAt(0) != "#") {
        alert("The Color Should Be In Hexadecimal Format");
    } else if (col.length != 7) {
        alert("The Code Should Consist Of 7 Characters (Including The Hash)");
    } else {
        clearInterval(changer);
        clearInterval(changerGrey);

        document.getElementById("background").style.backgroundColor = col;
        document.getElementById("color").innerHTML = col;
    }
}

function library() {
	if(document.getElementById("colorLibrary").style.width == "0px" || document.getElementById("colorLibrary").style.width=="")
	{
		document.getElementById("colorLibrary").style.width = "auto";
		document.getElementById("colorLibrary").style.height = "auto";
		document.getElementById("showLibrary").innerHTML="Hide Color Library";
	}
	else
	{
		document.getElementById("colorLibrary").style.width = "0";
		document.getElementById("colorLibrary").style.height = "0";
		document.getElementById("showLibrary").innerHTML="Show Color Library";
	}
}

function randomizer() {
	var colors=["Sky Blue","Gold","Navy Blue","Rose Red","Chocolate","Fuchsia","Ivory","Indigo","Vermilion","Skobeloff","Rust","Earth Blue","Snow","Egg Yolk","Leaf","Bronze","Cream","Storm Gray","Olive","Pumpkin","Wheat","Jade","Eggplant","Slate","Mustard","Cotton Candy","Cinnamon","Coral","Midnight","Lavender","Mahogany","Silver","Coquelicot","Lime","Carrot","Peas","Maroon","Aqua","Teal"];
	var code=["#87CEEB","#FFD700","#000080","#FF033E","#7B3F00","#FF00FF","#FFFFF0","#4B0082","#E34234","#007474","#b7410e","#344277","#fffafa","#ffcc5f","#3A5F0B","#CD7F32","#FFFDD0","#717486","#808000","#ff7518","#f5deb3","#00A36C","#483248","#C0C2C9","#e1ad01","#ffbcd9","#D2691E","#FF7F50","#191970","#E6E6FA","#C04000","#C0C0C0","#ff3800","#00FF00","#ed9121","#739122","#800000","#00ffff","#008080"];
	var added=[];
	
	for(var i=0; i<12; i++)
	{
		var id=(i+1).toString();
		var ran=Math.floor(Math.random() * (colors.length));
		
		if(added.indexOf(colors[ran])==-1)
		{
			added[i]=colors[ran];
			document.getElementById(id).innerHTML=colors[ran];
		}
		else
		{
			i=i-1;
		}
	}
}