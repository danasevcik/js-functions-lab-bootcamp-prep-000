// write your code below!
function happyHolidays() {
  return("Happy holidays!");
}

function happyHolidaysTo(name) {
  name = 'you';
  return 'Happy holidays, ${name}!'
}
happyHolidaysTo('you')

function happyHolidayTo(holiday, name) {
  return 'Happy ${holiday}, ${name}!'
}

function holidayCountdown(holiday, days) {
  return "It's ${days} days until ${holiday}!"
}

happyHolidaysTo('you')
happyHolidayTo('Independence Day', 'you');
holidayCountdown("Mother's Day", 20);
