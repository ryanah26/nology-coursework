//  Positive or Negative Checker

const myNumber = 3;
if (myNumber >= 0) {
    console.log("My number is positive!")
} else {
    console.log("My number is negative!")
}

//  Days until weekend notifier

switch (new Date().getDay()) {
    case 0:
        console.log("It's already the weekend!")
        break;
    case 1:
        console.log("4 days left")
        break;
    case 2:
        console.log("3 days left")
        break;
    case 3:
        console.log("2 days left")
        break;
    case 4:
        console.log("1 day left")
        break;
    case 5:
        console.log("0 days left")
        break;
    case 6:
        console.log("It's already the weekend!")
        break;
}