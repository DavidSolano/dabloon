$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {
        e.preventDefault();
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        let c = $(this).data('code');
        let pname = $(this).data('product');
        $('#product').html(pname);
        $('#code').html(c);


        $('#toast').toast({ autohide: false }).toast('show');
    });

    //close toast
    $(document).keydown(function (e){
        if(e.keyCode === 27){
            $("#closeX").click();
        }
    })
});