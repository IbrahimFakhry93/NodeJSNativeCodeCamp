let array = ["one", "two", "three", "four", "five"];
let max = 3;
let started = 0;

function recursive() {
  while (array.length > 0 && started < max) {
    started++;
    var item = array.shift();
    // console.log(item);
    setTimeout(() => {
      console.log(item);
      started--;
      recursive();
    }, 1000);
  }
}

recursive();
