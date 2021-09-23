function modal() {
    let mainInfo = document.querySelector('.info'),
        more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        descBtn = document.querySelectorAll('.description-btn');

    more.addEventListener('click', () => {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });

    mainInfo.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            target.classList.add('more-splash');
            overlay.style.display = 'block';
            document.body.style.overflow = '';

        }
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
        descBtn.forEach((descBtn) => {
            descBtn.classList.remove('more-splash');
        })
    });

}

module.exports = modal;