// scripts.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    this.reset();
});
