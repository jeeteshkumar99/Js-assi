
// Chapter 26 to 34


// Write a program that takes a positive integer from user &
// display the following in your browser.


// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = 45.4
// var num1 = 44.6
// document.write("Number "+Math.floor(num)+"<br>")
// document.write("round off value  "+Math.round(num)+"<br>")
// document.write("floor value "+Math.floor(num)+"<br>")
// document.write("floor ceil "+Math.ceil(num1)+"<br>")


// 2. Write a program that takes a negative integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var A = +prompt("Enter negative  number  ")

// Write a program that simulates a dice using random() method
// of JS Math class. Display the value of dice in your browser.

// var randomNum = Math.floor(Math.random()*4)
// document.write(randomNum)

// document.write("number :"+A +"<br>")
// document.write("round off value of the number: "+ Math.round(A))
// document.write("floor value of the number: "+Math.floor(A))
// document.write("ceil value of the number:"+Math.ceil(A))


// // 5. Write a program that displays the absolute value of a number.
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var x= -4
// document.write("abslute value of "+x+ " is "+ Math.abs(x))



// // 7. Write a program that simulates a coin toss using random()
// // method of JS Math class. Display the value of coin in your
// // browser.

// var toss = +prompt("Enter number 1 or 2")
// var randomNum = Math.random()*2
// var roundOff = Math.ceil(randomNum)

// if(toss == roundOff){
//     document.write("head wins")
// }else{
//     document.write("Tails wins")
// }



// //Write a program that shows a random number between 1 and
// //100 in your browser.

// var B = Math.random()*100

// document.write("random number between 1 and 100 :"+Math.round(B))


// // Write a program that asks the user about his weight. Parse the
// // user input and display his weight in your browser. Possible user
// // inputs can be:
// // a. 50
// // b. 50kgs
// // c. 50.2kgs
// // d. 50.2kilograms

// var weight = +prompt("Enter your weight")

// document.write(weight)


// // Write a program that stores a random secret number from 1
// // to 10 in a variable. Ask the user to input a number between 1
// // and 10. If the user input equals the secret number, congratulate
// // the user.

// var userInp = +prompt("Enter number")
// var secret = 4
// var userInp = Math.floor(Math.random()*10 )
// // document.write(userInp)
// if(userInp == secret){
//     document.write("Congratulation ")
// }else{
//     document.write("Wrong number")
// }


// // Write a program that displays current date and time in your
// // browser.

// var date = new Date()

// document.write(date)

// // Write a program that alerts the current month in words. For
// // example December.

// var months = new Date().getMonth()
// // document.write(month)

// if(months == 0){
//     document.write("January")
// }else if(months == 1){
//     document.write("Feburary")
// }else if(months == 2){
//     document.write("March")
// }else if(months == 3){
//     document.write("April")
// }else if(months == 4){
//     document.write("May")
// }else if(months == 5){
//     document.write("June")
// }else if(months == 6){
//     document.write("July")
// }else if(months == 7){
//     document.write("Augsut")
// }else if(months == 8){
//     document.write("September")
// }else if(months == 9){
//     document.write("October")
// }else if(months == 10){
//     document.write("November")
// }else if(months == 11){
//     document.write("December")
// }


// //Write a program that alerts the first 3 letters of the current
// //day, for example if today is Sunday then alert will show Sun.

// var day = new Date().getDay()
// // document.write(day)

// if(day == 0){
//     document.write("Today is sun")
// }else if(day == 1){
//     document.write("Today is Mon")
// }if(day == 2){
//     document.write("Today is Tues")
// }if(day == 3){
//     document.write("Today is Wed")
// }if(day == 4){
//     document.write("Today is Thu")
// }if(day == 5){
//     document.write("Today is Fri")
// }if(day == 6){
//     document.write("Today is Sat")
// }

// // Write a program that shows the message “First fifteen days of the
// // month” if the date is less than 16th of the month else shows “Last
// // days of the month”.

// var month = new Date().getMonth()

// // var m = Math.floor(Math.random()*15)
// // var c = Math.floor(Math.random()*15 +10)
// // month = getDate()
// if(month <= 15 ){
//     document.write(" first fifteen")

// }else{
//     document.write("Last fifteen")
// }

// Write a program that determines the minutes since midnight, Jan.
// 1, 1970 and assigns it to a variable that hasn't been declared
// beforehand. Use any variable you like to represent the Date object.

// var now = new Date()
// var start = new Date(1971,0,1) 
//  var s71 = (now - start)/ (1000*60) 
// document.write(s71)

// // Write a program that determines the minutes since midnight, Jan.
// // 1, 1970 and assigns it to a variable that hasn't been declared
// // beforehand. Use any variable you like to represent the Date object.

// var now = new Date()
// var start = new Date()
// start.setHours(0,0,0,0) 
//  var midnight = (now - start)/ (1000*60) 

// document.write(midnight)

// var now = new Date()
// var start = new Date(1970,0,1)
// // start.setHours(0,0,0,0) 
//  var s71 = (now - start)/ (1000*60) 

// document.write(s71)


// Write a program to ask the user about his age. Calculate and
// show his birth year in your browser.
//  var age = +prompt()


// var start = new Date('2003 5, march')
// var now = new Date()

// var res = now -  start.getTime()
// document.write(res)





//String


// // Write a program that takes two user inputs for first and last
// // name using prompt and merge them in a new variable titled
// // fullName. Greet the user using his full name.

// var firstName = prompt("Enter First Name")
// var lasttName = prompt("Enter Last Name")

// var fullName = firstName + lasttName
// document.write(fullName + " <br> very Good !")


// // Write a program to take a user input about his favorite mobile
// // phone model. Find and display the length of user input in your
// // browser.

// var mobile = prompt("Enter mobile model")
// document.write(mobile+ " <br>")
// document.write("length of "+ mobile +" is"+mobile.length)




// // Write a program to find the index of letter “n” in the word
// // “Pakistani” and display the result in your browser.

// var country = "Pakistani"
// document.write(country+" <br> index of 'n' in pakistani is  ")
// document.write(country.indexOf("n"))


// // 4. Write a program to find the last index of letter “l” in the word
// // “Hello World” and display the result in your browser.

// var lastIndex = "Hello world"
// document.write(lastIndex+"<br>")
// document.write(lastIndex.lastIndexOf("d"))


// // Write a program to find the character at 3rd index in the word
// // “Pakistani” and display the result in your browser.

// var character = "Pakistani"
// document.write(character+"<br>")
// document.write("Character at index 3 is : " +character.charAt(3))



// // Write a program to replace the “Hyder” to “Islam” in the word
// // “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"
// document.write(city + "<br>")
// var afterRep = city.replace("Hyderabad","Islamabd")
// document.write("After replacement is "+ afterRep)


// // 8. Write a program to replace all occurrences of “and” in the
// // string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message+"<br>")
// var change = message.replaceAll("and","&")
// document.write(change)



















