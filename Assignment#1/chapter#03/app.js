// Q#1
// Ans

var age = 41;
alert("I am " + age + " years old.");

// Q#2
// Ans

let visitCount = localStorage.getItem('visitCount');

if (visitCount) {
    visitCount = parseInt(visitCount) + 1;
} else {
    visitCount = 1;
}

localStorage.setItem('visitCount', visitCount);

console.log('Visit count:', visitCount);
alert("You have visited this site = " + visitCount + " times");


// Q#3
// Ans

window.onload = function () {
    var birthYear = 1984;
    document.getElementById("year").innerHTML = "My birth Year is " + birthYear + "<br> Data type of my declared variable is number";



// Q#4
// Ans

var visitorName="Muhammad Sufyan";
var item="T-shirt(s)";
var numberOfPurchase=5;



    document.getElementById("product").innerHTML = visitorName+" ordered " + numberOfPurchase +" "+ item + " on j. clothing store";
}

