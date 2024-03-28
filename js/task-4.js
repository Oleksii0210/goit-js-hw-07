const userLogin = document.querySelector(".login-form");
userLogin.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    console.log(elements);

    const email = elements.email.value.trim();
    const password = elements.password.value.trim();
    
    if (email === "" || password === "") {
      alert
      return ("All form fields must be filled in");
      
    }
    const formInfo = {
        Email: email,
        Password: password,
    };
  
    console.log(formInfo);
    event.currentTarget.reset();
  }