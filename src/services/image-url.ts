const getCroppedImageUrl = (url: string) => {
  if (!url) return null;
  let tokens = url.split("media/");

  return `${tokens[0]}media/crop/600/400/${tokens[1]}`;
};

export default getCroppedImageUrl;
