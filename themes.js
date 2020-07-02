// Styles webflow theme based on time of day
var currentTime = new Date().getHours();
console.log(currentTime);
if (5 <= currentTime && currentTime < 11) {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5e750966afbf2f3b3f235449/5ef63ac95f6d2b33ec7b3583_Morning_Image.png");
}

else if (11 <= currentTime && currentTime < 17) {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5e750966afbf2f3b3f235449/5ef63d28bc7eb9242c3916fc_cc-day-image.png");
}

else {
    $('.image-switch').attr("src", "https://uploads-ssl.webflow.com/5e750966afbf2f3b3f235449/5ef63ac9328bb853e3a9722b_night_Image.png");
}
