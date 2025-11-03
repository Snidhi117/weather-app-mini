const API_KEY = "https://wttr.in"; // we'll use wttr.in (no API key needed)

const btn = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    output.textContent = "❗Please enter a city name.";
    return;
  }

  output.textContent = "Fetching weather...";
  try {
    const res = await fetch(`${API_KEY}/${city}?format=3`);
    const text = await res.text();
    output.textContent = `📍 ${text}`;
  } catch (err) {
    output.textContent = "⚠️ Unable to fetch data.";
  }
});
