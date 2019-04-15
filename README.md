# Универсальный класс для попапа

![Класс для попапа](/4.png)

# HTML

```html

<!-- Демонстрационные кнопки -->
<button class="btn1">Попап с текстом</button>
<button class="btn2">Попап с формой</button>

<!-- оверлей и модалка -->
<div class="overlay"></div>
<div class="modal"></div>

<!-- Popup #1 -->
<div class="popup"> <!-- display:none -->

  <!-- Содержимое первого popup -->
  <div class="text">
    <h1>Заголовок</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur debitis enim impedit modi
      mollitia.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur debitis enim impedit modi
      mollitia.</p>
  </div>

</div>

<!-- Popup #2 -->
<div class="popup"> <!-- display:none -->


  <!-- Содержимое второго popup -->
  <div class="form">
    <h1>Форма</h1>
    <input type="text" value="Поле 1">
    <input type="text" value="Поле 2">
    <input type="text" value="Поле 3">
  </div>
  
</div>


<script src="js/modalClass.js"></script>
<script src="js/script.js"></script>

```


# Class popup JS

```js

function Popup(options) {

  this.modal = document.querySelector(options.modal);
  this.overlay = document.querySelector(options.overlay);

  let popup = this; // сохранение контекста

  this.open = function(content) { // открытие popup
    popup.modal.innerHTML = content;
    popup.overlay.classList.add('open');
    popup.modal.classList.add('open');
  };

  this.close = function () { // закрытие popup
    popup.overlay.classList.remove('open');
    popup.modal.classList.remove('open');
  };

  this.overlay.onclick = popup.close;

}

```

# script JS

```js

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

```
