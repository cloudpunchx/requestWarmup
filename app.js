function getBrewery(){
    axios.request({
        url: `https://api.openbrewerydb.org/breweries/random`,
        method: `GET`
    }).then(brewerySuccess).catch(apiFailure);
}

// you can put let brewData = response.data[0] because it's structured in an array and there's only a length of 1 in the array
function brewerySuccess(response){
    let brewData = response.data;
    console.log(brewData);
    for(let data of brewData){
        results.innerHTML = `<h1>${data.name}</h1>`;
        results.innerHTML += `<h5>${data.street}, ${data.city}</h5>`;
    }
    
}

function apiFailure(error){
    console.log(error);
    results.innerHTML = `<h1>There has been an error.</h1>`;
}

function getCryptoRates(){
    axios.request({
        url: `https://api2.binance.com/api/v3/ticker/24hr`,
        method: `GET`
    }).then(cryptoSuccess).catch(apiFailure)
}

function cryptoSuccess(response){
    let rates = response.data;
    for(rate of rates){
        results.insertAdjacentHTML(`beforeend`, `<p>${rate.symbol}: $${rate.lastPrice}</p>`);
    }
}

function clearResults(){
    results.innerHTML = ``;
}

const results = document.getElementById(`results`);

document.getElementById(`brewerySubmit`).addEventListener(`click`, getBrewery);
document.getElementById(`cryptoSubmit`).addEventListener(`click`, getCryptoRates);
document.getElementById(`clearResults`).addEventListener(`click`, clearResults)
