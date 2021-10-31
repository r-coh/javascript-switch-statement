var foo = 0;
switch (foo) {
  case -1:
    console.log('negative 1');
    break;
  case 0: // foo is 0 so criteria met here so this block will run
    console.log(0);
    // NOTE: the forgotten break would have been here
  case 1: // no break statement in 'case 0:' so this case will run as well
    console.log(1);
    // break; // it encounters this break so will not continue into 'case 2:'
  case 2:
    console.log(2);
    // break;
    case 3: 
    console.log(3);
    case 4:
      console.log(4)
  default:
    console.log('default');
}

var Animal = 'Giraffe';
switch (Animal) {
  case 'Cow':
  case 'Giraffe':
  case 'Dog':
  case 'Pig':
    console.log('This animal is not extinct.');
    break;
  case 'Dinosaur':
  default:
    console.log('This animal is extinct.');
}

// SINGLE CASE EXAMPLE
let day = new Date('January 1, 1970 00:00:00')
switch (day.getDay()) {
    case 0: 
        console.log("Sunny Day");
        break;
    case 1:
        console.log("Money Day");
        break;
    case 2:
        console.log("Two Days");
        break;
    case 3:
        console.log("Wedding Day");
        break;
    case 4: 
        console.log("Thus Day");
        break;
    case 5: 
        console.log("Free Day");
        break;
    case 6:
        console.log("Sabbath Day");
        break;
    default:
        console.log("Not a day of the week.");
}


// MUTLI-CASE EXAMPLE
let epoch_date = new Date('January 1, 1970 00:00:00')
switch (epoch_date.getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Epoch was on a weekday");
        break;
    case 6:
    case 0:
        console.log("Epoch was on a weekend");
        break;
    default:
        console.log("Invalid day of the week");
}
