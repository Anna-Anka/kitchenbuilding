import mixitup from 'mixitup';
if (document.querySelector('.articles-block')) {
    let mixer = mixitup('.articles-block', {
        load: {
            filter: '.category-furniture'
        }
    });
}