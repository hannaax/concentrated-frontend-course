const checkValidation = () => {
  let email = document.querySelector("#email").value;
  let pw1 = document.querySelector("#pw1").value;
  let pw2 = document.querySelector("#pw2").value;

  if (email && pw1 && pw2) {
    document.querySelector("#submit").disabled = false;
  } else {
    document.querySelector("#submit").disabled = true;
  }
};
