"use strict";

const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const handHours = document.querySelector('.hand.hours');
const handMinutes = document.querySelector('.hand.minutes');
const handSeconds = document.querySelector('.hand.seconds');

const numberElement = [];
const barElement = [];

// Création des heures
    for (let i = 1; i<=12; i++) {
        numberElement.push(
            `<span style="--index:${i};"><p>${i}</p></span>`
        );
    }
    numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
// 

//  Creation de la bar des secondes
    for (let i = 1; i<=60; i++) {
        barElement.push(
            `<span style="--index:${i};"><p></p></span>`
        );
    }
    barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));
// 

// Creation de la fonction pour recuperer & set l'heure
    function getCurrentTime() {
        let date = new Date();

        let currentHours = date.getHours();
        let currentMinutes = date.getMinutes();
        let currentSeconds = date.getSeconds();

        handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
        handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
        handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
    }
// 

// Appel de getCurrentTime(); au chargement
    getCurrentTime();

// Appel de getCurrentTime(); pour mettre les eguilles toute les secondes
    setInterval(getCurrentTime, 1000); // 1000ms donc 1s