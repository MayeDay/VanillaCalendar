import Service from '@ember/service';

export default class HeaderService extends Service {

    date = new Date();
    months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    totalCalendarSpace = 42;

    getTotalDaysOfCurrentMonth(year, month){

        return new Date(year, month +1, 0).getDate();
    }

    getFullDate(year, month, day){
        return new Date(year, month, day).getDay();
    }

    getFormattedDate(month, year){
        return this.months[month] + " " + year;
    }

    getMDYFormat(month, day, year){
        let date = "";
        if (month === 0){
            date = `${month +1}/${day}/${year}`;
        }else{
            date = `${month+1}/${day}/${year}`;
        }
        return date;
    }

    updateCalendarDays(day, month, year){
        let dates = document.querySelectorAll(".available button p");

        dates.forEach(date => {
            date.parentElement.setAttribute("style", "background-color: rgba(234, 248, 255, 0.911);");
            
            if(date.innerHTML == day && month == new Date().getMonth()&&year == new Date().getFullYear()){
                date.parentElement.classList.add("currentDay");
            }else{
                date.parentElement.classList.remove("currentDay");
            }
        });
    }

    chooseDay(day, month, year){
        let dates = document.querySelectorAll(".available button p");
        
        dates.forEach(date =>{
            
            if(day == date.innerHTML){
                console.log(day, month, year, date.innerHTML)
                date.parentElement.setAttribute("style", "background-color: rgba(123, 167, 248, 0.822);");
                document.querySelector(".textfield input").value = this.getMDYFormat(month, day, year);
            
            }else if(date.value != this.date.getDate()){

                date.parentElement.setAttribute("style", "background-color: rgba(234, 248, 255, 0.911);");
            }
        });
    }
}