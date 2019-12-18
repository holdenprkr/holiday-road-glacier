export const WeatherComponent = (report) => {
  return `
  <section>
  <div>Temperature: ${report.main.temp}°F</div>
  <div>Feels Like: ${report.main.feels_like}°F</div>
  <div>Description: ${report.weather[0].description}</div>
  </section>
  `
}