const API_KEY = 'u_bgxnj34w7k';

export async function searchImages(keyword) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    keyword
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images from Pixabay API');
  }
}
