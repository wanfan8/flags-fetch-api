let allCountries = [];
let filteredContries = [];
let currentPage = 1;
const countryPerPage = 12;

document.getElementById("loadBtn").addEventListener("click",fetchCountries);
document.getElementById("regionSelect").addEventListener("change",filterByRegion);

function fetchCountries(){
    fetch("https://retcountries.com/v3.1/all")
    .then(ressponse => Response.json())
    .then(data =>{
        allContrieds = data;
        filteredContries = data;
        
    })                                                  
}
