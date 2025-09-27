//Create a street fighter character class that makes fighting game characters with 4 properties and 3 methods 
// sorry for adding more properties lol i went overboard

class StreetFighter{
    constructor(characterName, characterNationality, characterPowerLevel, characterUltimate, characterHeight, quote, hobby){
        this.name = characterName
        this.nationality = characterNationality
        this.powerLevel = characterPowerLevel
        this.ultimate = characterUltimate
        this.height = characterHeight
        this.quote = quote

        this.favoriteQuote = function() {
         console.log(`${this.name} loves to say "${this.quote}"`);
        }

        this.favoriteHobby = function(){
            console.log(`${this.name} loves to ${hobby}`)
        }

        this.tellHeight = function(){
            console.log(`${this.name} is ${this.height} cm tall!`)
        }

    }
}

let ironFist = new StreetFighter('Iron First', "Japanese", 2000, "Qiguanchanghong", 40, "Time to heal", "fight Villians")
let reedRichards = new StreetFighter('Mr Fantastic', "American", 2500, "FANTASTIC", 50, "4", "studying science")

console.log(ironFist)
ironFist.favoriteQuote()
ironFist.favoriteHobby()
ironFist.tellHeight()

console.log("--------------------------------------------------------------------------------------")
console.log(reedRichards)
reedRichards.favoriteQuote()
reedRichards.favoriteHobby()
reedRichards.tellHeight()
console.log("----------------------------------------------------------------------------------")
