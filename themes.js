// Styles webflow theme based on time of day
var currentTime = new Date().getHours();
console.log(currentTime);
if (5 <= currentTime && currentTime < 11) {
    console.log('morning');
    $('[theme=dynamic]').forEach(target => target.classList.add('morning'));

}

else if (11 <= currentTime && currentTime < 17) {
    console.log('afternoon');
}

else {
    console.log('night');
    $('[theme=dynamic]').forEach(target => target.classList.add('night'));
}
