//нахожу форму в дереве документа
const applicationForm = document.getElementById('formData');
//создаю событие submit - получение данных из формы для обработки до отправки на сервер
applicationForm.addEventListener('submit', handleFormSubmit);
//функция отправки формы без перезагрузки страницы
function handleFormSubmit(event) {
    // событие для формы, чтобы данные самостоятельно не отправлялись на сервер
    event.preventDefault();
    //получаю поля формы и достаю из их значения
    const name = applicationForm.querySelector('[name="name"]');
    const phone = applicationForm.querySelector('[name="phone"]');
    const monicker = applicationForm.querySelector('[name="monicker"]');
    const breed = applicationForm.querySelector('[name="breed"]');
    const gender = applicationForm.querySelector('[name="gender"]:checked');
    const nutrition = applicationForm.querySelectorAll('[name="nutrition"]:checked');
    const comment = applicationForm.querySelector('[name="comment"]');
    //создаю объект и записываю в него полученные из формы значения
    const applicationFormValues = {
        name: name.value,
        phone: phone.value,
        monicker: monicker? monicker.value:undefined,
        breed: breed.value,
        gender: gender.value,
        nutrition: nutrition? [...nutrition].map(current => current.value):undefined,
        comment: comment.value
    };
    const cat = new Cat(applicationFormValues);
    console.log(cat);
}

class Cat {
    constructor({name, phone, monicker, breed, gender, nutrition, comment}) {
        this.name = name; // имя владельца
        this.phone = phone; // телефон владельца
        this.monicker = monicker; // кличка питомца
        this.breed = breed; // порода
        this.gender = gender; // пол питомца
        this.nutrition = nutrition; // чем питается
        this.comment = comment; // комментарий владельца
    }
}
