$(document).ready(function(){

    var setRangeSlider = function($element){

        var $input = $element.find('input[type="range"]');
        var haveOutput = ($element.find('.output').length == 1) ? true : false;
        
        $input.rangeslider({

            polyfill: false,
       
            rangeClass: 'rangeslider',
            disabledClass: 'rangeslider--disabled',
            horizontalClass: 'rangeslider--horizontal',
            verticalClass: 'rangeslider--vertical',
            fillClass: 'rangeslider__fill',
            handleClass: 'rangeslider__handle',

            onInit: function(){
                if (haveOutput) $element.find('.output').text(this.value);
            },

            onSlideEnd: function(position, value){
                if (haveOutput) $element.find('.output').text(value);
            }
        });
    }

    $element = $('[data-rangeslider]');    
    $element.each(function(){
        setRangeSlider($(this));
    });

    $element.on('click', 'button', function(e){
        var _element = $(e.delegateTarget);
 
        if(_element.find('.update-range').length == 1){
            var newValue = _element.find('.update-range').val();
            _element.find('input[type="range"]').val(newValue).change();
            _element.find('.output').text(newValue);
        }
   
    });
});