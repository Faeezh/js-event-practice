function change() {
    let para = document.getElementById('para');
    para.innerHTML = "That tickles";
}

let imageTracker = "f";

function changeImg () {
    let image = document.getElementById('social');
    if (imageTracker == 'f') {
        image.src = "images/pic_44421429.jpg";
        imageTracker = 't';
    } else {
        image.src = "images/pic_44421408.jpg";
        imageTracker = 'f';
    }
    
}

// setTimeout('changeImg()', 2000); // changes once after 2 seconds
setInterval('changeImg()', 2000); // changes every 2 seconds