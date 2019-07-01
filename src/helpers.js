
/**
 * This method gives a random number for api call 
 * @param {max page number} max 
 */
export const randomPage = (max = 20) => {
  return Math.floor(Math.random() * max) + 1
}

/**
 * This method creates fake image 
 * 
 * @param {fake image width} width 
 * @param {fake image height} height 
 */
export const getFakeImage = (width = 200, height = 200) => {
  return "https://fakeimg.pl/" + width + "x" + height + "/?text=Photo&font=lobster"
}