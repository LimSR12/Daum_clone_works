$(function(){
    $('#option').click(function(){
        $('.up-icon').toggle();
        $('.down-icon').toggle();
    });
    $('#search-input').click(function(){
        $('#search-input').css({
            'border-color':'#333',
            'border-width' : '1px'
        });
    });
});