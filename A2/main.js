window.onload = function () {
    var images = ['pic 1.png', 'pic 2.png', 'pic 3.png', 'pic 4.png', 'pic 5.png', 'pic 6.png', 'pic 7.png', 'pic 8.png', 'pic 9.png', 'pic 10.png',];
    var image = images[Math.floor(Math.random() * images.length)];
    document.getElementsByTagName('body')[0].style.backgroundImage = "url('" + image + "')";
    document.getElementsByTagName('body')[0].style.backgroundSize = "cover";
    document.getElementsByTagName('body')[0].style.backgroundRepeat = "repeat-y";
    document.getElementsByTagName('body')[0].style.backgroundPosition = "center";
    document.getElementsByTagName('body')[0].style.backgroundAttachment = "fixed";
}