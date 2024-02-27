import { useState } from 'react';

function usePagination(itemsPerPageInitial: number) {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageInitial);
	const [data, setData] = useState<Array<any>>();

	const maxPage = Math.ceil((data?.length || 0) / itemsPerPage);

	const currentData = () => {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data?.slice(begin, end) || [];
	};

	const goToPage = (page: number) => {
		const pageNumber = Math.max(1, page);
		setCurrentPage(() => Math.min(pageNumber, maxPage));
	};

	return {
		setData,
		currentData,
		goToPage,
		currentPage,
		maxPage,
		total: data?.length || 0,
		setItemsPerPage
	};
}

export default usePagination;
