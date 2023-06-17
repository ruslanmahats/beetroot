import { useEffect, useRef, useState } from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import "./Shop.scss";
// import Pagination from "../../components/Pagination/Pagination";
import { PaginationNew } from "../../components/PaginationNew/PaginationNew";
// import { Request } from "../../utils/Request";
import { CardProduct } from "../../components/SectionCards/ProductCards/CardProduct/CardProduct";


export const Shop = ({ products }) => {

	const [productList, setProductList] = useState([])
	const [filterIsOpen, setFilterIsOpen] = useState(false)
	const [filterValue, setFilterValue] = useState(0)
	const sortingRef = useRef(null)
	const [currentPage, setCurrentPage] = useState(1);


	// useEffect(() => {
	// 	Request.get(`https://648d6dee2de8d0ea11e7d552.mockapi.io/products`).then(data => setProductList(data));
	// }, [currentPage]);


	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (sortingRef.current && !sortingRef.current.contains(event.target)) {
				setFilterIsOpen(false);
			}
		};
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);




	useEffect(() => {
		setProductList([...products])
	}, [products]);

	const toggleSortMenu = () => {
		filterIsOpen ? setFilterIsOpen(false) : setFilterIsOpen(true);
	}

	const onClickFilterItem = (e) => {
		setFilterIsOpen(false);
		toggleSortMenu();
		if (e.target.innerText === "Price: Lowest-first") {
			setFilterValue(1)
			setProductList(productList.sort((x, y) => x.price - y.price))
			setCurrentPage(1)
		} else if (e.target.innerText === "Price: Highest-first") {
			setFilterValue(2)
			setProductList(productList.sort((x, y) => y.price - x.price))
			setCurrentPage(1)
		} else {
			setFilterValue(0)
			setProductList([...products])
			setCurrentPage(1)
		}
	}


	const itemsPerPage = 8;
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentPageItems = productList.slice(startIndex, endIndex);


	return (
		<>
			<PagesHeader
				title="Shop"
				preTitle="FRESH AND ORGANIC" />
			<div className="wrapper">
				<div className="shop">
					<div className="shop__products">
						<div className="shop__products-panel">
							<div className="shop__quantity">Total: <span>{productList.length}</span> products</div>
							<div className="shop__sorting-container" ref={sortingRef}>
								<div className={filterIsOpen ? "shop__sorting-btn shop__sorting-btn--active" : "shop__sorting-btn"} onClick={toggleSortMenu}>{
									filterValue === 0
										? "Sorting"
										: filterValue === 1
											? "Price: Lowest-first"
											: "Price: Highest-first"
								}</div>
								<ul className="shop__sorting">
									<li className="shop__sorting-item" onClick={onClickFilterItem} >Default</li>
									<li className="shop__sorting-item" onClick={onClickFilterItem} >Price: Lowest-first</li>
									<li className="shop__sorting-item" onClick={onClickFilterItem}>Price: Highest-first</li>
								</ul>
							</div>
						</div>

						<div className="shop__products-list">
							{currentPageItems.map(item => {
								return <CardProduct key={item.id} {...item} />
							})}
						</div>



						{/* <Pagination itemsPerPage={8} data={productList} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
						<PaginationNew itemsPerPage={8} length={productList.length} currentPage={currentPage} setCurrentPage={setCurrentPage} cssClass='.shop__products' />

					</div>
					<div className="pagination"></div>
				</div>
			</div>

		</>
	)




	// const [currentPage, setCurrentPage] = useState([]);
	// const [products, setProducts] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const apiUrl = 'https://api.predic8.de/shop/products/';

	// const fetchData = async () => {
	// 	try {
	// 		const response = await fetch(currentPage === 1 ? `https://api.predic8.de/shop/products/` : `https://api.predic8.de/shop/products/?page=${currentPage}&limit=10`);
	// 		const data = await response.json();
	// 		setProducts(data);
	// 		setLoading(false);
	// 	} catch (error) {
	// 		console.log('Error:', error);
	// 		setLoading(false);
	// 	}
	// };

	// useEffect(() => {
	// 	fetchData();
	// }, [currentPage]);

	// return (
	// 	<div>
	// 		{loading ? (
	// 			<p>Loading...</p>
	// 		) : (
	// 			<>
	// 				<ul>
	// 					{products.products.map((product) => (
	// 						<div key={+(product.product_url.substr(15, 15))}>
	// 							<img src={`https://api.predic8.de${product.product_url}/photo`} alt={product.name} />
	// 							<div>{`${product.name} ${+(product.product_url.substr(15, 15))}`}</div>
	// 						</div>
	// 					))}
	// 				</ul>
	// 				<PaginationNew meta={products.meta} currentPage={currentPage} setCurrentPage={setCurrentPage} />

	// 			</>)}
	// 	</div>
	// );




};