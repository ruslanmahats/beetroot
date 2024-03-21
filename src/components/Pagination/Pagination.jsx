import './Pagination.scss';

import { CardProduct } from '../SectionCards/ProductCards/CardProduct/CardProduct';

const Pagination = ({ itemsPerPage, data, setCurrentPage, currentPage }) => {
	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const currentPageItems = data.slice(startIndex, endIndex);

	return (
		<>
			<div className='shop__products-list'>
				{currentPageItems.map((item) => {
					return <CardProduct key={item.id} {...item} />;
				})}
			</div>
			<div className='pagination'>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
					<button
						key={page}
						onClick={() => handlePageChange(page)}
						className={currentPage === page ? 'pagination__btn pagination__btn--active' : 'pagination__btn'}>
						{page}
					</button>
				))}
			</div>
		</>
	);
};

export default Pagination;
