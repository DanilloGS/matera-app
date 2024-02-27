import React, { useEffect, useState } from 'react';
import { useProduct } from '../../../../Main/Hooks';
import {
	Button,
	CheckboxGroup,
	Image,
	Table,
	TextInput
} from '../../../Components';
import { useHeader, usePagination } from '../../../Hooks';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../../../Domain/ValueObjects';
import { Box, TableCell, TableRow, Typography } from '@mui/material';
import './ProductsList-styles.scss';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { ProductModal } from '../Components';
import { moneyMask } from '../../../Utils/mask/money';

const QUANTITY_PER_PAGE = 15;
const IMAGE_SIZE = 50;

const PRODUCT_HEADERS = [
	'Nome',
	'Preço',
	'Marca',
	'Vendidos',
	'Disponíveis',
	'Detalhes'
];

const ProductsListPage = () => {
	const navigation = useNavigate();
	const { setButtons } = useHeader();
	const [openModal, setOpenModal] = useState(false);
	const [nameFilter, setNameFilter] = useState('');

	const {
		setData,
		currentData,
		maxPage,
		goToPage,
		currentPage,
		total,
		setItemsPerPage
	} = usePagination(QUANTITY_PER_PAGE);

	const { getAllProducts, createProduct } = useProduct();

	useEffect(() => {
		(async () => {
			const apiResponse = await getAllProducts();
			if (apiResponse) setData(apiResponse);
		})();
	}, []);

	useEffect(() => {
		setButtons([
			{
				children: 'Adicionar Produto',
				onClick: () => {
					setOpenModal(true);
				}
			}
		]);
	}, []);

	const renderTableHeader = () => {
		return PRODUCT_HEADERS.map((header, index) => {
			return (
				<TableCell key={index}>
					<b>{header}</b>
				</TableCell>
			);
		});
	};

	const renderTableBody = () => {
		return currentData().map((product, index) => {
			return (
				<TableRow key={index}>
					<TableCell>
						<Box className="products-list--table-name-cell-container">
							<Image
								width={IMAGE_SIZE}
								height={IMAGE_SIZE}
								src={product.avatar}
								alt={product.name}
							/>
							<Typography variant="body1">{product.name}</Typography>
						</Box>
					</TableCell>
					<TableCell>{moneyMask(product.price)}</TableCell>
					<TableCell>{product.brand}</TableCell>
					<TableCell>{product.quantitySold}</TableCell>
					<TableCell>{product.quantityLeft}</TableCell>
					<TableCell>
						<Button
							onClick={() => {
								goToProductDetail(product);
							}}
						>
							Ver Mais
						</Button>
					</TableCell>
				</TableRow>
			);
		});
	};

	const goToProductDetail = (product: IProduct) => {
		navigation(`/products/${product.id}`, { state: { product } });
	};

	const renderIndexButtons = () => {
		const disableMinus = currentPage === 1;
		const disablePlus = currentPage === maxPage;
		return (
			<Box className="products-list--pagination-container">
				<Button
					onClick={() => goToPage(currentPage - 1)}
					variant="text"
					disabled={disableMinus}
				>
					<ChevronLeft />
				</Button>
				<Typography>
					{currentPage} / {maxPage}
				</Typography>
				<Button
					onClick={() => goToPage(currentPage + 1)}
					variant="text"
					disabled={disablePlus}
				>
					<ChevronRight />
				</Button>
			</Box>
		);
	};

	const renderFilters = () => {
		const checkBoxes = [
			{ label: 'Mostrar todos os produtos', value: 'showAll', id: 'showAll' }
		];

		const filterByName = async () => {
			if (nameFilter !== '') {
				const apiResponse = await getAllProducts();

				const filteredData = apiResponse.filter((product) => {
					return product.name.toLowerCase().includes(nameFilter.toLowerCase());
				});

				setData(filteredData);
			}
		};

		const eraseFilters = async () => {
			setNameFilter('');
			const apiResponse = await getAllProducts();
			setData(apiResponse);
		};

		return (
			<Box className="products-list--filters-container">
				<CheckboxGroup onChange={toggleQuantity} options={checkBoxes} />
				<Box className="products-list--filters-input">
					<TextInput
						label="Filtrar por nome"
						value={nameFilter}
						onChange={(e) => {
							setNameFilter(e.target.value);
						}}
					/>
					<Button onClick={filterByName}>Buscar</Button>
					<Button onClick={eraseFilters} color="error">
						Apagar
					</Button>
				</Box>
			</Box>
		);
	};

	const toggleQuantity = () => {
		const totalCurrent = currentData()?.length;
		if (totalCurrent <= QUANTITY_PER_PAGE) {
			goToPage(1);
			setItemsPerPage(total);
		} else {
			setItemsPerPage(QUANTITY_PER_PAGE);
		}
	};

	return (
		<Box className="products-list--table-container">
			{renderFilters()}
			<Table
				body={renderTableBody()}
				header={renderTableHeader()}
				footer={renderIndexButtons()}
			/>
			<ProductModal
				title="Adicionar Produto"
				open={openModal}
				onDismiss={() => setOpenModal(false)}
				onSubmit={async (e) => {
					await createProduct(e);
				}}
			/>
		</Box>
	);
};

export default ProductsListPage;
