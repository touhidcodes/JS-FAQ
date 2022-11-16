// Time Out sets time for execute function
function para() {
  console.log("wait for print");
}

setTimeout(para, 1500); //Time in Mili Second

// Time interval sets time for continuos function
function continuos() {
  console.log("printing");
}
setInterval(continuos, 2000); //Time in Mili Second
