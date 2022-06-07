const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir Si')
});

const nouBtn = document.querySelector('#nouBtn');

nouBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*400);
    const randomY = parseInt(Math.random()*400);
    nouBtn.style.setProperty('tpo',randomY+'%');
    nouBtn.style.setProperty('lesf',randomX+'%');
    nouBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`)
}) 