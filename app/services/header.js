import Service from '@ember/service';

export default class HeaderService extends Service {

    date = new Date();

    getDays(year, month){

        return new Date(year, month +1, 0).getDate();
    }

    getFullDate(year, month, day){

        return new Date(year, month, day);

    }
}