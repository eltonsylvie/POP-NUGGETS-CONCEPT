let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carrosselDom = document.querySelector('.carrossel');
let listItemDom = document.querySelector('.carrossel .list');
let thumbnailDom = document.querySelector('.carrossel .thumbnail');

nextDom.onclick = function() {
    showSlider('next');
}

prevDom.onclick = function() {
    showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;
function showSlider(type) {
    let itemSlider = document.querySelectorAll('.carrossel .list .item');
    let itemThumbnail = document.querySelectorAll('.carrossel .thumbnail .item');

    if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
    } else if (type === 'prev') {
        listItemDom.insertBefore(itemSlider[itemSlider.length - 1], itemSlider[0]);
        thumbnailDom.insertBefore(itemThumbnail[itemThumbnail.length - 1], itemThumbnail[0]);
    }
}
