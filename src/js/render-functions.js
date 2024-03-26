export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

// Функція для створення <li> з <p> та класу
function createListItemWithParagraph(label, value, className) {
  const listItem = document.createElement('li');
  listItem.textContent = `${label}`;
  listItem.classList.add(className); // Додавання класу до <li>
  const paragraph = document.createElement('p');
  paragraph.textContent = `${value}`;
  listItem.appendChild(paragraph); // Додавання <p> до <li>
  return listItem;
}

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');

  // Очищаємо галерею перед додаванням нових зображень
  gallery.innerHTML = '';

  images.forEach(image => {
    // Створюємо елемент посилання для кожного зображення
    const link = document.createElement('a');
    link.href = image.largeImageURL;
    link.dataset.src = image.largeImageURL; // Додаємо data-src для SimpleLightbox

    // Створюємо елемент зображення
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.title = image.tags;

    // Додаємо зображення до посилання
    link.appendChild(img);

    // Створюємо список з даними
    const dataList = document.createElement('ul');
    dataList.classList.add('my-ul-class');

    // Створюємо елемент <li> для кожного значення та додаємо до <ul>
    const likesItem = createListItemWithParagraph(
      'Likes:',
      image.likes,
      'my-li-class'
    );
    const viewsItem = createListItemWithParagraph(
      'Views:',
      image.views,
      'my-li-class'
    );
    const commentsItem = createListItemWithParagraph(
      'Comments:',
      image.comments,
      'my-li-class'
    );
    const downloadsItem = createListItemWithParagraph(
      'Downloads:',
      image.downloads,
      'my-li-class'
    );

    dataList.appendChild(likesItem);
    dataList.appendChild(viewsItem);
    dataList.appendChild(commentsItem);
    dataList.appendChild(downloadsItem);

    // Створюємо елемент для розміщення списку даних
    const info = document.createElement('div');
    info.classList.add('image-info');
    info.appendChild(dataList);

    // Створюємо контейнер для зображення та даних
    const container = document.createElement('div');
    container.classList.add('image-container');
    container.appendChild(link);
    container.appendChild(info);

    // Додаємо контейнер до галереї
    gallery.appendChild(container);
  });

  // Після додавання зображень викликаємо метод refresh для SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}
