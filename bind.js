//Call other object method use bind
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

const heroChargeBill = normalPeople.chargeBill.bind(heroPeople);
heroChargeBill(2000);
console.log(heroPeople.salary);

const otherChargeBill = normalPeople.chargeBill.bind(otherPeople);
heroChargeBill(1500);
console.log(otherPeople.salary);
