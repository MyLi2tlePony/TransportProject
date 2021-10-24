import React, { Component } from 'react';

function Manual () {
    const pages = [
        {
          id: 0,
          key: 'home',
          name: 'Главная',
          carouselItems: [
            {
              id: 0,
              src: 'https://2.downloader.disk.yandex.ru/preview/2762330150cc020b59167b1753653db08385cd20cee80fa508b7fe2ab16f4a8a/inf/GWcR4qIscZg4guV6pFYwGx314ii3eCMA8yPx1rB62SUBuXMyC0hnOuyD3wJbNngdsmKqDI1OasDgNvAr_utUtg%3D%3D?uid=1168127163&filename=2021-10-23_21-24-03.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1168127163&tknv=v2&size=1898x899',
              text: ' '
            },
            {
              id: 1,
              src: 'https://1.downloader.disk.yandex.ru/preview/120449d5043fc3af18f1b51f631f7b35b8e2fb5deba76677aeff010cb4c9b0ee/inf/HOMxiboEvs8ZgLgX7ORW0bwVBQFRFgjMohr4tDGxkkO1OMdlp5uOE_L2eO6jt4ghoEblgoN1dTwYwG8Rlz9CDQ%3D%3D?uid=1168127163&filename=2021-10-23_21-24-33.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=1168127163&tknv=v2&size=1898x899',
              text: ' '
            }
          ]
        },
        {
          id: 1,
          key: 'article',
          name: 'Загрузка оборудования',
          carouselItems: [
            {
              id: 0,
              src: 'https://www.sunhome.ru/i/wallpapers/216/lambordzhini-aventador-lp700.orig.jpg',
              text: 'Страница 1'
            },
            {
              id: 1,
              src: 'https://www.nastol.com.ua/download.php?img=201209/1920x1080/nastol.com.ua-32714.jpg',
              text: 'Страница 2'
            },
            {
              id: 2,
              src: 'https://avatars.mds.yandex.net/get-autoru-vos/1960645/942fd81affc26016b3a5ba7d57985258/1200x900n',
              text: 'Страница 3'
            }
          ]
        },
        {
          id: 2,
          key: 'analitics',
          name: 'Анализ',
          carouselItems: [
            {
              id: 0,
              src: 'https://www.sunhome.ru/i/wallpapers/216/lambordzhini-aventador-lp700.orig.jpg',
              text: 'Страница 1'
            },
            {
              id: 1,
              src: 'https://www.nastol.com.ua/download.php?img=201209/1920x1080/nastol.com.ua-32714.jpg',
              text: 'Страница 2'
            },
            {
              id: 2,
              src: 'https://avatars.mds.yandex.net/get-autoru-vos/1960645/942fd81affc26016b3a5ba7d57985258/1200x900n',
              text: 'Страница 3'
            }
          ]
        },
        {
          id: 3,
          key: 'manual',
          name: 'Руководство',
          carouselItems: [
            {
              id: 0,
              src: 'https://www.sunhome.ru/i/wallpapers/216/lambordzhini-aventador-lp700.orig.jpg',
              text: 'Страница 1'
            },
            {
              id: 1,
              src: 'https://www.nastol.com.ua/download.php?img=201209/1920x1080/nastol.com.ua-32714.jpg',
              text: 'Страница 2'
            },
            {
              id: 2,
              src: 'https://avatars.mds.yandex.net/get-autoru-vos/1960645/942fd81affc26016b3a5ba7d57985258/1200x900n',
              text: 'Страница 3'
            }
          ]
        },
        {
          id: 4,
          key: 'account',
          name: 'Личный кабинет',
          carouselItems: [
            {
              id: 0,
              src: 'https://www.sunhome.ru/i/wallpapers/216/lambordzhini-aventador-lp700.orig.jpg',
              text: 'Страница 1'
            },
            {
              id: 1,
              src: 'https://www.nastol.com.ua/download.php?img=201209/1920x1080/nastol.com.ua-32714.jpg',
              text: 'Страница 2'
            },
            {
              id: 2,
              src: 'https://avatars.mds.yandex.net/get-autoru-vos/1960645/942fd81affc26016b3a5ba7d57985258/1200x900n',
              text: 'Страница 3'
            }
          ]
        },
      ];

    return (
        <reactFragment>
            <div className="accordion" id="main-accordion">
                {pages.map(page =>
                    createAccordion(page)
                )}
            </div>
        </reactFragment>
    );

    function createCarouselItem(carouselItem) {
        const src = carouselItem.src;
        const text = carouselItem.text;
        const classCarouselItem = carouselItem.id === 0
          ? 'carousel-item active'
          : 'carousel-item';
    
        return (
          <div key={carouselItem.id} className={classCarouselItem}>
            <img src={src} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block text-dark">
              {text}
            </div>
          </div>
        );
      }
    
    function createCarouselIndicator(carouselItem, dataBsTarget) {
        const slideId = carouselItem.id;
        const ariaLabel = 'Slide ' + carouselItem.id
    
        const ariaClassName = carouselItem.id === 0
          ? 'active'
          : '';
    
        const ariaCurrent = carouselItem.id === 0
          ? 'true'
          : '';
    
        return (
          <button
            key={carouselItem.id}
            type="button"
            data-bs-target={dataBsTarget}
            data-bs-slide-to={slideId}
            className={ariaClassName}
            aria-current={ariaCurrent}
            aria-label={ariaLabel}>
          </button>
        );
      }
    
    function createCarousel(page) {
        const carouselId = 'carousel-' + page.key;
        const dataBsTarget = '#' + carouselId;
    
        return (
          <div id={carouselId} className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {page.carouselItems.map(carouselItem =>
                createCarouselIndicator(carouselItem, dataBsTarget)
              )}
            </div>
            <div className="carousel-inner">
              {page.carouselItems.map(carouselItem =>
                createCarouselItem(carouselItem)
              )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={dataBsTarget} data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={dataBsTarget} data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Следующий</span>
            </button>
          </div>
        )
      }
    
    function createAccordion(page) {
        const id = page.id;
        const name = page.name;
    
        const idHead = page.key + '-head';
        const idBody = page.key + '-body';
    
        const dataBsParent = '#' + "main-accordion";
        const dataBsTarget = '#' + idBody;
    
        return (
          <div key={id} className="accordion-item">
            <h2 className="accordion-header" id={idHead}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="true" aria-controls={idBody}>
                {name}
              </button>
            </h2>
            <div id={idBody} className="accordion-collapse collapse" aria-labelledby={idHead} data-bs-parent={dataBsParent}>
              <div className="accordion-body">
                {createCarousel(page)}
              </div>
            </div>
          </div>
        )
    }
    
}

export default Manual;