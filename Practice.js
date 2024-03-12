"use strict";
//IF & Else
// Program # 1
let Username = "Danish";
let Pw = "000";
let code = "0000";
let Facecode = "12";
if (Username === "Hassan" && Pw === "1234") {
    console.log("Kindly provide code");
    if (code === "4567") {
        console.log("Welcome Home" + " " + Username);
        if (Facecode === "11") {
            console.log("Face Matched Open The Door");
        }
    }
}
else if (Username === "Danish" && Pw === "000") {
    console.log("Provide Code");
    if (code === "0000") {
        console.log("Welcome Home" + " " + Username);
        if (Facecode === "12") {
            console.log(Username + " " + "Face Matched Open The Door");
        }
    }
}
else {
    console.log("Invalid Person");
}
//Program # 2
let SName = "MK";
let FName = "MSK";
let Slot = "Tuesday";
let Time = 8;
if (SName === "MK" && FName === "MSK") {
    console.log("Welcome");
    if (Slot === "Tuesday" && Time === 8) {
        console.log("You are Right Time to Come Welcome" + SName);
    }
}
else if (SName === "MK" && FName === "MSK") {
    console.log("Welcome");
    if (Slot === "Tuesday" && Time === 8) {
        console.log("You are Right Time to Come Welcome" + SName);
    }
}
else {
    console.log("Failed to Login");
}
// Program 3 (Result)
let STName = "Hassan";
let Result = "Pass";
let Per = "B90";
let Above90 = "A1 Grade";
let Below90 = "A Grade";
let Below80 = "B Grade";
let Below70 = "Fail";
if (STName == STName && Result == "Pass" && Per == "A90") {
    console.log("Weldone" + " " + "Mr / Ms." + STName + " " + "You Scored" + " " + Above90);
}
else if (STName == STName && Result == "Pass" && Per == "B90") {
    console.log("Weldone" + " " + "Mr / Ms." + STName + " " + "You Scored" + " " + Below90);
}
else if (STName == STName && Result == "Pass" && Per == "B80") {
    console.log("Weldone" + " " + "Mr / Ms." + STName + " " + "You Scored" + " " + Below80);
}
else {
    console.log("Failed");
}
//Program # 4 (For Loop)
let Hassan = ["Imran", "Sohail", "Kashif"];
for (let i = 2; i < Hassan.length; i++) {
    console.log(Hassan[i]);
}
//Program # 5 (Table for Loop)
let n1 = 10;
for (let h = 1; h <= 25; h++) {
    console.log(`${n1}*${h}=${n1 * h}`);
}
