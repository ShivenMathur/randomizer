let fullbtn = document.querySelector(".fullbtn");
fullbtn.addEventListener("click", generaterand);

function generaterand() {

    let first = document.querySelector(".first").value;
    let second = document.querySelector(".second").value;

    randnum = Math.floor(Math.random() * parseInt(second));

    if (randnum>=parseInt(first)){
        let preview = document.querySelector(".preview");
        preview.innerHTML = randnum;
    }


}

// Copyright © 2022 Shiven Mathur. All rights reserved. 