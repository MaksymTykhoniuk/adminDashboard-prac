import { GridColDef, GridToolbar } from '@mui/x-data-grid';
import {
  DataGridWrapper,
  UserDataTable,
  ActionWrapper,
  ViewUser,
  ViewUserIcon,
  DeleteUserBtn,
  DeleteUserIcon,
} from './ItemsDataGrid.styled';

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const ItemsDataGrid = (props: Props) => {
  const { columns, rows, slug } = props;

  const handleDeleteUser = (id: number) => {
    // deleting uder
    console.log(id + 'user has been delted');
  };

  const actionColumn: GridColDef = {
    field: 'action',
    headerName: 'Action',
    headerAlign: 'center',
    align: 'center',
    filterable: false,
    disableColumnMenu: true,
    hideSortIcons: true,
    width: 200,
    renderCell: params => {
      return (
        <ActionWrapper>
          <ViewUser to={`/${slug}/${params.row.id}`}>
            <ViewUserIcon src="view.svg" alt="open user" />
          </ViewUser>
          <DeleteUserBtn onClick={() => handleDeleteUser(params.row.id)}>
            <DeleteUserIcon src="delete.svg" alt="delete user" />
          </DeleteUserBtn>
        </ActionWrapper>
      );
    },
  };

  return (
    <DataGridWrapper>
      <UserDataTable
        columnHeaderHeight={65}
        rowHeight={55}
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </DataGridWrapper>
  );
};

export default ItemsDataGrid;
