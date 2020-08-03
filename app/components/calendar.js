import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import {inject as service} from '@ember/service';

export default class CalendarComponent extends Component {

    @service ("day-allocation") services;
    @tracked rendering = this.render();
    @tracked selectedMonth = this.date.getMonth();
    @tracked selectedDay = this.date.getDate();
    @tracked selectedYear = this.date.getFullYear();
    @tracked format = "";
    @tracked formattedDate;
    @tracked numberOfDays = this.date.getDate();
    date = new Date();
    selectedDate = this.onLoad();
    
    render(){
        this.services.updateCalendarDays(this.date.getDate(), this.selectedMonth, this.selectedYear);
    }

    onLoad(){
        this.pageLoader();
        this.format = this.services.getMDYFormat(this.selectedMonth, this.selectedDay, this.selectedYear);
        return this.format;
    }

    selectDate(day){
        this.services.chooseDay(day, this.selectedMonth, this.selectedYear);
    }

    moveRight(){
        if(this.selectedMonth >= 11){
            this.selectedMonth = -1;
            this.selectedYear += 1;
        }
        this.selectedMonth +=1;
        this.pageLoader();
    }

    moveLeft(){
        if(this.selectedMonth <= 0){
            this.selectedMonth = 12;
            this.selectedYear -= 1;
        }
        this.selectedMonth -=1;
        this.pageLoader();
    }

    pageLoader(){
        this.formattedDate = this.services.getFormattedDate(this.selectedMonth, this.selectedYear);
        this.numberOfDays = this.services.getTotalDaysOfCurrentMonth(this.selectedYear, this.selectedMonth, 0);
        this.services.previousDays(0, this.selectedMonth, this.selectedYear);
        this.services.currentDays(this.numberOfDays);
        this.services.nextDays();
        this.services.updateCalendarDays(this.date.getDate(), this.selectedMonth, this.selectedYear);
    }
}