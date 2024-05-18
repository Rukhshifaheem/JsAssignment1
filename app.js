alert('Welcome to our corner of the web!')
alert('Error! Please enter a valid password')
alert("Welcome to JS Land...\nHappy Coding!")
alert("Welcome to JS Land...")
alert("Happy Coding!")
console.log("Hello...I can run JS through my web browser's console")

// Chapter # 2

let username1;
alert(username1)
let myName1="Rukhshi Faheem"
alert(myName1)
let message="Hello World"
alert(message)
let studentName="Jhone Doe"
let studentAge="15"
let certificate="Certified Mobile Application Developement"
alert(studentName)
alert(studentAge)
alert(certificate)
let pizza="PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza)
let mesg="My email address is"
let email="rukhshi.faheem@gmail.com"
alert(mesg+" "+email)
let learn="I am trying to learn from the book"
let book="A smarter way to learn JavaScript"
alert(learn+" "+book)
document.write("Yah! I can write HTML content through JavaScript")
let string="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(string)
document.write("<p>"+string+"</p>")

// Chapter # 3

let age=15
alert("I am"+age+" "+"years old")

let N=5
alert('You have visited this site' + " " + N + " " + 'times')

let birthYear1=1990
document.write("My birth year is" + " " + birthYear1 + "<br/>")
document.write("Data type of my declared variable is number." + "<br/>")

let visitor="John Doe"
let product="T-Shirts(s)"
let quantity=5
document.write(visitor + " " + "ordered" + " " + quantity  + " " + product + " " + "on XYZ Clothing store.")

// Chapter # 4

// let myName, age, gender;
// alert(myName + age + gender)

let myAge, my_name, myName123, $myName, MyName$;

// let my Age, 123myAge, my#age, name, myAge!;

document.write('<h3>Rules for naming JS variables</h3>' + "<br/>")
document.write('<li> Variable names can only contain letters, numbers, dollar sign and under score sign. For example $my_1stVariable</li>' + "<br/>" + '<li> Variable must begin with a letter, dollar sign or under score sign. For example $name, _name or name</li>' + "<br/>" + '<li> Variable names are case sensitive.</li>' + "<br/>" + '<li> Variable names should not be JS keywords.</li>')

// Chapter#5/Q1

let num1=3
let num2=5
let addNum=num1 + num2

// Chapter#5/Q2

let subsNum=num2 - num1
let proNum=num1 * num2
let divNum=num2 / num1
let modNum=num2 % num1
document.write('Sum of' + ' ' + num1 + ' ' + 'and' + ' ' + num2 + ' ' + 'is' + ' ' + addNum + "<br/>")
document.write('Difference of' + ' ' + num2 + ' ' + 'and' + ' ' + num1 + ' ' + 'is' + ' ' + subsNum + "<br/>")
document.write('Product of' + ' ' + num1 + ' ' + 'and' + ' ' + num2 + ' ' + 'is' + ' ' + proNum + "<br/>")
document.write('Quotient of' + ' ' + num2 + ' ' + 'divided by' + ' ' + num1 + ' ' + 'is' + ' ' + divNum + "<br/>")
document.write('Remainder of' + ' ' + num2 + ' ' + 'divided by' + ' ' + num1 + ' ' + 'is' + ' ' + modNum + "<br/>")

// chapter#5/Q3

let variable;
document.write('Value after variable declaration is' + ' ' + variable + "<br/>")

let value=5
document.write('Initial value:' + ' ' + value + "<br/>")

let incValue=++value
document.write('Value after increment is:' + ' ' + incValue + "<br/>")

let add=incValue + 7
document.write('Value after addition is:' + ' ' + add + "<br/>")

let decValue=--add
document.write('Value after decrement is:' + ' ' + decValue + "<br/>")

let mod=decValue % 3
document.write('The remainder is:' + ' ' + mod + "<br/>")

// chapter#5/Q4

let ticket=5
let ticketCost=600
let totalCost=ticket * ticketCost
document.write('Total cost to buy' + ' ' + ticket + ' ' + 'tickets to a movie is' + ' ' + totalCost + ' ' + 'PKR' + ' ' + "<br/>")

// chapter#5/Q5

let number=4
document.write("<h3>Table of " + number + "</h3>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");

// chapter#5/Q6

document.write("<h3>Conversion</h3>");
let C=25
let Fahrenheit=(C*9/5) + 32
let F=70
let Celsius=(F-32) * 5/9
document.write(C + '<sup>o</sup>C' + ' ' + 'is' + ' ' + Fahrenheit + ' ' + '<sup>o</sup>F' + '<br/>')
document.write(F + '<sup>o</sup>F' + ' ' + 'is' + ' ' + Celsius + ' ' + '<sup>o</sup>C' + '<br/>')

// chapter#5/Q7

document.write("<h3>Question7</h3>");

let itemPrice1=650
let itemPrice2=100
let itemQuantity1=3
let itemQuantity2=7
let shipping=100
let total1=(itemPrice1*itemQuantity1) + (itemPrice2*itemQuantity2) + shipping
document.write('Total cost of your order is' + ' ' + total1)

// chapter#5/Q8

document.write("<h3>Question 8</h3>");

