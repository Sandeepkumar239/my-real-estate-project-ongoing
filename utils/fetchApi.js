import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': '4ff28a8a4amshe9ab73d98aec17dp1fb1d6jsn0dd485f016ed',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}


// headers: {
//   'X-RapidAPI-Key': '4ff28a8a4amshe9ab73d98aec17dp1fb1d6jsn0dd485f016ed',
//   'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }