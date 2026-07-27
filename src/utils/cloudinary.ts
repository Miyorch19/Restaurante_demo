export const getCloudinaryUrl = (publicId: string): string => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) {
    console.warn("VITE_CLOUDINARY_CLOUD_NAME no está definido en las variables de entorno.");
    return '';
  }
  return `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${publicId}`;
};
