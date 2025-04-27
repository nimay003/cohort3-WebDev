import chalk from "chalk";

function time(){
    setInterval(() => {
        const now = new Date();

        let hour = now.getHours();
        let min = now.getMinutes();
        let sec = now.getSeconds();
        let AmPm = (hour >= 12) ? "PM" : "AM";

        hour = hour % 12 || 12;
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(hour < 10){
            hour = "0" + hour;
        }

        console.clear();
        console.log(chalk.cyan(hour + ":" + min + ":" + sec + " " + AmPm));
    }, 1000);
}; 

time();