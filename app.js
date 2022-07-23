Cookies.set(`client_1`);

let headphone_1 = {
    imgfile:   `Audeze LCD-5.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_2 = {
    imgfile:   `Hifiman Arya Planar Magnetic.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_3 = {
    imgfile:   `Sennheiser HD800S.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_4 = {
    imgfile:   `Campfire audio Saber.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_5 = {
    imgfile:   `Campfire Audio Solaris 2020.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_6 = {
    imgfile:   `Oriveti OV800 8 Driver IEM.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_7 = {
    imgfile:   `Fiio KA3.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_8 = {
    imgfile:   `ALO Audio Studio Six.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_9 = {
    imgfile:   `Oriveti OV800 8 Driver IEM.png`,
    name: `Campfire Audio Solaris 2020`,
    description: `IEM style`,
    price: 1899.00
}


let current_basket = document.querySelector(`#add_1`);
// let current_basket = Cookies.get(`client_1`);
current_basket.addEventListener(`click`, add_to_basket);
function add_to_basket () {
    let headphone_1_json = JSON.stringify(headphone_1);
    headphone_1_json += Cookies.set(`client_1`, headphone_1_json);
}