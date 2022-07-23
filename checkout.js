
let cart_json = Cookies.get(`client_1`);
let cart = JSON.parse(cart_json);


document.body.insertAdjacentHTML(`afterbegin`, `<h1>$ ${cart[`price`]}</h1>`);
document.body.insertAdjacentHTML(`afterbegin`, `<h1>${cart[`name`]}</h1>`);
document.body.insertAdjacentHTML(`afterbegin`, `<h1>${cart[`description`]}</h1>`);
document.body.insertAdjacentHTML(`afterbegin`, `<img src="${cart[`imgfile`]}">`);