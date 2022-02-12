$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('#red').hover(function (){
        $('#titleThing').css('color', 'red')
    }, function (){
        $('#titleThing').css('color', 'grey')
    })

    $('#green').hover(function (){
        $('#titleThing').css('color', 'green')
    }, function (){
        $('#titleThing').css('color', 'grey')
    })

    $('#blue').hover(function (){
        $('#titleThing').css('color', 'blue')
    }, function (){
        $('#titleThing').css('color', 'grey')
    })

    $('#checkAll').click(function (){
        var checked = this.checked;
        $('input[type="checkbox"]').each(function (){
            this.checked = checked;
        })

        const chBlue = document.querySelector('#blue, #red, #green')
        if (chBlue.checked === true){
            $('#redImg').removeClass().addClass('animate__animated animate__bounceInDown')
            $('#blueImg').removeClass().addClass('animate__animated animate__bounceInDown')
            $('#greenImg').removeClass().addClass('animate__animated animate__bounceInDown')

        }
    })

    //show toast if nothing is checked
    $('#submit').click(function (){
        const cb = document.querySelector('#red, #blue, #green');

        if (cb.checked === false){
            $('#toast').toast({ autohide: false }).toast('show');
        }
    })

    let animations = ['animate__animated animate__bounce', 'animate__animated animate__rubberBand', 'animate__animated animate__jello', 'animate__animated animate__flash']
    let animation = animations[Math.floor(Math.random()*animations.length)];

    $('#titleThing').removeClass().addClass(animation);

});