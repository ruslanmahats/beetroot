import { useParams } from "react-router-dom";
import { PagesHeader } from "../components/PagesHeader/PagesHeader";
import { useEffect, useState } from "react";
import { ProductSection } from "../components/ProductSection/ProductSection";
import { Request } from "../utils/Request";

export const Product = () => {
	const { id } = useParams()
	const [product, setProduct] = useState({})



	useEffect(() => {
		Request.get('/beetroot/mock/products.json').then(data => setProduct(data.find(item => {
			return +item.id === +id
		})));
	}, [id]);


	return (
		<>
			< PagesHeader
				title={product.title}
				preTitle="FRESH AND ORGANIC" />
			<ProductSection {...product} />
		</>
	)
};