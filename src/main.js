import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api.js';
import { clearGallery, renderImages } from './js/render-functions.js';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const loader = document.getElementById('loader');

  searchForm.addEventListener('submit', async event => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();
    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query',
      });
      return;
    }

    clearGallery();
    loader.style.display = 'block';

    try {
      const images = await searchImages(query);
      renderImages(images);
      // Після додавання нових елементів викликаємо метод refresh для SimpleLightbox
      // Перший раз викликаємо при ініціалізації
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    } catch (error) {
      console.error(error.message);
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
    } finally {
      loader.style.display = 'none';
    }
  });
});
