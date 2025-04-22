const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

const addFavorite = (doctor) => {
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === doctor.id);
  if (isExist) return alert("Doctor Already added");
  favorites.push(doctor);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export { addFavorite, getFavorites };
