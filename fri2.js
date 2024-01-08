let currDay = "Friday";
let message = "";

const alarm = {
    weekendAlarm:"No alarm needed.",
    weekdayAlarm:"Get up at 7am."
};

if(currDay == "Saturday" || currDay == "Sunday"){
    message = alarm.weekendAlarm;
}
else{
    message = alarm.weekdayAlarm;
};
console.log(message);