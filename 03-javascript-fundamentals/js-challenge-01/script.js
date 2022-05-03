function calculateYearUntilRetirement(event) {
   const currentAge = event.target.value;
   
   const yearsLeft = 65 - currentAge;
   if (yearsLeft >= "65") {
       console.log("Time to kick back and enjoy your retirement")
   }
   alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;


    if (greeting == "hello") {
        alert("bonjour")
    } else if (greeting == "goodbye") {
        alert("au revior")
    } else {
        alert("not recognised")
    }
}