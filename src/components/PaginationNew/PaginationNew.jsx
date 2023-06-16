import './PaginationNew.scss';

export const PaginationNew = ({ itemsPerPage, data, currentPage, setCurrentPage }) => {


	const totalPages = Math.ceil(data.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {

		setCurrentPage(pageNumber);
	};

	return (
		<div className='pagination'>
			<button className={currentPage === 1 ? 'pagination__btn pagination__btn--disable' : 'pagination__btn'}
				disabled={currentPage === 1}
				onClick={() => handlePageChange(currentPage - 1)}
			>
				{currentPage - 1}
			</button>

			<button className='pagination__btn pagination__btn--active'>{currentPage}</button>

			<button className={currentPage === totalPages ? 'pagination__btn pagination__btn--disable' : 'pagination__btn'}
				disabled={currentPage === totalPages}
				onClick={() => handlePageChange(currentPage + 1)}
			>
				{currentPage + 1}
			</button>

			{/* <span>Total Pages: {totalPages}</span> */}
		</div>
	);
};