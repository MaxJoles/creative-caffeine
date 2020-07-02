// Styles webflow theme based on time of day
var currentTime = new Date().getHours();
console.log(currentTime);
if (5 <= currentTime && currentTime < 11) {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5cc86f0e9b8ac6a99fddf645/5efb25d3cf4e50457ea99f18_mornning-cc.png");
    console.log("morning");
    console.log("testtt");
}

else if (11 <= currentTime && currentTime < 17) {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5cc86f0e9b8ac6a99fddf645/5efb25954f1c9a59f14f771c_day-cc.png");
    $('.image-switch').attr("srcset", "https://uploads-ssl.webflow.com/5cc86f0e9b8ac6a99fddf645/5efb25954f1c9a59f14f771c_day-cc.png");
    console.log("afternoon");
}

else {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5cc86f0e9b8ac6a99fddf645/5efb25a8cf4e50e6b8a99e6b_night-cc.png");
    console.log("night");
}
