/*
 * @Author: Vinod Selvin
 * @Desc: Shows progress bar.
 * @Params: _upto -> upto that percentage.
 */


var gauge = {
  level : 0,
  displayId : "_cir_progress_1",
  updatePercent : function(percent){
    __showProgress(this.level, percent, this.displayId);
    this.level = percent;
  }
};

window.onload = init;

function __showProgress(_from, _upto, _cir_progress_id) {
    var direction = "";
    if(_from < _upto){
      direction = "up";
    } else {
      direction = "down";
    }
    console.log("Going from " + _from + " " + direction + " to " + _upto + "%...");
    //Filter Percentage
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    //Filter Percentage
    _from = (_from > 100) ? 100 : ((_from < 0) ? 0 : _from);

    var _progress = _from;

    var _cir_progress = document.getElementById(_cir_progress_id).getElementsByClassName("_cir_P_y")[0];
    var _text_percentage = document.getElementById(_cir_progress_id).getElementsByClassName("_cir_Per")[0];

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {

        _input_percentage = (_upto / 100) * 382;
        _percentage = (_progress / 100) * 382;

        _text_percentage.innerHTML = _progress + '%';

        if (_stoppingCondition(_percentage,_input_percentage)) {

            clearInterval(_sleep);
        } else {
            if(direction === "up"){
              _progress++;
            } else {
              _progress--;
            }

            _cir_progress.style.strokeDasharray = _percentage + ', 1000';
        }
    }

    function _stoppingCondition(current, destination){
       var goingUp = direction === "up";
       if (goingUp && current >= destination){
          return true;
       } else if (!goingUp && current <= destination){
          return true;
       } else {
          return false;
       }
    }

}

function _initializeCircle(elem){
  console.log("setting level to given percentage...");
      var _cir_progress = elem.getElementsByClassName("_cir_P_y")[0];
      var _text_percentage = elem.getElementsByClassName("_cir_Per")[0].innerHTML.slice(0,-1);
      var _percentage = (parseInt(_text_percentage) / 100 ) * 382;
      _cir_progress.style.strokeDasharray = _percentage + ', 1000';
}

function init(){
  var progressMeters = document.getElementsByTagName("svg");
  for(var i = 0; i < progressMeters.length; i++){
    _initializeCircle(progressMeters[i]);

  }
}

