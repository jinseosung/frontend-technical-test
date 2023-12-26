export const getFormattedTime = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const getFormattedDate = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
