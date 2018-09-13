var inMenu = document.querySelectorAll('#menu-main-menu li:nth-child(5)')[0];
var inBlock = document.querySelectorAll(".menu_2 .left_menu li:nth-child(3) a")[0];
var xhr = new XMLHttpRequest();
if (inMenu || inBlock) {
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
                if (inMenu) {
                    inMenu.style.display = 'none';
                }
                if (inBlock) {
                    inBlock.text = "Купить монеты";
                    inBlock.setAttribute("href", "https://www.monetnik.ru/search/?utm_source=moneta-russia-region");
                }
            }
        }
    };
    xhr.send();
}