import { useEffect, useRef, useState } from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import "./Shop.scss";
import Pagination from "../../components/Pagination/Pagination";

export const Shop = ({ products }) => {

	const [productList, setProductList] = useState([])
	const [filterIsOpen, setFilterIsOpen] = useState(false)
	const [filterValue, setFilterValue] = useState(0)
	const sortingRef = useRef(null)
	const [currentPage, setCurrentPage] = useState(1);


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
			console.log(products)
		}
	}


	return (
		<>
			<PagesHeader
				title="Shop"
				preTitle="FRESH AND ORGANIC" />
			<div className="wrapper">
				<div className="shop">
					<div className="shop__products">
						<div className="shop__products-panel">
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

						<Pagination itemsPerPage={8} data={productList} currentPage={currentPage} setCurrentPage={setCurrentPage} />


					</div>
					<div className="pagination"></div>
				</div>
			</div>

		</>
	)
};