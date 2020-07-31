import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CalendarNavigationComponent extends Component {

    months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

    date = new Date();
    @tracked
    lastdate = new Date();
    
    @tracked 
    nextDate = new Date();

    headerDate = this.header();
    @tracked
    rendering = this.render();

    @tracked 
    days =[];

    @tracked
    prevDays =[];

    @tracked
    nextDays =[];

    @tracked
    selectedMonth = this.date.getMonth();

    @tracked
    selectedDay = this.date.getDate();

    @tracked 
    selectedYear = this.date.getFullYear();

    @tracked
    format ="";

    @tracked 
    formattedDate = `${this.months[this.selectedMonth]} ${this.selectedYear}`;

    @tracked 
    numberOfDays = this.date.getDate();

    @tracked
    firstDayIndex = 1;

    @tracked 
    nextDayIndex = 1;

    
    
    header(){

        let prev = new Date(this.date.getFullYear(), this.date.getMonth(),1);

        this.firstDayIndex = prev.getDay();
        this.numberOfDays = new Date(this.selectedYear, this.selectedMonth +1, 0).getDate();

        for(let x = prev.getDay()-1; x >= 0; x--){
            this.prevDays.push(this.numberOfDays - x);
        }

        console.log(this.numberOfDays)
    
        for(var i = 1; i< this.numberOfDays + 1; i++){
            this.days.push(i);
        }

       

        let next = new Date(this.date.getFullYear(), this.date.getMonth()+1,1);

        this.nextDayIndex = next.getDay();
        // console.log(next.getDay());
        let max = 42;
        let count = 0;
        for(let x = this.numberOfDays+this.prevDays.length; x < max; x++){
            count+=1
            if(this.numberOfDays + this.prevDays.length < max){
                this.nextDays.push(count);
            }
        }  

       

        if (this.selectedMonth === 0){
            this.format = `${this.selectedMonth}/${this.selectedDay}/${this.selectedYear}`;
        }else{
            this.format = `${this.selectedMonth + 1}/${this.selectedDay}/${this.selectedYear}`;
        }

        return this.format;
    }

    actions = {
        selectDate(day){

            let dates = document.querySelectorAll(".available button");
    
            for(var i = 0; i < dates.length;i++){
                if(day == dates[i].innerHTML){
                    dates[i].setAttribute("style","background-color:blue;")
                    
                    this.format = `${this.selectedMonth+1}/${day}/${this.selectedYear}`
                    document.querySelector(".textfield input").value = this.format;
                }else if(this.date.value !=this.date.getDate()){
                    console.log(this.date.value);
                    dates[i].setAttribute("style","background-color:white;")
                }
            }
        }
    }
    moveRight(){

        if(this.selectedMonth >= 11){
            this.selectedMonth = -1;
            this.selectedYear += 1;
        }
        this.selectedMonth +=1;
        this.formattedDate = this.months[this.selectedMonth] + " " + this.selectedYear;
        this.numberOfDays = new Date(this.selectedYear, this.selectedMonth +1, 0).getDate();

       this.days = [];
        console.log(new Date(this.selectedYear, this.selectedMonth +1, 0));

        for(var i = 1; i< this.numberOfDays + 1; i++){
            this.days.push(i);
        }

        this.lastdate = new Date(this.selectedYear, this.selectedMonth +1, 0)

        this.prevDays = [];
        let prev = new Date(this.lastdate.getFullYear(), this.lastdate.getMonth());

        this.firstDayIndex = prev.getDay();

        for(let x = prev.getDay(); x > 0; x--){
            this.prevDays.push(this.numberOfDays - x);
        }

        this.nextDate = new Date(this.selectedYear, this.selectedMonth +1, 0)

        this.nextDays = [];
        let next = new Date(this.nextDate.getFullYear(), this.nextDate.getMonth());

        this.nextDayIndex = next.getDay();
        let max = 42;
        let count = 0;
        for(let x = this.numberOfDays+this.prevDays.length; x < max; x++){
            count+=1
            if(this.numberOfDays + this.prevDays.length < max){
                this.nextDays.push(count);
            }
        }

        let dates = document.querySelectorAll(".available button");

        dates.forEach(date => {
            if(date.innerHTML !=this.date.getDate())
            date.setAttribute("style", "background-color:white");
        });
    }

       moveLeft(){

        if(this.selectedMonth <= 0){
            this.selectedMonth = 12;
            this.selectedYear -= 1;
        }

        this.selectedMonth -=1;

        this.formattedDate = this.months[this.selectedMonth] + " " + this.selectedYear;
        this.numberOfDays = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();

        this.days = [];

        for(var i = 1; i< this.numberOfDays +1; i++){
            this.days.push(i);
        }

        this.lastdate = new Date(this.selectedYear, this.selectedMonth +1, 0)

        this.prevDays = [];
        let prev = new Date(this.lastdate.getFullYear(), this.lastdate.getMonth());

        this.firstDayIndex = prev.getDay();

        for(let x = prev.getDay(); x > 0; x--){
            this.prevDays.push(this.numberOfDays - x);
        }
       
        this.nextDate = new Date(this.selectedYear, this.selectedMonth +1, 0)

        this.nextDays = [];
        let next = new Date(this.nextDate.getFullYear(), this.nextDate.getMonth());

        this.nextDayIndex = next.getDay();

        let max = 42;
        let count = 0;
        for(let x = this.numberOfDays+this.prevDays.length; x < max; x++){
            count+=1
            if(this.numberOfDays + this.prevDays.length < max){
                this.nextDays.push(count);
            }
        }
        let dates = document.querySelectorAll(".available button");

        dates.forEach(date => {
            date.setAttribute("style", "background-color:white");
        });
        
      
    }
    render(){
        let dates = document.querySelectorAll(".available button");
        console.log(dates);
        dates.forEach(date => {
            if(date.innerHTML == this.date.getDate()){
                console.log(this.date.getDay());
                date.setAttribute("style", "background-color: red");
            }
        });
    }

    
}

    

