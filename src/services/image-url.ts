const getCroppedImageUrl = (url: string) => {
  let tokens = url.split("media/");

  return `${tokens[0]}media/crop/600/400/${tokens[1]}`;
};

export default getCroppedImageUrl;
