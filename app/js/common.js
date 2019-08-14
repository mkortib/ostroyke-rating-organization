$(function() {

  // stars rating
  
    /* 5 stars */

  $('.stars_five').starrr({
    readOnly: true,
    max: 5,
    rating: 5
  });

    /* 4 stars */

  $('.stars_four').starrr({
    readOnly: true,
    max: 5,
    rating: 4
  });

    /* 3 stars */

  $('.stars_three').starrr({
    readOnly: true,
    max: 5,
    rating: 3
  });

    /* 2 stars */

  $('.stars_two').starrr({
    readOnly: true,
    max: 5,
    rating: 2
  });

    /* 1 stars */

  $('.stars_one').starrr({
    readOnly: true,
    max: 5,
    rating: 1
  });
  
    /* 0 stars */

  $('.stars_read').starrr({
    readOnly: true,
    max: 5,
    rating: 0
  });
  
  $('.stars .fa-star').click(function(e) {
    e.preventDefault();
  })

    /* mob rating in itms - only for read */

    $('.stars_itms').starrr({
      readOnly: true,
      max: 5,
      rating: 4
    })

  // vars for filter

  var currRating = 0;
  
  $('.stars_filter').starrr({
    max: 5,
    change: function(e, value){
      if (value) {
        currRating = value;
      } else {
        currRating = 0;
      }
      // testing
      console.log(currRating);
    }
  });



  // toggle SEO txt

  $('.butt_txt').click(function() {
    $(this).find('img').toggleClass('img_rotate');
    if ($('.seo_txt').hasClass('blur')) {
      $('.seo_txt').animate({
          'max-height': $('.seo_txt').get(0).scrollHeight
          }, function () {
              $(this).removeClass('blur');
              $('.butt_txt').find('.more').fadeOut();
              $('.butt_txt').find('.less').fadeIn();
          }
      )
    }
    else {
      $('.seo_txt').animate({
            'max-height': '90'
        }, function () {
            $(this).addClass('blur');
            $('.butt_txt').find('.more').fadeIn();
            $('.butt_txt').find('.less').fadeOut();
        }
      )
    }
    $(this).find('.less').fadeIn();
    $(this).find('.more').fadeOut();
  })


  // nice select filter

  $('.city_field select').niceSelect();
  $('.select_rating').niceSelect();

  // toggle mob filters
  
  $('.filter_but .full_space').click(function() {
    $(this).parent().addClass('filter_but_open');
    $('.filters_mob_wr').addClass('filters_mob_wr_open');
  })

  $('.filter_but .open').click(function(e) {
    $(this).parent().removeClass('filter_but_open');
    $('.filters_mob_wr').removeClass('filters_mob_wr_open');
  })




  if($(window).width() > 768) {

    // serach mob mnu

    /* open */
    
    $('.butt_open_search').click(function() {
      $(this).parent().parent().addClass('open_search_bl');
      $(this).css('display', 'none');
      $('.search_mobile .close_search').css('display', 'block');
      $('.search_mobile .show_inp').css('display', 'block');
      $('.search_mobile .butt_search_submit').css('display', 'block');
    })

    /* close */

    $('.search_mobile .close_search').click(function() {
      $(this).parent().parent().removeClass('open_search_bl');
      $('.search_mobile .butt_open_search').css('display', 'block');
      $('.search_mobile .close_search').css('display', 'none');
      $('.search_mobile .show_inp').css('display', 'none');
      $('.search_mobile .butt_search_submit').css('display', 'none');
    })

  }







  


});

$(window).on('load', function() {

   
});
