const API_KEY = '30519885-13d533e53ec26923d7aa1bf0b';

export const fetchPhotos = async (searchQuery, page) => {
  const searchParams = new URLSearchParams({
    q: searchQuery,
    image_type: 'photo',
    page: page,
    per_page: 12,
  });

  const url = `https://pixabay.com/api/?key=${API_KEY}&${searchParams}`;
  const response = await fetch(url);
  return await response.json();
};

const service = {
  fetchPhotos,
};

export default service;
