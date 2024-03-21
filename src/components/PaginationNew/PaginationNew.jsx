import './PaginationNew.scss';

export const PaginationNew = ({ itemsPerPage, length, currentPage, setCurrentPage, cssClass }) => {
	const totalPages = Math.ceil(length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		const elY = document.querySelector(cssClass).getBoundingClientRect().top + window.pageYOffset - 110;
		pageNumber < 1
			? setCurrentPage(1)
			: pageNumber > totalPages
			? setCurrentPage(totalPages)
			: setCurrentPage(pageNumber);
		window.scrollTo(0, elY);
	};

	return (
		<div className='pagination'>
			<button
				className={currentPage === 1 ? 'pagination__btn pagination__btn--active' : 'pagination__btn'}
				onClick={() => handlePageChange(currentPage === totalPages ? currentPage - 2 : currentPage - 1)}>
				{currentPage > 1 && currentPage < totalPages
					? currentPage - 1
					: currentPage === totalPages
					? currentPage - 2
					: currentPage}
			</button>

			<button
				className={
					currentPage > 1 && currentPage < totalPages
						? 'pagination__btn pagination__btn--active'
						: 'pagination__btn'
				}
				onClick={() => handlePageChange(currentPage === 1 ? currentPage + 1 : currentPage - 1)}>
				{currentPage > 1 && currentPage < totalPages
					? currentPage
					: currentPage === 1
					? currentPage + 1
					: currentPage - 1}
			</button>

			<button
				className={currentPage === totalPages ? 'pagination__btn pagination__btn--active' : 'pagination__btn'}
				onClick={() => handlePageChange(currentPage === 1 ? currentPage + 2 : currentPage + 1)}>
				{currentPage > 1 && currentPage < totalPages
					? currentPage + 1
					: currentPage === 1
					? currentPage + 2
					: currentPage}
			</button>
		</div>
	);
};
