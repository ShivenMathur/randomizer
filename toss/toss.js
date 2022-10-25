function generaterand() {  
    x = (Math.floor(Math.random() * 2));
    if(x==1){
    	document.getElementById("image").src="coin1.png"
        document.getElementById("what").innerHTML="Heads"
        console.log("heads")
    }else{
        document.getElementById("image").src="coin2.png"
        document.getElementById("what").innerHTML="Tails"
        console.log("tails")
    }

}

// Copyright © 2022 Shiven Mathur. All rights reserved. 