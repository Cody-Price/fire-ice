export const cleanHouses = (dirtyHouses) => {
  return dirtyHouses.map(house => {
    const seats = stringifyArrays(house.seats)
    const ancestralWeapons = stringifyArrays(house.ancestralWeapons)
    const titles = stringifyArrays(house.titles)
    return {
      name: house.name,
      seats: seats,
      titles: titles,
      coatOfArms: house.coatOfArms,
      ancestralWeapons: ancestralWeapons,
      words: house.words,
      swornMembers: house.swornMembers
    }
  })
}

export const stringifyArrays = (arrayToStringify) => {
  // let returnedString = ''
  // if(arrayToStringify.length > 0) {
  //   dirtyWeapons.forEach(currentIndex => {
  //     returnedString += currentIndex
  //   })
  // }
  // return returnedString
  return arrayToStringify.join('')
}

//name, founded, seats, titles, coatOfArms, ancestralWeapons, words

//ancestralWeapons: ["Lady Forlorn"]
// cadetBranches: []
// coatOfArms: "Three black ravens in flight, holding three red hearts, on a white field(Argent, three ravens volant sable, each clutching in their claws a heart gules)"
// currentLord: "https://www.anapioficeandfire.com/api/characters/681"
// diedOut: ""
// founded: ""
// founder: "https://www.anapioficeandfire.com/api/characters/256"
// heir: "https://www.anapioficeandfire.com/api/characters/677"
// name: "House Corbray of Heart's Home"
// overlord: "https://www.anapioficeandfire.com/api/houses/7"
// region: ""
// seats: ["Heart's Home"]
// swornMembers: (8) ["https://www.anapioficeandfire.com/api/characters/255", "https://www.anapioficeandfire.com/api/characters/256", "https://www.anapioficeandfire.com/api/characters/447", "https://www.anapioficeandfire.com/api/characters/654", "https://www.anapioficeandfire.com/api/characters/677", "https://www.anapioficeandfire.com/api/characters/681", "https://www.anapioficeandfire.com/api/characters/871", "https://www.anapioficeandfire.com/api/characters/1182"]
// titles: (2) ["Lord of Heart's Home", "King of the Fingers (historical)"]
// url: "https://www.anapioficeandfire.com/api/houses/81"
// words: ""