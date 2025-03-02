const buttons = document.querySelectorAll('.button');
const body=document.querySelector('body');
const images = {
    sky: "sky.jpg",
    blue: "blue.jpg",
    pink: "pink.jpg",
    grey: "grey.jpg"
};

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const image = images[e.currentTarget.id]; 
        if (image) {
            body.style.backgroundImage = `url('${image}')`;
            body.style.backgroundSize = "cover"; 
            body.style.backgroundPosition = "center"; 
            body.style.backgroundRepeat = "no-repeat";
        }
    });
});
