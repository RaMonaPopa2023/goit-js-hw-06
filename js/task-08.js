const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { elements } = e.currentTarget;
  const email = elements.email.value;
  const password = elements.password.value;

  const formData = new FormData(form);
  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  if (!email || !password) {
    alert("Toate campurile sunt obligatorii.");
  } else {
    console.log("Form Data:", formDataObject);
    form.reset();
  }
});
