// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});

let weekDay = moment()
$("#currentDay").text(weekDay.format("dddd, MMMM Do YYYY HH:mm:ss A"))

const timeDiv = document.querySelector("#currentDay")
setInterval(() => {
  timeDiv.innerHTML = new Date()
},1000)



// Set the date at the top of the page
// let currentTime = setInterval(() => {
//   let today = dayjs();
//   $('#dateheader').text((today.format('MMM DD, YYYY')) + " at " + today.format)

// }, 1000)

// // Set the status of each time-block
// $(".time-block").each(function() {
//   var currentTime = moment().hours();
//   var timeBlock = parseInt($(this).attr("id").split("-")[1]);
//   if (timeBlock < currentTime) {
//     $(this).addClass("past");
//   } else if (timeBlock === currentTime) {
//     $(this).addClass("present");
//   } else {
//     $(this).addClass("future");
//   }
// });

// // Load any saved data from localStorage
// $(".description").each(function() {
//   var timeBlock = $(this).parent().attr("id");
//   var savedData = localStorage.getItem(timeBlock);
//   if (savedData) {
//     $(this).val(savedData);
//   }
// });

// // Save the data to localStorage on click
// $(".saveBtn").on("click", function() {
//   var timeBlock = $(this).parent().attr("id");
//   var description = $(this).siblings(".description").val();
//   localStorage.setItem(timeBlock, description);
// });

// function checkCurrentHour() {
//   let currentHour = dayjs().hour();
//   //Split hour from each time-block id as an integer to compare to current hour
//   $(".time-block").each(function () {
//     let blockHour = parseInt($(this.).attr("id").split("-")[1]);}}
  

//   let currentHour= dayjs().hour();
//   $("#hour-9","#hour-10","#hour-11","#hour-11","#hour-12","#hour-1","#hour-2","#hour-3","#hour-4","#hour-5").each(function() {
//     let hour = parseInt($(this).attr("id").split("-")[1]);
//     if (hour < currentHour)$("p").css("background-color", "green");
//     if (hour > currentHour)$("p").css("background-color", "grey");
//     if (hour == currentHour)$("p").css("background-color", "red");
//   })
// $(".saveBtn").on("click", function() {
//   var value = $(this).siblings('.description').val();
//     var time = $(this).parent().attr('id');
//     localStorage.setItem(time, value); })