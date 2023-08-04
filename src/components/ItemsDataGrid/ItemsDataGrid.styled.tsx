import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

export const DataGridWrapper = styled.div`
  &.MuiDataGrid-toolbarContainer {
    flex-direction: row-reverse;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDataTable = styled(DataGrid)`
  background-color: #fff;
  padding: 30px;

  .MuiDataGrid-toolbarContainer {
    flex-direction: row-reverse;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ViewUser = styled(Link)``;

export const ViewUserIcon = styled.img``;

export const DeleteUserBtn = styled.button`
  border: none;
  outline: none;
  background: transparent;
`;

export const DeleteUserIcon = styled.img``;
