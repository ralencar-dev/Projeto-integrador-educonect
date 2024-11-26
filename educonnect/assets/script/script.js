
const goToCadastroBtn = document.querySelector("#go-to-cadastro");
const backToLoginBtn = document.querySelector("#back-to-login");
const loginForm = document.querySelector("#login-form");
const cadastroForm = document.querySelector("#cadastro-form");

cadastroForm.classList.add("hidden")

goToCadastroBtn.addEventListener("click", () => {
    cadastroForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
});

backToLoginBtn.addEventListener("click", () => {
  cadastroForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});