let totalMarks=980
let marksObtain=804
let per=marksObtain/totalMarks*100
document.write('Total marks:' + ' ' + totalMarks + '<br/>' + 'Marks Obtained:' + ' ' + marksObtain + '<br/>' + 'Percentage:' + ' ' + per + '<br/>')

// chapter#5/Q9

document.write("<h3>Question 9</h3>");

let usdAmount = 10;
let sarAmount = 25;
let exchangeRateUSD = 104.80;
let exchangeRateSAR = 28;

let totalPKR = (usdAmount * exchangeRateUSD) + (sarAmount * exchangeRateSAR);

document.write("Total amount in Pakistani Rupees:" + ' ' + totalPKR);

// chapter#5/Q10

document.write("<h3>Question 10</h3>");

let digit=5
let result=(((digit + 5)*10)/2)
document.write("Result:" + ' ' + result)

// chapter#5/Q11

document.write("<h3>Question 11</h3>");

let currentYear = 2024
let birthYear = 2012
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.");

// chapter#5/Q12

document.write("<h3>Question 12</h3>");

let radius=20
let circumference=2*3.142*radius
let area=3.142*(20*20)
document.write("The circumference is " + circumference + '<br/>');
document.write("The area is " + area);

// chapter#5/Q13

document.write("<h3>Question 13</h3>");

let favSnack="bounty"
let currentAge=42
let maxAge=63
let snackAmount=2
let totalNeed=(maxAge-currentAge)*snackAmount
document.write("You will need " + totalNeed + " bounty to last you until the ripe old age of " + maxAge + '<br/>');

// chapter#6/Q1

document.write("<h3>Question 1</h3>");

let a= 10
let a1= ++a
let a2= a++
let a3= a
let a4= --a
let a5= a--
let a6= a

document.write("Result:" + "<br/>")
document.write("The value of a is:" + " " + a + "<br/> ")
document.write("..................." + "<br/> ")
document.write("<br/>")
document.write("The value of ++a is:" + " " + a1 + "<br/> ")
document.write("The value of a is:" + " " + a1 + "<br/> ")
document.write("<br/>")
document.write("The value of a++ is:" + " " + a2 + "<br/> ")
document.write("The value of a is:" + " " + a3 + "<br/> ")
document.write("<br/>")
document.write("The value of --a is:" + " " + a4 + "<br/> ")
document.write("The value of a is:" + " " + a5 + "<br/> ")
document.write("<br/>")
document.write("The value of a-- is:" + " " + a5 + "<br/> ")
document.write("The value of a is:" + " " + a6 + "<br/> ")

// chapter#6/Q2

document.write("<h3>Question 2</h3>");

let ai = 2, b = 1;
let result1 = --ai - --b + ++b + b--;

document.write("--ai is 1" + "<br/>")
document.write("--ai - --b is 1 - 0 = 1" + "<br/>")
document.write("--ai - --b + ++b is 1 - 0 + 1 = 2" + "<br/>")
document.write("--ai - --b + ++b + b-- is 1 - 0 + 1 + 1 = 3" + "<br/>")

document.write("Result: " + result1 + "<br/>")

// chapter#6/Q3

document.write("<h3>Question 3</h3>");

let username=prompt("Enter your name")
alert("Welcome " + username + " to our website")
document.write("Welcome " + username + " to our website")

// chapter#6/Q5

document.write("<h3>Question 5</h3>");

let newNumber=prompt("Enter any number",5);
newNumber=parseInt(newNumber)

document.write("<h3>Table of " + newNumber + "</h3>");

document.write(newNumber + " x 1 = " + (newNumber * 1) + "<br>");
document.write(newNumber + " x 2 = " + (newNumber * 2) + "<br>");
document.write(newNumber + " x 3 = " + (newNumber * 3) + "<br>");
document.write(newNumber + " x 4 = " + (newNumber * 4) + "<br>");
document.write(newNumber + " x 5 = " + (newNumber * 5) + "<br>");
document.write(newNumber + " x 6 = " + (newNumber * 6) + "<br>");
document.write(newNumber + " x 7 = " + (newNumber * 7) + "<br>");
document.write(newNumber + " x 8 = " + (newNumber * 8) + "<br>");
document.write(newNumber + " x 9 = " + (newNumber * 9) + "<br>");
document.write(newNumber + " x 10 = " + (newNumber * 10) + "<br>");

// chapter#6/Q6

document.write("<h3>Question 6</h3>");

let subject1="English"
let subject2="Maths"
let subject3="Science"
let totalMark=100
let obtMark1=54
let obtMark2=54
let obtMark3=48
let totalMarx = totalMark * 3;
let percentageSubject1 = (obtMark1 / totalMark) * 100;
let percentageSubject2 = (obtMark2 / totalMark) * 100;
let percentageSubject3 = (obtMark3 / totalMark) * 100;

document.write("<table border='2'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMark + "</td><td>" + obtMark1 + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMark + "</td><td>" + obtMark2 + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMark + "</td><td>" + obtMark3 + "</td><td>" + percentageSubject3 + "%</td></tr>");
document.write("<tr><th>Total</th><td>" + totalMarx + "</td><td>" + (obtMark1 + obtMark2 + obtMark3) + "</td><td>" + (((obtMark1 + obtMark2 + obtMark3) / totalMarx) * 100) + "%</td></tr>");
document.write("</table>");

















