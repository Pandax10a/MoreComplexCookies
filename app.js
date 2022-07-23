// setting cookie up
Cookies.set(`client_1`);
// info on product listed in object
let headphone_1 = {
    imgfile:   `Audeze LCD-5.png`,
    name: `Audeze LCD-5`,
    description: `Full size headphone`,
    price: 1899.00
}
let headphone_2 = {
    imgfile:   `Hifiman Arya Planar Magnetic.png`,
    name: `Hifiman Arya Planar Magnetic`,
    description: `Full size headphone`,
    price: 1899.00
}
let headphone_3 = {
    imgfile:   `Sennheiser HD800S.png`,
    name: `Sennheiser HD800S`,
    description: `Full size headphone`,
    price: 1899.00
}
let headphone_4 = {
    imgfile:   `Campfire audio Saber.png`,
    name: `Campfire audio Saber`,
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
    name: `Oriveti OV800 8 Driver IEM`,
    description: `IEM style`,
    price: 1899.00
}
let headphone_7 = {
    imgfile:   `Fiio KA3.png`,
    name: `Fiio KA3`,
    description: `DAC Amp`,
    price: 1899.00
}
let headphone_8 = {
    imgfile:   `ALO Audio Studio Six.png`,
    name: `ALO Audio Studio Six`,
    description: `DAC Amp`,
    price: 1899.00
}
let headphone_9 = {
    imgfile:   `Oriveti OV800 8 Driver IEM.png`,
    name: `Oriveti OV800 8 Driver IEM`,
    description: `DAC Amp`,
    price: 1899.00
}

// creating a variable for each product to listen in on click
let current_basket = document.querySelector(`#add_1`);
let current_basket2 = document.querySelector(`#add_2`);
let current_basket3 = document.querySelector(`#add_3`);
let current_basket4 = document.querySelector(`#add_4`);
let current_basket5 = document.querySelector(`#add_5`);
let current_basket6 = document.querySelector(`#add_6`);
let current_basket7 = document.querySelector(`#add_7`);
let current_basket8 = document.querySelector(`#add_8`);
let current_basket9 = document.querySelector(`#add_9`);

current_basket.addEventListener(`click`, add_to_basket);
function add_to_basket () { 
    let headphone_1_json = JSON.stringify(headphone_1);
    headphone_1_json = Cookies.set(`client_1`, headphone_1_json); 
}
current_basket2.addEventListener(`click`, add_to_basket2);
function add_to_basket2 () {
    let headphone_2_json = JSON.stringify(headphone_2);
    headphone_2_json = Cookies.set(`client_1`, headphone_2_json);
}
current_basket3.addEventListener(`click`, add_to_basket3);
function add_to_basket3 () {
    let headphone_3_json = JSON.stringify(headphone_3);
    headphone_3_json = Cookies.set(`client_1`, headphone_3_json);
}
current_basket4.addEventListener(`click`, add_to_basket4);
function add_to_basket4 () {
    let headphone_4_json = JSON.stringify(headphone_4);
    headphone_4_json = Cookies.set(`client_1`, headphone_4_json);
}
current_basket5.addEventListener(`click`, add_to_basket5);
function add_to_basket5 () {
    let headphone_5_json = JSON.stringify(headphone_5);
    headphone_5_json = Cookies.set(`client_1`, headphone_5_json);
}
current_basket6.addEventListener(`click`, add_to_basket6);
function add_to_basket6 () {
    let headphone_6_json = JSON.stringify(headphone_6);
    headphone_6_json = Cookies.set(`client_1`, headphone_6_json);
}
current_basket7.addEventListener(`click`, add_to_basket7);
function add_to_basket7 () {
    let headphone_7_json = JSON.stringify(headphone_7);
    headphone_7_json = Cookies.set(`client_1`, headphone_7_json);
}
current_basket8.addEventListener(`click`, add_to_basket8);
function add_to_basket8 () {
    let headphone_8_json = JSON.stringify(headphone_8);
    headphone_8_json = Cookies.set(`client_1`, headphone_8_json);
}
current_basket9.addEventListener(`click`, add_to_basket9);
function add_to_basket9 () {
    let headphone_9_json = JSON.stringify(headphone_9);
    headphone_9_json = Cookies.set(`client_1`, headphone_9_json);
}