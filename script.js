const titolo= document.getElementById("titolo")
console.log(titolo)

const image = document.getElementById("img")
console.log(image)

const button = document.getElementById("btn");
console.log(button)


// button.addEventListener ('click', 
//     function() {
//         if (button.innerText === 'Accendi') {
//             image.src = '/img/yellow_lamp 1.png'
//             button.innerText = "Spegni"
//         } else

//         if (button.innerText === 'Spegni') {
//             image.src = '/img/white_lamp 1.png'
//             button.innerText = "Accendi"
//         }
//     }
// )


let control = false;
button.addEventListener ('click', 
    function() {
        if (!control) {
            image.src = '/img/yellow_lamp 1.png'
            button.innerText = "Spegni"
            control = true;
        } else {
            image.src = '/img/white_lamp 1.png';
            button.innerText = "Accendi";
            control = false;
        }
    }
)



