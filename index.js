document.querySelector ("button").addEventListener ('click', function() {
    const monicker = document.getElementById('monicker').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone');
    const breed = document.getElementById('breed');
    const nutrition = document.querySelectorAll('input[name="nutrition"]') // получение значения чекбокса в форме
    for (let n of nutrition) {
    if (n.checked) {
    const catNutrition = n.value;
    console.log(catNutrition);
        }
    }
    const gender = document.querySelectorAll('input[name="gender"]') // получение значения радио в форме
    for (let g of gender) {
    if (g.checked) {
    const catGender = g.value;
    console.log(catGender);
        }
    }
    const comment = document.getElementById('comment');
    const cat = new Cat(monicker, name, phone, breed, catNutrition, catGender, comment);
    console.log(cat);
});

class Cat {
    constructor(monicker, name, phone, breed, catNutrition, catGender, comment) {
        this.monicker = monicker; // кличка питомца
        this.name = name; // имя владельца
        this.phone = phone; // телефон владельца
        this.breed = breed; // порода
        this.nutrition = catNutrition; // чем питается
        this.gender = catGender; // пол питомца
        this.comment = comment; // комментарий владельца
    }
}





// const applicationForm = document.getElementById('data');
//applicationForm.addEventListener('submit', handleFormSubmit);

// function handleFormSubmit(event) {
//     event.preventDefault()
//     serializaForm(applicationForm);
// }

// function serializaForm(formData) {
//     console.log(formData);
// }