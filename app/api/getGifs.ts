const API = "api.giphy.com/v1/gifs/";
const API_KEY = "A0M0tl8SSnoKYMNxRDX4mUg13CdDfwS1";

export const getGifs = async (category: string) => {
  const resp = await fetch(`https://${API}search?q=${encodeURI(category)}&limit=60&api_key=${API_KEY}`);
  if (!resp.ok) throw new Error(`resp error: ${resp.status}`);
  const { data }:GiphyApiResponse = await resp.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.fixed_width_small.url,
    };
  });

  return gifs;
}
