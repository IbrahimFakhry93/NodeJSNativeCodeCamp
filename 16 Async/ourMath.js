exports.calcAvg = function (cb, ...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  const avg = sum / nums.length;
  cb(avg);
};
