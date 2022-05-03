function calculateYearUntilRetirement(event) {
   const currentAge = event.target.value;
   
   const yearsLeft = 65 - currentAge;
   if (yearsLeft >= "65") {
       console.log("Time to kick back and enjoy your retirement")
   }
   alert(yearsLeft)
}