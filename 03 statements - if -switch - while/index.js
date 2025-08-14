function random_num() {
  let value = Math.ceil(Math.random() * 9); //* any value from 1 to 9, if Math.floor() it will be from 0 to 9
  console.log(value);
  return value;
}

switch (random_num()) {
  case 1:
  case 2:
  case 3:
    console.log("low");
    let new_num = Math.ceil(Math.random() * 90); //* any code for demonstration
    break;
  case 4:
  case 5:
    console.log("medium");
    //let new_num= Math.ceil(Math.random() * 90); //! error (new_num already declared)
    break;
  default:
    console.log("more than enough");
}
