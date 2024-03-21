import { Advantages } from '../components/Advantages/Advantages';
import { Brands } from '../components/Brands/Brands';
import { Deals } from '../components/Deals/Deals';
import { HomeBlogSection } from '../components/HomeBlogSection/HomeBlogSection';
import { HomeWeAre } from '../components/HomeWeAre/HomeWeAre';
import { ProductCards } from '../components/SectionCards/ProductCards/ProductCards';
import { SectionCards } from '../components/SectionCards/SectionCards';
import { ShopBanner } from '../components/ShopBanner/ShopBanner';
import { SwiperComm } from '../components/SwiperComm/SwiperComm';
import { SwiperHero } from '../components/SwiperHero/SwiperHero';

export const Home = ({ products }) => {
	return (
		<>
			<SwiperHero />
			<Advantages />
			<SectionCards
				titleCol1='Our'
				titleCol2='Products'
				text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.'
				component={<ProductCards products={products} />}
			/>
			<Deals />
			<SwiperComm />
			<HomeWeAre />
			<ShopBanner />
			<SectionCards
				titleCol1='Our'
				titleCol2='Blog'
				text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.'
				component={<HomeBlogSection />}
			/>
			<Brands />
		</>
	);
};
