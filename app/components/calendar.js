import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class CalendarComponent extends Component {
    

    @service 
    ("day-allocation") services;
    
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
    formattedDate = `${this.services.months[this.selectedMonth]} ${this.selectedYear}`;

    @tracked 
    numberOfDays = this.date.getDate();

    @tracked
    firstDayIndex = 1;

    @tracked 
    nextDayIndex = 1;

    @tracked 
    currentDay;

    
    header(){

        let prev = this.services.getFullDate(this.date.getFullYear(), this.date.getMonth(), 1);
        
        this.numberOfDays = this.services.getTotalDaysOfCurrentMonth(this.selectedYear, this.selectedMonth);

        for(let x = prev - 1; x >= 0; x--){
            this.prevDays.push(this.numberOfDays - x);
        }
    
        for(var i = 1; i< this.numberOfDays + 1; i++){
            this.days.push(i);
        }

        let count = 0;
        for(let x = this.numberOfDays+this.prevDays.length; x < this.services.totalCalendarSpace; x++){
            count+=1
            if(this.numberOfDays + this.prevDays.length < this.services.totalCalendarSpace){
                this.nextDays.push(count);
            }
        }  
        this.format = this.services.getMDYFormat(this.selectedMonth, this.selectedDay, this.selectedYear);
        return this.format;
    }

    actions = {
        selectDate(day){
            this.services.chooseDay(day, this.selectedMonth, this.selectedYear);
        }
    }
    moveRight(){

        if(this.selectedMonth >= 11){
            this.selectedMonth = -1;
            this.selectedYear += 1;
        }
        this.selectedMonth +=1;
        this.formattedDate = this.services.getFormattedDate(this.selectedMonth, this.selectedYear);
        this.numberOfDays = new Date(this.selectedYear, this.selectedMonth +1, 0).getDate();

        this.days = [];

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

        this.services.updateCalendarDays(this.date.getDate(), this.selectedMonth, this.selectedYear);

    }
    

       moveLeft(){

        if(this.selectedMonth <= 0){
            this.selectedMonth = 12;
            this.selectedYear -= 1;
        }

        this.selectedMonth -=1;

        this.formattedDate = this.services.getFormattedDate(this.selectedMonth, this.selectedYear);
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
        this.services.updateCalendarDays(this.date.getDate(), this.selectedMonth, this.selectedYear);


    }
    render(){
        this.services.updateCalendarDays(this.date.getDate(), this.selectedMonth, this.selectedYear);

    }
}
