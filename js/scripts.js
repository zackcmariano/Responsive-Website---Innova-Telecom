$(document).ready(function() {

    // PROGRESS BAR CIRCLE A
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#54acff' ,
        strokeWidth: 8,
        duration: 1400,
        from: { color: '#AAA' },
        to: { color: '#54acff' },

        step: function(state, circle) {
        
         circle.path.setAttribute('stroke', state.color);

         let value = Math.round(circle.value() *920);

         circle.setText(value); 

        }


    });
     // PROGRESS BAR CIRCLE B
     let containerB = document.getElementById("circleB");

     let circleB = new ProgressBar.Circle(containerB, {
 
         color: '#54acff' ,
         strokeWidth: 8,
         duration: 1600,
         from: { color: '#AAA' },
         to: { color: '#54acff' },
 
         step: function(state, circle) {
         
          circle.path.setAttribute('stroke', state.color);
 
          let value = Math.round(circle.value() *58);
 
          circle.setText(value); 
 
         }
 
 
     });
     // PROGRESS BAR CIRCLE B
     let containerC = document.getElementById("circleC");

     let circleC = new ProgressBar.Circle(containerC, {
 
         color: '#54acff' ,
         strokeWidth: 8,
         duration: 1800,
         from: { color: '#AAA' },
         to: { color: '#54acff' },
 
         step: function(state, circle) {
         
          circle.path.setAttribute('stroke', state.color);
 
          let value = Math.round(circle.value() *74);
 
          circle.setText(value); 
 
         }
 
 
     });
     // PROGRESS BAR CIRCLE B
     let containerD = document.getElementById("circleD");

     let circleD = new ProgressBar.Circle(containerD, {
 
         color: '#54acff' ,
         strokeWidth: 8,
         duration: 2000,
         from: { color: '#AAA' },
         to: { color: '#54acff' },
 
         step: function(state, circle) {
         
          circle.path.setAttribute('stroke', state.color);
 
          let value = Math.round(circle.value() *2200);
 
          circle.setText(value); 
 
         }
 
 
     });

     //INICIANDO LOADER QUANDO USUARIO CHEGAR AO ELEMENTO
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;

        }
    });

    // PARALLAX
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});

    }, 250);

    // SCROLL FOR SECTION //
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);

    });


});