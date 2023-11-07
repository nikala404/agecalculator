"use strict";
const day = document.getElementById("day");
const inputs = document.getElementsByClassName("input");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dayTime = document.querySelector(".fonts_day");
const monthTime = document.querySelector(".fonts_month");
const yearTime = document.querySelector(".fonts_year");
const button = document.querySelector(".button_pic");
const timeDiv = document.querySelector(".text_div");
const year_error = document.querySelector(".year_error");
const month_error = document.querySelector(".month_error");
const day_error = document.querySelector(".day_error");
const currentDate = new Date();

day.addEventListener("change", () => {
  if (day.value < 1 || day.value > 31 || day.value.includes(".")) {
    day.style.border = "1px solid red";
    day_error.style.display = "block";
  }
  if (day.value != "0" + day.value) {
    day.value = "0" + day.value;
  }
  if (day.value.length > 2) {
    day.value = day.value.slice(1);
  }

  if (day.value.length > 2) {
    day.value = "";
  }
});

//month validation

month.addEventListener("change", () => {
  month.value = "0" + month.value;
  if (month.value > 9) {
    month.value = month.value.slice(1);
  }

  if (month.value < 1 || month.value.includes(".") || month.value > 12) {
    month.style.border = "1px solid red";
    month_error.style.display = "block";
    month.value = "";
  }

  if (month.value.length > 2) {
    month.value = month.value.slice(1);
  }

  if (month.value.length > 2) {
    month.value = "";
  }
});

// year validation

year.addEventListener("change", () => {
  if (
    year.value < 1923 ||
    year.value.includes(".") ||
    year.value > currentDate.getFullYear()
  ) {
    year.style.border = "1px solid red";
    year_error.style.display = "block";
    year.value = "";
  }
});

button.addEventListener("click", () => {
  dayTime.innerHTML = currentDate.getDate() - day.value;
  monthTime.innerHTML = currentDate.getMonth() - month.value + 1;
  yearTime.innerHTML = currentDate.getFullYear() - year.value - 1;

  if (month.value <= currentDate.getMonth()) {
    yearTime.innerHTML = currentDate.getFullYear() - year.value;
  }
  if (
    day.value == currentDate.getDate() &&
    month.value == currentDate.getMonth() + 1
  ) {
    yearTime.innerHTML = currentDate.getFullYear() - year.value;
  }
  if (dayTime.innerHTML.includes("-")) {
    dayTime.innerHTML = currentDate.getDate() - day.value + 31;
    monthTime.innerHTML = currentDate.getMonth() - month.value;
  }
  if (day_error.style.display == "block") {
    dayTime.innerHTML = "--";
  }
  if (monthTime.innerHTML.includes("-")) {
    monthTime.innerHTML = currentDate.getMonth() - month.value + 12;
  }
  if (month_error.style.display == "block") {
    monthTime.innerHTML = "--";
  }
  if (year.value == currentDate.getFullYear()) {
    yearTime.innerHTML = "0";
  }
  if (
    day.value > currentDate.getDate() &&
    month.value >= currentDate.getMonth() + 1 &&
    year.value == currentDate.getFullYear()
  ) {
    alert("Not Born Yet");
    yearTime.innerHTML = "";
    dayTime.innerHTML = "";
    monthTime.innerHTML = "";
  }

  if (year_error.style.display == "block") {
    yearTime.innerHTML = "--";
  }

  if (day.value == "" || month.value == "" || year.value == "") {
    if (true) {
      alert("Please fill all the fields");
    }

    if (day.value == "") {
      dayTime.innerHTML = "--";
    }
    if (month.value == "") {
      monthTime.innerHTML = "--";
    }
    if (year.value == "") {
      yearTime.innerHTML = "--";
    }
  }
});

day.addEventListener("input", () => {
  day.style.border = "";
  day_error.style.display = "none";
  dayTime.innerHTML = "";
});
month.addEventListener("input", () => {
  month.style.border = "";
  month_error.style.display = "none";
  monthTime.innerHTML = "";
});
year.addEventListener("input", () => {
  year.style.border = "";
  year_error.style.display = "none";
  yearTime.innerHTML = "";
});
