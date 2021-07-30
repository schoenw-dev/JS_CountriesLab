class Country{
    constructor(name, language, greeting, colors){
        this.name = name;
        this.language = language;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "English", "Suh Dude?", ["red", "white", "blue"]);
let ireland = new Country("Ireland", "English", "Top 'o' the morning to ya!", ["green", "white", "orange"]);
let germany = new Country("Germany", "German", "Wie gehts?", ["black", "red", "yellow"]);


function DisplayColors(country){
    document.getElementById("CountryName").innerText = country.name;
    document.getElementById("OfficialLanguage").innerText = country.language;
    document.getElementById("HelloWorld").innerText = country.greeting;

    let color1 = document.getElementById("Color1");
    let color2 = document.getElementById("Color2");
    let color3 = document.getElementById("Color3");

    color1.style.backgroundColor = country.colors[0];
    color2.style.backgroundColor = country.colors[1];
    color3.style.backgroundColor = country.colors[2];
}

function SwitchCountry(){
    let country;
    selection = document.getElementById("CountryList").value;
    if(selection === "USA" ){
        country = usa;
    }
    else if(selection === "Ireland"){
       country = ireland;
    }
    else if(selection === "Germany"){
        country = germany;
    }

    DisplayColors(country);
    
}

