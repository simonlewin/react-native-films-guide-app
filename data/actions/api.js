import axios from "../axios";

import { setFilms } from "./state";

export const getFilms = () => dispatch => {
	axios.get().then(({ data }) => {
		const films = data;
		dispatch(setFilms(films));
	});
};