import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import "./Contacts.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Map } from "../../components/Map/Map";
import { ContactSection } from "./ContactSection/ContactSection";
export const Contacts = () => {
	return <>
		<div className="page-contacts">
			<PagesHeader
				title="Contact Us"
				preTitle="GET 24/7 SUPPORT" />
			<section className="page-contacts__contact-section">
				<div className="wrapper"><ContactSection /></div>
			</section>
			<h2 className="page-contacts__location-title"><span className="page-contacts__location-title-icon"><FontAwesomeIcon icon={faLocationDot} /></span><span className="page-contacts__location-title-text">Find Our Location</span></h2>
			<section className="page-contacts__location-map">
				<Map />
			</section>
		</div>
	</>
};