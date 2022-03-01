$("#add_user").submit(function(event){
    alert("data insertes successfully")
})


var selector = '.nav li';

$(selector).on('click', function(){
    $(selector).removeClass('activea');
    $(this).addClass('activea');
});