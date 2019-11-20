const toTime = (secs) => {
  var sec_num = parseInt(secs, 10);
  var days = Math.floor(sec_num / 86400);
  var hours = Math.floor(sec_num / 3600 % 24);
  var minutes = Math.floor(sec_num / 60) % 60;
  var seconds = sec_num % 60;

  return ({
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  });
}

export default toTime;