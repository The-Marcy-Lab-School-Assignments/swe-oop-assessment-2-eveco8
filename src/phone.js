class Phone {
  #password;

  constructor(brand, model, password) {
    this.brand = brand;
    this.model = model;
    this.#password = password;
    this.batteryLevel = 100;
  }

  makeCall(number) {
    this.batteryLevel -= 5;
    return `Calling ${number}`;
  }

  charge() {
    this.batteryLevel = 100;
    return `Phone fully charged`;
  }

  unlock(password) {
    if (this.#password === password) {
      return 'Phone unlocked';
    }
    return 'Invalid Password';
  }
}

class iPhone extends Phone {
  constructor(model, password, numberOfCameras) {
    super('Apple', model, password);
    this.numberOfCameras = numberOfCameras;
  }

  makeCall(number) {
    return `${super.makeCall(number)} using FaceTime audio`;
  }

  faceTime(name) {
    this.batteryLevel -= 10;
    return `Facetiming ${name}`;
  }
}

// TEST YOUR CODE HERE

const flipPhone = new Phone("Nokia", "Flip", "TimeToLearn882");
console.log(flipPhone); // Phone { brand: "Nokia", model: "Flip", batteryLevel: 100 }

// 1. Making a call and checking battery
console.log(flipPhone.makeCall("123-456-7890")); // Calling 123-456-7890
console.log(flipPhone.batteryLevel); // 95 <-- *batteryLevel

// 2. Charging and checking battery
console.log(flipPhone.charge("123-456-7890")); // Phone fully charged
console.log(flipPhone.batteryLevel); // 100 <-- *batteryLevel

// 3. Unlocking the phone: Fixed Version 
console.log(flipPhone.unlock("TimeToLearn882")); // Phone unlocked
console.log(flipPhone.unlock("TimeToLearn883")); // Invalid Password

// DO NOT REMOVE
module.exports = { Phone, iPhone };
