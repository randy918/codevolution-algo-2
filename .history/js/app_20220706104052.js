const c = console.log.bind(console);

const function () {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US").format(today);
  const consoleFunctioningMessage = `
Console functioning: ${getDayVerbal()}, ${getMonthVerbal()} ${getDay()} at ${getHour()}:${getMinute00()}${getAmPm()}
  `;
  return consoleFunctioningMessage;
}
showDateTimeFormat();

console.log(`%c${showDateTimeFormat()}`, "font-size: 20px; color: gray");c("hello");
