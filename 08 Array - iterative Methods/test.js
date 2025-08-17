//& findLast:
(function () {
  function more_than_enough(item) {
    return item > 60;
  }

  let grades = [20, 30, 40, 50, 60, 80, 90];

  let results = grades.findLast(more_than_enough);
  console.log(results); //* 80
})();
