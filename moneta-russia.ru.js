var elements = [];
var inMenu = document.querySelectorAll('#menu-main-menu li:nth-child(5)')[0];
if (inMenu.length) {
    elements.push(inMenu);
}
var inBlock = document.getElementById("id_market");
if (inBlock) {
    elements.push(inBlock);
}
if (elements.length) {
    var xhr = new XMLHttpRequest();
    xhr.open(
        'GET',
        'https://www.raritetus.ru/service/checkAblePurchaseLink',
        true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            if (typeof xhr.response.purchaseAble == typeof undefined
                    || !xhr.response.purchaseAble)
            {
                for (var i=0; i<elements.length;i++) {
                    elements[i].style.display = 'none';
                }
            }
        }
    };
    xhr.send();
}
