// SOLUTION A
var introductionMesssage1 =  "My Name is Ntwampe"
introductionMesssage1 +=  ", I'm a student at MTN App Academy"
introductionMesssage1 += " my Github username is NMampuru"

console.log(introductionMesssage1);
console.log("")
// SOLUTION B
var appCat = ["Best Enterprise Solution","Best Consumer Solution","Best Gaming Solution","Best African Solution","Most Innovative Solution","Best Incubated Solution","Best Educational Solution","Best Agricultural Solution","Best Financial Solution","Best Health Solution","Best Breakthrough Developer","Best South African Solution"," Campus Cup","Huawei AppGallery Category 15"]

var dice = Math.random() * 13;
let number = Math.round(dice)

console.log("Dice roll")
console.log(number)

console.log("*******Winning category for MTN Business App of the Year in the year 2022*******")
console.log(appCat[number])

// SOLUTION C
const fs = require('fs')
  
// Data which will write in a file.
let data = "AppName : UniWise , Developer: OGO Studio , Category: Educational, Institution: 404 Institution NOT FOUND"
  
fs.writeFile('myfile.txt', data, (err) => {
    if (err) throw err;
})

console.log("")
//Read data from file then log
fs.readFile('myfile.txt', (err, data) => {
    if (err) throw err;
    console.log("__________Content Read From File__________")
    console.log(data.toString());
})