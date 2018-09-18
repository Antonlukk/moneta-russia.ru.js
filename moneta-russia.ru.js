var raritetus_links = document.querySelectorAll("a[href^='https://www.raritetus.ru/prodat-monety/']");
if (raritetus_links.length) {
    var xhr = new XMLHttpRequest();
    xhr.open(
        'get',
        'https://www.raritetus.ru/service/checkAblePurchaseLink',
        true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            if (typeof xhr.response.purchaseAble == typeof undefined) {
                console.log("ОШИБОЧНЫЙ ОТВЕТ от raritetus.ru");
            } else if ( !  xhr.response.purchaseAble) {
                for (var i=0;i<raritetus_links.length; i++) {
                    var aTag = raritetus_links[i];
                    aTag.text = "Магазин монет";
                    aTag.setAttribute("href", "https://www.monetnik.ru/search/?utm_source=moneta-russia-region");
                }
            }
        } else {
            console.log("НЕ УДАЛОСЬ получить данные о городе от raritetus.ru!!!");
        }
    };
    xhr.send();
} else {
    console.log("Ссылок на www.raritetus.ru не найдено")
}