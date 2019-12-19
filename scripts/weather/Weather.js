export const WeatherComponent = (report) => {
  return `
  <section class="weatherCard">
  <div>${new Date(report.dt_txt.split(" ")[0]).toLocaleDateString('en-US')}</div>
  <div><span style="font-weight: bold;">Temp:</span> ${report.main.temp}°F</div>
  <div><span style="font-weight: bold;">Feels Like:</span> ${report.main.feels_like}°F</div>
  <div class="weatherDescription">${report.weather[0].description}</div>
  </section>
  `
}