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