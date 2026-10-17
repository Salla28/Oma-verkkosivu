const haeNappi = document.getElementById("haeNappi");
const tulosTeksti = document.getElementById("tulosTeksti");
haeNappi.addEventListener("click", () => {
tulosTeksti.innerText = "Haetaan neuvoa rajapinnasta...";
fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
.then(response => response.json())
.then(data => {
console.log("Rajapinnan vastaus:", data);
tulosTeksti.innerText = data.slip.advice;
})
.catch(error => {
console.error("Virhe haussa:", error);
tulosTeksti.innerText = "Tiedon hakeminen epäonnistui!";
});
});
