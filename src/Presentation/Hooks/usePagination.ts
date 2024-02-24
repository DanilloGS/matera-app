import { useState } from 'react';

function usePagination(itemsPerPage: number) {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState<Array<any>>();

	const maxPage = Math.ceil((data?.length || 0) / itemsPerPage);

	function currentData() {
		const begin = (currentPage - 1) * itemsPerPage;
		const end = begin + itemsPerPage;
		return data?.slice(begin, end);
	}

	function goToPage(page: number) {
		const pageNumber = Math.max(1, page);
		setCurrentPage(() => Math.min(pageNumber, maxPage));
	}

	return { setData, currentData, goToPage, currentPage, maxPage };
}

export default usePagination;
