(() => {
  const refs = {
    openModal: document.querySelector(
      '.записати клас який знаходиться на кнопці відкриття модалки'
    ),
    closeModal: document.querySelector(
      '.записати клас який знаходиться на кнопці закриття модалки'
    ),
    modal: document.querySelector('.батьківський дів усієї модалки'),
  };
  refs.openModal.addEventListener('click', toggleMenu);
  refs.closeModal.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
