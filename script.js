// button du menu
const navbtn= document.querySelector('.navbtn');
const navMenu = document.querySelector('.ul');

navbtn.addEventListener('click', () => {
    navMenu.classList.toggle('show'); 
});


//formulaire

let form = document.getElementById("form");
let inputs = document.querySelectorAll(".in"); 
let p_errors = document.querySelectorAll(".p_error"); 
let messError = document.getElementById("messError");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    let isValid = true; 

    inputs.forEach((input, index) => {
        if (input.value.trim() === "") {
            p_errors[index].textContent = "Ce champ est obligatoire";
            isValid = false;
        } else {
            p_errors[index].textContent = ""; 
        }
    });

  
    if (inputs[3].value !== inputs[4].value) {
        p_errors[4].textContent = "Les emails ne correspondent pas";
        isValid = false;
    } else {
        p_errors[4].textContent = ""; 
    }

    if (isValid) {
        messError.textContent = "Votre formulaire a été soumis avec succès";
        messError.style.color = "blue";
        form.reset(); 
    } else {
        messError.textContent = "";
    }
});





