const welcomeEl = document.getElementById("welcome-el");

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(domEl, userName, greeting = "Welcome back", emoji) {
	domEl.textContent = `${greeting}, ${userName} ${emoji}`;
}
const myName = "Per Harald Borgen";
greetUser(welcomeEl, myName, undefined, "👋");
