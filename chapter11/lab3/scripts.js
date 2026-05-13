/*
Author: Devonte Salmon
File Name: script.js
Date: 5/11/2026
*/

// Hamburger menu function
function hamburger() {

    var menu = document.getElementById("menu-links");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    }

    else {
        menu.style.display = "block";
    }
}

/*
Second function:
Displays a welcome alert message
*/

function welcomeMessage() {

    alert("Welcome to Campus Events Hub!");

}