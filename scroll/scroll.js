let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let RAOOF = document.querySelector('.RAOOF')
onscroll = function()
{
    let value = scrollY ;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value  + 'px';
    boat.style.left = value *3.5  + 'px';
    RAOOF.style.fontSize = value*1.1 + 'px';
    if(scrollY> 67){

    RAOOF.style.fontSize = 67 + 'px';
    RAOOF.style.position = 'fixed' ;
    if(scrollY > 478){
        RAOOF.style.display = 'none'

    }
    else {
        RAOOF.style.display = 'block';
    }




    }


}
