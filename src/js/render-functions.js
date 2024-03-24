export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  const fragment = document.createDocumentFragment();

  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    img.dataset.source = image.largeImageURL;
    fragment.appendChild(img);
  });

  gallery.appendChild(fragment);
}
