document.querySelector('#submit').addEventListener('click', function(e) {
    document.querySelector('.loading-text').style.display = 'inline-block';
    document.querySelector('.loading-svg').style.display = 'inline-block';

    setTimeout(entries(), 2000)
});

function entries() {
    if (document.querySelector('#name').value.toLowerCase() == 'sathvik') {
        setTimeout(function() {window.location.href = 'people/gol-d-sathvik/index.html';}, 1500);
    } else if (document.querySelector('#name').value.toLowerCase() == 'aryan') {
        setTimeout(function() {window.location.href = 'people/gol-d-aryan/index.html';}, 1500);
    } else {
        document.querySelector('.search-error-text').innerHTML = 'No entries for "' + document.querySelector('#name').value + '" found'
        setTimeout(function() {document.querySelector('.loading-text').style.display = 'none'; document.querySelector('.loading-svg').style.display = 'none'; document.querySelector('.search-error-text').style.display = 'block';}, 1000);
        setTimeout(function() {document.querySelector('.search-error-text').style.display = 'none';}, 3000);
    }
}