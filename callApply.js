//Function under Object called Method:
const normalPeople = {
  firstName: "Touhidur",
  lastName: "Zaman",
  salary: 15000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
  },
};

const heroPeople = {
  firstName: "Arnold",
  lastName: "Schwarzenegger",
  salary: 20000,
};

const otherPeople = {
  firstName: "Chris",
  lastName: "Gaile",
  salary: 10000,
};

normalPeople.getFullName();

normalPeople.chargeBill(150);
normalPeople.chargeBill(1500);
console.log(normalPeople.salary);

//Call another object method use Bind:
const heroChargeBill = normalPeople.chargeBill.bind(heroPeople);
heroChargeBill(2000);
console.log(heroPeople.salary);

const otherChargeBill = normalPeople.chargeBill.bind(otherPeople);
heroChargeBill(1500);
console.log(otherPeople.salary);

//Call another object method use Call:
normalPeople.chargeBill.call(heroPeople, 900);
console.log(heroPeople.salary);

normalPeople.chargeBill.call(otherPeople, 800);
console.log(otherPeople.salary);

//Call another object method use Apply:
normalPeople.chargeBill.apply(heroPeople, [900]);
console.log(heroPeople.salary);

normalPeople.chargeBill.call(otherPeople, [800]);
console.log(otherPeople.salary);
