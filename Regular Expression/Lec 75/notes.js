let data = `[
    {id: 1, first_name: Titos, last_name: Belcher, email: tbelcher@webnode.com, ip: 55.90.198.6},
    {id: 2, first_name: Lock, last_name: McCord, email: lmccord1@census.gov, ip: 120.38.126.253},
    {id: 3, first_name: Celinka, last_name: Feldon, email: cfeldon2@msu.edu, ip: 196.117.76.115},
    {id: 4, first_name: Zaccaria, last_name: Balogun, email: zbalogun3@newsvine.com, ip: 192.178.0.38},
    {id: 5, first_name: Charles, last_name: Aumerle, email: caumerle4@reverbnation.com, ip: 191.119.139.237},
    {id: 6, first_name: Coleman, last_name: Jerrams, email: cjerrams5@dell.com, ip: 10.121.96.209},
    {id: 7, first_name: Zared, last_name: Shreeves, email: zshreeves6@cbc.edu, ip: 185.70.114.128},
    {id: 8, first_name: Asia, last_name: Satyford, email: asatyford7@usda.gov, ip: 73.139.215.11},
    {id: 9, first_name: Shirlee, last_name: Murrey, email: smurrey8@sfgate.edu, ip: 242.89.246.203},
    {id: 10, first_name: Penn, last_name: Munks, email: pmunks9@ezinearticles.com, ip: 188.132.223.58}
    ]`;

let tld = "com"; //* we mutate to 'gov' 'edu'  as the user likes, the user can mutate form an UI interface

let emailPatternObj = new RegExp("[\\w]+@[\\w]+\\." + tld, "g"); //* g is flag, without flag g, the regex will stop searching after first match
// let emailPatternObj = new RegExp("\\w+@\\w+\\." + tld, "g");
// console.log(emailPatternObj.test(data));
// let emails1 = data.match(emailPatternObj); //* return array, if nothing matches, it returns null

// if (emails1 != null) console.log(emails1.join("\n"));
//*=====================================

let strDot = "Ibrahim Petro";

let regDot = /p.+/i;
//? or use quantifier
console.log(regDot.test(strDot)); //* true

console.log(strDot.match(regDot).join("\n")); //* petr
//*===================================================
