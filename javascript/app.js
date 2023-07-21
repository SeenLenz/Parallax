let heading = document.getElementById("heading");
let navbar = document.querySelector(".navbar").remove;

document.querySelector("#colorpick").addEventListener("input", (e) => {
  console.log(e.target.value);
  heading.style.color = e.target.value;
});

let temp = document.createElement("div");
temp.setAttribute("id", "asd");
navbar.appendChild(temp);

let response = await fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2mhttps://api.meteomatics.com/2023-07-21T00:00:00Z/t_2m:C/52.520551,13.461804/html"
);

console.log(await response.json());
