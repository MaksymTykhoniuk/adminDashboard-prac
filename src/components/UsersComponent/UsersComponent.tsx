import { GridColDef } from '@mui/x-data-grid';
import ItemsDataGrid from '../ItemsDataGrid/ItemsDataGrid';
import {
  SectionWrapper,
  InfoWrapper,
  Title,
  AddUserBtn,
} from './UsersComponent.styled';
import { Avatar } from '../ItemsDataGrid/ItemsDataGrid.styled';
import { userRows } from '../../../data';
import { useState } from 'react';
import AddNewModal from '../AddNewModal/AddNewModal';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 85 },
  {
    field: 'img',
    headerName: 'Avatar',
    width: 100,
    filterable: false,
    disableColumnMenu: true,
    hideSortIcons: true,
    renderCell: params => {
      return (
        <Avatar src={params.row.img || '/noavatar.png'} alt="user avatar" />
      );
    },
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 220,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 110,
    editable: true,
    align: 'right',
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'string',
    width: 160,
    editable: true,
    align: 'right',
  },
  {
    field: 'verified',
    headerName: 'Verified',
    type: 'boolean',
    width: 130,
    headerAlign: 'center',
    align: 'center',
    filterable: false,
    disableColumnMenu: true,
    hideSortIcons: true,
  },
];

const UsersComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <SectionWrapper>
      <InfoWrapper>
        <Title>Users</Title>
        <AddUserBtn type="button" onClick={() => setOpen(true)}>
          Add new user
        </AddUserBtn>
      </InfoWrapper>

      <ItemsDataGrid slug="users" columns={columns} rows={userRows} />

      {open && <AddNewModal slug="user" columns={columns} setOpen={setOpen} />}
    </SectionWrapper>
  );
};

export default UsersComponent;
