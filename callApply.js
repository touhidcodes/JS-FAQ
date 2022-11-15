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

console.log(normalPeople.chargeBill(150));
