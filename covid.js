/*
https://documenter.getpostman.com/view/10808728/SzS8rjbc#00030720-fae3-4c72-8aea-ad01ba17adf8 

Requirements
You must provide the following:

Pull data from an API that we have provided
Utilize GET only
Be as creative as you like
Feel free to use Bootstrap, Material, Flexbox, CSS Grid, etc.
Content should be visually appealing
The content must be professional and appropriate
The selected API and display of the data should differ from the examples given in class.
Styling:
Some styling is required
Do not take up a large portion of your time styling - that's always something you can come back to. 
*/


// ALL: /all
// COUNTRIES: /countries
// SUMMARY : /summary


// const baseUrl = 'https://api.covid19api.com/summary'
buttonElement = document.getElementById('button1')
displayElement = document.getElementById('display-stats')







function displayInfo(country){
    displayElement.innerHTML = '';
    let countryArea = document.createElement('p');
    countryArea.innerText = country;
    displayElement.appendChild(countryArea);

}


// function displayInfo(summary , country){
//     displayElement.innerHTML = '';
//     let summaryArea = document.createElement('p');
//     let countryArea = document.createElement('p');
//     summaryArea.innerText = summary;
//     countryArea.innerText = country;
//     displayElement.appendChild(summaryArea);
//     displayElement.appendChild(countryArea);

// }

// function getSummary(){
//     let response = fetch ('https://api.covid19api.com/summary')
//     .then ( response => response.text())
//     .then (data => console.log(data))
// }



function getCountries(){
    let response = fetch ('https://api.covid19api.com/countries')
    .then ( response => response.json())
    .then (jsonData =>{ console.log(jsonData)
    let country = jsonData.country;
    displayInfo(country);
    })
}

buttonElement.addEventListener('click', ()=>{
    console.log('testing' );
    getCountries()

})