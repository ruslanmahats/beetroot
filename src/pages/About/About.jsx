import { SwiperComm } from "../../components/SwiperComm/SwiperComm";
import { Brands } from "../../components/Brands/Brands";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import { SectionCards } from "../../components/SectionCards/SectionCards";
import { Team } from "../../components/Team/Team";
import "./About.scss";
import { ShopBanner } from "../../components/ShopBanner/ShopBanner";
import { WhyWe } from "../../components/WhyWe/WhyWe";

export const About = () => {
	return (
		<>
			<div className="page-about">
				<PagesHeader
					title="About Us"
					preTitle="WE SALE FRESH FRUITS" />
				<WhyWe />
				<ShopBanner />
				<SectionCards
					titleCol1='Our'
					titleCol2='Team'
					text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.' component={<Team />} />
				<SwiperComm />
				<Brands />
			</div>
		</>
	)
};