$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});

//PLUGIN SCRIPT FOR POPUP IMAGE
$('.image-link').magnificPopup({type:'image'});
$('.ajax-popup').magnificPopup({
    type: 'ajax',
    alignTop: true,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
});