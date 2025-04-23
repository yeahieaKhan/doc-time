import { ToastContainer, toast } from "react-toastify";

const getFavorites = () => {
  const favorites = localStorage.getItem("favorites");
  if (favorites) return JSON.parse(favorites);
  return [];
};

const addFavorite = (doctor) => {
  const favorites = getFavorites();
  const isExist = favorites.find((p) => p.id === doctor.id);
  if (isExist) return toast("Doctor Already added");
  favorites.push(doctor);
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const removeFavorite = (id) => {
  const favorites = getFavorites();
  const remaingFavorites = favorites.filter((doctor) => doctor.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaingFavorites));
};

export { addFavorite, getFavorites, removeFavorite };
