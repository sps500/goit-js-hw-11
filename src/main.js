import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImages } from './js/pixabay-api';
import { clearGallery, renderImages } from './js/render-functions';

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

    clearGallery(); // Виклик функції clearGallery
    loader.style.display = 'block';

    try {
      const images = await searchImages(query);
      renderImages(images);
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

  // При кліку на маленьке зображення в галереї відкривається його збільшена версія
  // у модальному вікні з використанням бібліотеки SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');
});