import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeaderService extends Service {

    date = new Date();
    months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    totalCalendarSpace = 42;
    @tracked previousDayList = [];
    @tracked nextDayList = [];
    @tracked dayList = [];

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
            date = `${month+1}/${day}/${year}`;
        }else{
            date = `${month+1}/${day}/${year}`;
        }
        return date;
    }

    updateCalendarDays(day, month, year){
        let dates = document.querySelectorAll(".available button p");
        dates.forEach(date => {
            date.parentElement.setAttribute("style", "background-color: rgba(234, 248, 255, 0.911);");

            if(date.innerHTML == day && month == new Date().getMonth()&& year == new Date().getFullYear()){
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
                date.parentElement.setAttribute("style", "background-color: rgba(123, 167, 248, 0.822);");
                document.querySelector(".textfield input").value = this.getMDYFormat(month, day, year);

            }else if(date.value != this.date.getDate()){
                date.parentElement.setAttribute("style", "background-color: rgba(234, 248, 255, 0.911);");
            }
        });
    }

    currentDays(days){
        this.dayList = [];
        for(var i = 1; i< days+1; i++){
            this.dayList.push(i);
        }     
    }

    previousDays(day, month, year){
        this.previousDayList = [];
        let lastMonth = new Date(year, month, day);
        let daysBeforeMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth()+1).getDay();
        for(let x = daysBeforeMonth-1; x >= 0; x--){
               this.previousDayList.push(lastMonth.getDate() - x);
        }
    }

    nextDays(){
        this.nextDayList = [];
        let remainingSpaces = this.totalCalendarSpace - (this.dayList.length + this.previousDayList.length);
        for(let x = 1; x < remainingSpaces+1; x++){
            this.nextDayList.push(x);
        }
    }
}