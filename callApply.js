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

normalPeople.getFullName();

normalPeople.chargeBill(150);
normalPeople.chargeBill(1500);
console.log(normalPeople.salary);
