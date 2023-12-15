// code your solution here
const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don’t have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it’s part of success",
    },
  ];
// firstNamePrinter is created
// it takes in a blank variable called collection
// when called it will go through the collection array, the variable after const can be anything,
//  it represents any object in the array
  function firstNamePrinter(collection) {
    for (const person of collection) {
        console.log(person.firstName);
    }
  }
 // firstNamePrinter(users)

  function blueFilter(collection) {
    for (const person of collection)
    if(person.favoriteColor === "Blue")
    console.log(person.firstName)
  }
//   blueFilter(users)

function colorFilter(collection, color) {
    for(const person of collection){
    if(person.favoriteColor === color){
        console.log(person.firstName)
        }
    }
}
// colorFilter(users, "Red")

const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"}
]

function superbowlWin(bowls) {
    for(const game of bowls) {
    if(game.result === "W") {
    return(game.year)
        }
    }
}
superbowlWin(record)