import imagePlaceholder from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return imagePlaceholder;

  let tokens = url.split("media/");
  return `${tokens[0]}media/crop/600/400/${tokens[1]}`;
};

export default getCroppedImageUrl;
