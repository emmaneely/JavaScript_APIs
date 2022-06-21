console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const APP_ID = "oLHVguiBplCRFoXcBwHnHA9QUD8IcFJp";
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";

let searchBtn = document.getElementById("searchBtn");
let searchField = document.getElementById("searchField");

searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    let img = document.querySelector("img");
    let userSearch = searchField.value;

    fetch(`${GIPHY_URL}?&s=${userSearch}&api_key=${APP_ID}`, { mode: "cors" })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);
            img.src = result.data.images.original.url;
            img.alt = result.data.title;
        })
        .catch((error) => {
            console.error(error);
        });

    searchField.value = "";
});