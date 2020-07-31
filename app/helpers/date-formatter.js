import { helper } from '@ember/component/helper';

export default helper(function dateFormatter(params, hash) {
  let date = hash.date;

  if (!date) {
    date = new Date();
  } else {
    date = date;
  }

  let year = date.getFullYear(),
      month = ('0' + (date.getMonth()+1)).slice(-2),
      day = ('0' + (date.getDate())).slice(-2),
      formatted = `${month} ${year}`;

  return formatted;
  return date;
});
