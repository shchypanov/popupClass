window.onload = function () {

  //Инициализация попапа
  let popup = new Popup({
    modal: '.modal', // класс для модального окна
    overlay: '.overlay' // класс для оверлея
  });


  document.querySelector('.btn1').onclick = function () { // popup привязывается к кнопке .btn1
    let p1 = document.querySelector('.text'); // содежимое класса .text попадет в переменную p1
    popup.open(p1.innerHTML); // popup откроется с содержимым переменной p1
  };

  document.querySelector('.btn2').onclick = function () {
    let p2 = document.querySelector('.form');
    popup.open(p2.innerHTML);
  }

};