import React from "react";

export const useData = () => {
	const data = [
		{
			title: "Мухаммед Кыргыз",
			type: "stories",
			category: "domestic",
		},
		{
			title: "Джамиля",
			type: "classic",
			category: "domestic",
		},

		{
			title: "Жестокий век",
			type: "stories",
			category: "foreign",
		},
		{
			title: "Шерлок Холмс",
			type: "classic",
			category: "foreign",
		},
		{
			title: "Хоббит",
			type: "fantasy",
			category: "foreign",
		} 
	];
	return { data };
};
