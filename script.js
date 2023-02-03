const changeColor = () => {
    let altColor = '#f0f0f0';
    let color = document.body.style.color;
    color == 'black' ? document.body.style.color = altColor : document.body.style.color = 'black';
}