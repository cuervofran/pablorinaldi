var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
    // options...
    itemSelector: '.grid-item',
    columnWidth: 230,
    gutter: 15,
    isFitWidth: true
});