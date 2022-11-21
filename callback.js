// JS Callback
function callback_exp(name, age, task) {
  console.log("My Name is ", name);
  console.log("My age ", age);
  task();
}

function washHand() {
  console.log("Wash your hand Properly");
}

function takeBath() {
  console.log("Take a bath Properly");
}

function scroollingFB() {
  console.log("Scrolling Facebook");
}

callback_exp("Rohim Khan", 34, washHand);
callback_exp("Korim Khan", 29, takeBath);
callback_exp("Bolim Khan", 16, scroollingFB);
