class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    let result= document.getElementById("CountryList");
    let choice = result.value;
    if(choice === "USA"){
         printCountry(usa)
    }
    else if(choice === "Mexico") {
        printCountry(mexico);
    }
    else if(choice === "Algeria") {
         printCountry(algeria);
    }
}
function printCountry(Country){
        document.getElementById("CountryName").innerText=`${Country.name}`;
        document.getElementById("OfficialLanguage").innerText=`${Country.lang}`;
        document.getElementById("HelloWorld").innerText=`${Country.greeting}`;
        DisplayColors(Country.colors);
}

function DisplayColors(color){
    document.getElementById("Color1").style.backgroundColor = color[0];
    document.getElementById("Color2").style.backgroundColor = color[1];
    document.getElementById("Color3").style.backgroundColor = color[2];
}
