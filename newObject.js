class person {
  constructor(FName, LName, salary) {
    this.firstName = FName;
    this.lastName = LName;
    this.salary = salary;
  }
}

const person1 = new person("Touhidur", "Zaman", 34000);
console.log(person1);

const person2 = new person("Nusrat", "Jahan", 35000);
console.log(person2);
