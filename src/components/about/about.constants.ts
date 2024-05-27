import Card1 from "../../../public/about/card-1.png";
import Card2 from "../../../public/about/card-2.png";
import Card3 from "../../../public/about/card-3.png";
import Card4 from "../../../public/about/card-4.png";
import Card5 from "../../../public/about/card-5.png";
import Card6 from "../../../public/about/card-6.png";
import Card7 from "../../../public/about/card-7.png";
import Card8 from "../../../public/about/card-8.png";

import css from "./about.module.css";

export const aboutCards = [
	{
		src: Card1,
		content:
			"ЭКО-ДВ-ПРОЕКТ, ведущая компания в экологическом проектировании, 15 лет ориентируется на инновации и устойчивое развитие, используя современные технологии и концепции.",
	},
	{
		src: Card3,
		className: css.about__grid_long,
	},
	{
		src: Card2,
	},

	{
		src: Card4,
	},
	{
		src: Card5,
		content:
			"Мы гордимся своей репутацией, основанной на ответственности и опыте. Над проектами ежедневно трудится штат сотрудников, в котором соединились опытные профессионалы  и молодые специалисты.",
	},
	{
		src: Card6,
		className: css.about__grid_wide,
	},
	{
		src: Card7,
	},
	{
		src: Card8,
		content:
			"Наши специалисты  имеют регистрацию в национальном реестре специалистов НОПРИЗ и закреплены за нашей организацией вторым уровнем ответственности в ассоциации СРО «ОПОРА» и СРО «АИИС».",
	},
];
