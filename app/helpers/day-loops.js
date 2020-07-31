import { helper } from '@ember/component/helper';

export default helper(function dayLoops(params/*, hash*/) {
  var range = [];
  for(var i=params[0]; i < params[1]; ++i){
    range.push(i);
  }
  return range;
});
