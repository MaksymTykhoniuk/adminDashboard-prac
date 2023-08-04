import { useState } from 'react';
import {
  SectionWrapper,
  InfoWrapper,
  Title,
  AddUserBtn,
  ProdImg,
} from './ProductsComponent.styled';

import AddNewModal from '../AddNewModal/AddNewModal';
import ItemsDataGrid from '../ItemsDataGrid/ItemsDataGrid';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../../data';

const ProductsComponent = () => {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    {
      field: 'img',
      headerName: 'Image',
      width: 100,
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      disableColumnMenu: true,
      hideSortIcons: true,
      renderCell: params => {
        return <ProdImg src={params.row.img || '/noavatar.png'} alt="" />;
      },
    },
    {
      field: 'title',
      type: 'string',
      headerName: 'Title',
      width: 240,
    },
    {
      field: 'color',
      type: 'string',
      headerName: 'Color',
      width: 150,
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      disableColumnMenu: true,
      hideSortIcons: true,
    },
    {
      field: 'price',
      type: 'string',
      headerName: 'Price',
      width: 120,
    },
    {
      field: 'producer',
      headerName: 'Producer',
      type: 'string',
      width: 160,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
      type: 'string',
    },
    {
      field: 'inStock',
      headerName: 'In Stock',
      width: 100,
      type: 'boolean',
      headerAlign: 'center',
      align: 'center',
      filterable: false,
      disableColumnMenu: true,
      hideSortIcons: true,
    },
  ];

  return (
    <SectionWrapper>
      <InfoWrapper>
        <Title>Products</Title>
        <AddUserBtn type="button" onClick={() => setOpen(true)}>
          Add new producrs
        </AddUserBtn>
      </InfoWrapper>

      <ItemsDataGrid slug="products" columns={columns} rows={products} />

      {open && (
        <AddNewModal slug="productas" columns={columns} setOpen={setOpen} />
      )}
    </SectionWrapper>
  );
};

export default ProductsComponent;
