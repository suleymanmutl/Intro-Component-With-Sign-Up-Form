
// Get Check Button
const checkBtn = document.querySelector(".btn");

// Get Inputs
const inputFields = document.querySelectorAll(".input input");
// Get Error Message Divs
const errorDivs = document.querySelectorAll(".errormsg-div");
// Get Error Images
const errorImages = document.querySelectorAll(".error-img");
// Get Error Messages
const errorMessage = document.querySelectorAll(".error-msg");

const checkForm = () => {
  let isValid = true;

  inputFields.forEach((input, index) => {
    if (input.value === "") {
      inputFields[index].classList.add("active");
      errorImages[index].classList.add("active");
      errorMessage[index].classList.add("active");
      isValid = false;
    } else {
      inputFields[index].classList.remove("active");
      errorImages[index].classList.remove("active");
      errorMessage[index].classList.remove("active");
    }
  });
  console.log(inputFields);
};

document.querySelector(".btn").addEventListener("click", checkForm);
