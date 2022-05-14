document.querySelector('#submit').addEventListener('click', function(e) {
    if (document.querySelector('#name').length == 0) {
        return;
    } else {
        document.querySelector('.loading-text').style.display = 'inline-block';
        document.querySelector('.loading-svg').style.display = 'inline-block';
    }
});