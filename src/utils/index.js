export const dateFormat = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()} ${date.toLocaleDateString('fr-FR', {
    month: 'short',
  })} ${date.getFullYear()} ${date.toLocaleString('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })}`;
};
