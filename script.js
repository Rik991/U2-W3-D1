// esercizio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this._lastName = _lastName;
    this.age = _age;
    this.location = _lastName;
  }
  differentOfAge(userX) {
    if (this.age >= userX.age) {
      return this.firstName + " " + "è più vecchio di" + " " + userX.firstName;
    } else {
      return this.firstName + " " + "è più giovane di" + " " + userX.firstName;
    }
  }
}

const userA = new User("Riccardo", "Santilli", 33, "Abruzzo");
const userB = new User("Gianmarco", "Arzanese", 28, "Campania");

console.log(userB.differentOfAge(userA));

// esercizio 2

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(petX = []) {
    for (let i = 0; i < petX.length; i++) {
      if (this.ownerName === petX[i].ownerName) {
        return true;
      } else {
        return false;
      }
    }
  }
}

const myForm = document.querySelector("form");
const myList = document.getElementById("listOfPets");
const petArray = [];

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const petX = new Pet(
    document.getElementById("petName").value,
    document.getElementById("ownerName").value,
    document.getElementById("speciesPet").value,
    document.getElementById("breedPet").value
  );

  petArray.push(petX);

  const newPetList = document.createElement("li");
  newPetList.innerText = petX.petName + " " + "è il gatto di " + petX.ownerName + " ,è un " + petX.species + " ed è di razza " + petX.breed;
  myList.appendChild(newPetList);
  //  svuoto i campi
  const inputs = myForm.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
  console.log(petArray);
  console.log(petX.sameOwner(petArray));
});
