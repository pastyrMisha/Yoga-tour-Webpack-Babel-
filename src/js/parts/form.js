function form() {
    let message = {
            loading: 'Загрузка',
            success: 'Спасибо! Скоро мы с вами свяжемся!',
            failure: 'Что-то пошло не так!'
        },
        form = document.querySelector('.main-form'),
        contactForm = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(elem) {

        elem.addEventListener('submit', function (e) {
            e.preventDefault();
            elem.appendChild(statusMessage);
            // Сначала, при помощи объекта FormData получаем все, что ответил наш пользователь в форме 
            let formData = new FormData(elem);

            function postData(formData) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 3)
                                resolve()
                        } else {
                            reject()
                        }
                    }

                    let obj = {};

                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);

                    request.send(json);

                }) // End Promise
            } // End postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => {
                    // thanksModal.style.display = 'block';
                    // mainModal.style.display = 'none';
                    // statusMessage.innerHTML = '';
                    statusMessage.innerHTML = message.success;
                })
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput)

        }) //End EventListener on submit
    } // End sendForm
    sendForm(form);
    sendForm(contactForm);
}

module.exports = form;