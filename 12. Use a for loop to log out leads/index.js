let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
	myLeads.push(inputEl.value);
	console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop
// myLeads.forEach((i) => {
// 	console.log(i);
// });
for (let index = 0; index < myLeads.length; index++) {
	console.log(myLeads[index]);
}
