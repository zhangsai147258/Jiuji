$(function () {
    function fun() {
        $('.cur dt').click(function(){
            $('.cur dd').slideToggle();
        })
    }
    fun();


    $('.guide-content .guide-center').first().show();
})