import { Advantages } from "../components/Advantages/Advantages";
import { SectionCards } from "../components/SectionCards/SectionCards";
import { SwiperHero } from "../components/SwiperHero/SwiperHero";

export const Home = ({ products }) => {
	return (
		<>
			<SwiperHero />
			<Advantages />
			<SectionCards products={products} />
		</>
	)
};