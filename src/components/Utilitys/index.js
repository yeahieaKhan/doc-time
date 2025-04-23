import { toast } from "react-toastify";

const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

const addFavorite = (doctor) => {
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === doctor.id);
  if (isExist) {
    toast.error(`Appoinment already booked ${doctor.name}`);
    return false;
  }
  favorites.push(doctor);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  return true;
};

const removeFavorite = (id) => {
  const favorites = getFavorites();
  const remaingFavorites = favorites.filter((doctor) => doctor.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaingFavorites));
};

export { addFavorite, getFavorites, removeFavorite };
