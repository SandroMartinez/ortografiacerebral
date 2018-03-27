
//Testimonial Carousel
$('#carouselTestimonal').on('slide.bs.carousel', function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselTestimonal .carousel-inner .carousel-item').length;
    
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselTestimonal .carousel-inner .carousel-item').eq(i).appendTo('#carouselTestimonal .carousel-inner');
            }
            else {
                $('#carouselTestimonal .carousel-inner .carousel-item').eq(0).appendTo('#carouselTestimonal .carousel-inner');
            }
        }
    }
});