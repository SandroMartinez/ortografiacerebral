import  Blazy from 'blazy/blazy.min.js'

var bLazy = new Blazy({

    // Options
});


$('#carouselOcIndicators').on('slid.bs.carousel', bLazy.revalidate);
$('#carouselOcIndicators').on('slide.bs.carousel', bLazy.revalidate);

$('#carouselOfIndicators').on('slid.bs.carousel', bLazy.revalidate);
$('#carouselOfIndicators').on('slide.bs.carousel', bLazy.revalidate);


$('#carouselMaIndicators').on('slid.bs.carousel', bLazy.revalidate);
$('#carouselMaIndicators').on('slide.bs.carousel', bLazy.revalidate);

$('#carouselTestimonal').on('slid.bs.carousel', bLazy.revalidate);
$('#carouselTestimonal').on('slide.bs.carousel', bLazy.revalidate);



$('a[data-toggle="pill"]').on('shown.bs.tab',function (e) {
    console.log('tab activated!');
    bLazy.revalidate();
});