function rolldice(){
    x = Math.floor(Math.random() * 7);

    if (x==1){
        document.getElementById("die").src="die-1.png"
        console.log(1)
    }

    else if (x==2){
        document.getElementById("die").src="die-2.png"
        console.log(2)
    }

    else if (x==3){
        document.getElementById("die").src="die-3.png"
        console.log(3)
    }

    else if (x==4){
        document.getElementById("die").src="die-4.png"
        console.log(4)
    }

    else if (x==5){
        document.getElementById("die").src="die-5.png"
        console.log(5)
    }

    else if (x==6){
        document.getElementById("die").src="die-6.png"
        console.log(6)
    }

    else{
        document.getElementById("die").src="die-4.png"
        console.log(6)
    }

}

// Copyright © 2022 Shiven Mathur. All rights reserved.