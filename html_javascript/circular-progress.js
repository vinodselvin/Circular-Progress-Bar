/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * @Author: Vinod Selvin
 * @Desc: Shows progress bar.
 * @
 */
function __showProgress(_upto) {

    //Filter Percentage
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);

    var _progress = 0;

    var _cir_progress = document.getElementById("_cir_P_y");
    var _text_percentage = document.getElementById("_cir_Per");

    var _input_percentage;
    var _percentage;

    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {

        _input_percentage = (_upto / 100) * 382;
        _percentage = (_progress / 100) * 382;

        _text_percentage.innerHTML = _progress + '%';

        if (_percentage >= _input_percentage) {

            clearInterval(_sleep);
        } else {

            _progress++;

            _cir_progress.style.strokeDasharray = _percentage + ', 1000';
        }
    }
}

