import axios from "axios";

// fetch array  of countries with fields (name, flag, alt,  population)
async function fetchCountries() {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,region");
    // sort countries on population
    response.data.sort((a, b) => a.population - b.population);
    let infoCountries = "";
    // loop through all countries
    response.data.map((country) => {
        // create variables with info
        const name = country.name.official;
        console.log(name)
        const flag = country.flags.svg;
        const alt = country.flags.alt
        const population = country.population;
        const colorClass = getColor(country.region)
        console.log(country.region)

        // call createListItem and concat info
        infoCountries += createListItem(name, flag, alt, population, colorClass)
    })
    //display all info
    document.getElementById("countries").innerHTML = infoCountries
}


// Return info per country in right format
function createListItem(name, flag, alt, population, colorClass) {
    return `<li>
<div class="inner-list-item">
<img class="flag" src=${flag} alt=${alt}> 
<span class=${colorClass}>${name}
</span>
</div>
 <p>Has a population of  ${population} people
 </p>
 </li>`
}

function getColor(region) {
    if (region === 'Africa') {
        return 'blue'
    } else if(region === 'Americas') {
        return 'green'
    } else if(region === 'Asia') {
        return 'red'
    } else if(region === 'Europe') {
        return 'yellow'
    } else if(region === 'Oceania') {
        return 'purple'
    } else if(region === 'Antarctic') {
        return 'grey'
    } else {
        return 'orange'
    }

}

fetchCountries()
