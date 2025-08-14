// A valid example: 12+ characters, contains at least 2 uppercase letters (A, G), and 2 special characters ('!' and '@').
let sample1 = "abcDef!Ghi@i";
let regex = /^(?=(.*[A-Z]){2,})(?=(.*[!@#$%^&*()\-_+={};<.>]){2,}).{12,}$/;
console.log("Sample 1 Valid:", regex.test(sample1)); // Expected: true
