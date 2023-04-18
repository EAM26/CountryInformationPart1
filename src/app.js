import axios from "axios";


// fetch array  of countries with fields (name, flag, alt,  population)
async function fetchCountries() {
    const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,region")
    // create variables with info
    console.log(response.data.length)
    const name = response.data[0].name.official;
    const flag = response.data[0].flags.png;
    const alt = response.data[0].flags.alt
    const population = response.data[0].population;
    console.log(response.data)
// call createListItem and show response in index (
    document.getElementById("countries").innerHTML = createListItem(name, flag, alt, population)


}

// Return info per country in right format
function createListItem(name, flag, alt, population) {
    return  `<li><img src=${flag} alt=${alt}> ${name}  <p>Has a population of  ${population} people</p></li>`
}

fetchCountries()
