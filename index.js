document.querySelector('#submit').addEventListener('click', function(e) {
    document.querySelector('.loading-text').style.display = 'inline-block';
    document.querySelector('.loading-svg').style.display = 'inline-block';

    setTimeout(entries, 2000)
});

function entries() {
    if (document.querySelector('#name').value.toLowerCase() == 'sathvik') {
        window.location.href = 'people/gol-d-sathvik/index.html';
    }

    if (document.querySelector('#name').value.toLowerCase() == 'aryan') {
        window.location.href = 'people/gol-d-aryan/index.html';
    }
}