import { useParams } from "react-router-dom";
import { PagesHeader } from "../components/PagesHeader/PagesHeader";

export const Product = () => {
	const { id } = useParams()
	return (
		<>
			<PagesHeader
				title={id}
				preTitle="FRESH AND ORGANIC" />
		</>
	)
};