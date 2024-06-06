$(()=>
{
  // adv slider
  $('.carousel').flickity({
    cellAlign:'left',
    contain:true,
    freeScroll:true,
    autoPlay:1500,
    loop:true,
    pageDots:false,
  })
  //category slider
  $('.category-flick .carousel').flickity({
    cellAlign:'left',
    contain:true,
    freeScroll:false,
    pageDots:true,
  })
  $('.category-flick .carousel').each(function(){
    if($(this).find('div.carousel-cell').length > 1)
    {
      $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next').hide()
    }
  })
  $('.cat-prev').on('click', function(){
    $('.category-flick .carousel').flickity('previous')
  })
  $('.cat-next').on('click', function(){
    $('.category-flick .carousel').flickity('next')
  })
  //brand slider
  $('.brand-flick .carousel').flickity({
    cellAlign:'left',
    contain:true,
    freeScroll:false,
    pageDots:true,
  })
  $('.brand-flick .carousel').each(function()
  {
    if($(this).find('div.carousel-cell').length > 1)
    {
      $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next').hide()
    }
  })
  $('.brand-prev').on('click', function()
  {
    $('.brand-flick .carousel').flickity('previous')
  })
  $('.brand-next').on('click', function()
  {
    $('.brand-flick .carousel').flickity('next')
  })
  // popular slider
  $('.popular-flick .carousel').flickity({
    cellAlign:'left',
    contain:true,
    freeScroll:false,
    pageDots:true,
  })
  $('.popular-flick .carousel').each(function()
  {
    if($(this).find('div.carousel-cell').length > 1)
    {
      $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next').hide()
    }
  })
  $('.popular-prev').on('click', function()
  {
    $('.popular-flick .carousel').flickity('previous')
  })
  $('.popular-next').on('click', function()
  {
    $('.popular-flick .carousel').flickity('next')
  })
    // newly arrived slider
    $('.arrived-flick .carousel').flickity({
      cellAlign:'left',
      contain:true,
      freeScroll:false,
      pageDots:true,
    })
    $('.arrived-flick .carousel').each(function()
    {
      if($(this).find('div.carousel-cell').length > 1)
      {
        $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next').hide()
      }
    })
    $('.arrived-prev').on('click', function()
    {
      $('.arrived-flick .carousel').flickity('previous')
    })
    $('.arrived-next').on('click', function()
    {
      $('.arrived-flick .carousel').flickity('next')
    })
    // back to top button
    $(window).scroll(()=>
    {
      if($(this).scrollTop())
      {
        $('.backToTop').fadeIn()
      }
      else
      {
        $('.backToTop').fadeOut()
      }
    })
    $('.backToTop').click(()=>
    {
      $('html, body').animate(
        {
          scrollTop:0
        },1000
      )
    })
})
