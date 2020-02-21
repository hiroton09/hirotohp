'use strict'

{
    // Newsリストを作成
    function setNews() {
        const news = document.getElementById('news');
    
        const newsList = [
            {d: '2020-0202', b: '本文が入ります。　本文が入ります。　本文が入ります。'},
            {d: '2020-0202', b: '本文が入ります。　本文が入ります。　本文が入ります。'},
            {d: '2020-0202', b: '本文が入ります。　本文が入ります。　本文が入ります。'},
            {d: '2020-0202', b: '本文が入ります。　本文が入ります。　本文が入ります。'},
        ];

        for(let i = 0; i < 4; i++) {
            const newsContent = document.createElement('li');
            const newsDay = document.createElement('p');
            const newsBody = document.createElement('p');

            newsDay.textContent = newsList[i].d;
            newsBody.textContent = newsList[i].b;

            newsDay.classList.add('newsDay');
            newsBody.classList.add('newsBody');

            news.appendChild(newsContent);
            newsContent.appendChild(newsDay);
            newsContent.appendChild(newsBody);
        }
    }

    // Businessリストを作成
    function setBusiness() {
        const business = document.getElementById('business');

        const businessList = [
            {p: 'img/business.png', t: 'タイトル', b: '本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。'},
            {p: 'img/business.png', t: 'タイトル', b: '本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。'},
            {p: 'img/business.png', t: 'タイトル', b: '本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。　本文が入ります。'},
        ];

        for(let i = 0; i < businessList.length; i++) {
            const businessContent = document.createElement('li');
            const businessImg = document.createElement('img');
            const businessTitle = document.createElement('h3');
            const businessBody = document.createElement('p');

            businessImg.src = businessList[i].p;
            businessTitle.textContent = businessList[i].t;
            businessBody.textContent = businessList[i].b;

            businessContent.classList.add('col-md-4');
            businessImg.classList.add('col-12');
            businessTitle.classList.add('business_title');

            business.appendChild(businessContent);
            businessContent.appendChild(businessImg);
            businessContent.appendChild(businessTitle);
            businessContent.appendChild(businessBody);
        }
    }

    setBusiness();
    setNews();
}
