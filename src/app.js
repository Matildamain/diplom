function sortCards(order) {
    const cardsContainer = document.querySelector('.content');
    const cards = Array.from(cardsContainer.querySelectorAll('.product-card'));
  
    cards.sort((cardA, cardB) => {
      const priceA = parseInt(cardA.querySelector('.product-price').textContent.replace(/\D/g, ''));
      const priceB = parseInt(cardB.querySelector('.product-price').textContent.replace(/\D/g, ''));
  
      if (order === 'UP') {
        return priceA - priceB;
      } else if (order === 'DOWN') {
        return priceB - priceA;
      } else {
      return 0;
      }
    });
  
    // Удаляю все карточки из контейнера
    cards.forEach((card) => card.remove());
  
    // Добавляю отсортированные карточки обратно в контейнер
    cards.forEach((card) => cardsContainer.appendChild(card));
  }

  
sortCards('UP');
sortCards('DOWN');

// Нахожу все кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Добавляю обработчик события для каждой кнопки
addToCartButtons.forEach((button) => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const card = event.target.closest('.product-card');

  // Получаю информацию о товаре
  const productName = card.querySelector('.product-description').textContent;
  const productPrice = card.querySelector('.product-price').textContent;

  // Создаю элемент корзины
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerHTML = `
    <p>${productName}</p>
    <p>${productPrice}</p>
  `;

  // Нахожу контейнер корзины
  const cartContainer = document.querySelector('.cart');

  // Нахожу контейнер корзины с элементами
  const cartItemsContainer = cartContainer.querySelector('.cart-items');

  // Добавляю элемент корзины в контейнер корзины с элементами
  cartItemsContainer.appendChild(cartItem);
}
