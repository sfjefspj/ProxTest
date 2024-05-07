document.getElementById('goButton').addEventListener('click', function() {
    var url = document.getElementById('urlInput').value;
    if (url.trim() !== '') {
        fetch('https://cors-anywhere.herokuapp.com/' + url, {
            headers: {
                'Origin': 'https://jsfiddle.net/Sussi_baka_boi/2jo9a71d/11/', // Replace with the origin of your website
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('resultFrame').srcdoc = data;
        })
        .catch(error => console.error('Error fetching data:', error));
    } else {
        alert('Please enter a URL.');
    }
});
