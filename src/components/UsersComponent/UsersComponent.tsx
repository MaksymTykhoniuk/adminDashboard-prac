import { GridColDef } from '@mui/x-data-grid';
import UsersDataGrid from '../UsersDataGrid/UsersDataGrid';
import {
  SectionWrapper,
  InfoWrapper,
  Title,
  AddUserBtn,
} from './UsersComponent.styled';
import { Avatar } from '../UsersDataGrid/UsersDataGrid.styled';
import { userRows } from '../../../data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 85 },
  {
    field: 'avatar',
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
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    type: 'number',
    width: 160,
    editable: true,
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
  return (
    <SectionWrapper>
      <InfoWrapper>
        <Title>Users</Title>
        <AddUserBtn type="button">Add new user</AddUserBtn>
      </InfoWrapper>

      <UsersDataGrid slug="users" columns={columns} rows={userRows} />
    </SectionWrapper>
  );
};

export default UsersComponent;
