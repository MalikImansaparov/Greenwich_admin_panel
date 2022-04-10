import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { ItemWrapper } from '../../../style';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import {
  AsyncDeleteEmployers,
  AsyncGetEmployers,
} from '../../../store/asyncAction/asyncEmployers';
import { useDispatch, useSelector } from 'react-redux';
import CircularPreloader from '../../preloader';
import SearchIcon from '@mui/icons-material/Search';
import ConfirmDialog from "../../dialog/confirmPopup";
import ActionButton from "../../ActionButton";
import {v4} from 'uuid'

const CustomButton = styled(Link)`
  height: 52px;
  width: 320px;
  background-color: #487349;
  padding: 14px 30px;
  border-radius: 20px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  text-decoration: none
  &:hover {
    background-color: #9C9C9C;
  }
`;

const actionIcon = styled('Box')`
  color: '#000000';
  margin-right: '15px';
  cursor: pointer;
  &: hover {
    color: '#487349';
  }
`;

const SearchWrapper = styled('input')`
  max-width: 380px;
  height: 48px;
  background: #e6f0e6;
  border-radius: 20px 0 0 20px;
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #487349;
  }
  :-ms-input-placeholder {
    color: #487349;
  }
`;

const TextAdjust = styled('span')`
  margin-left: 5px;
`;

const NumberAdjust = styled('span')`
  margin-left: 25px;
`;

const ButtonWrapper = styled('button')`
  width: 60px;
  height: 48px;
  background: #e6f0e6;
  border-radius: 0 20px 20px 0px;
  border: none;
  outline: none;
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #487349;
  }
  :-ms-input-placeholder {
    color: #487349;
  }
  &:hover {
    background: #e6f0e6;
  }
`;

export const EmployersTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSuperAdmin, setSuperAdmin] = useState(null);
  const employersData = useSelector((state) => state.employers.user || []);
  const isFetching = useSelector((state) => state.employers.loading);
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(employersData);
  const [name, setName] = useState(localStorage.getItem('firstName'));
  const [surename, setSurename] = useState(localStorage.getItem('lastName'));
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  useEffect(() => {
      dispatch(AsyncGetEmployers());
      if (localStorage.getItem('is_superuser') === 'true') {
          setSuperAdmin('суперадмин');
      }
    if (name.length || surename.length === 0) {
      setName('Тимур ');
      setSurename('Одинцев');
    }
  }, []);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const filteredRows = employersData.filter((row) => {
            return (
                row.user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                row.user.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
                row.user.phone_number.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setRows(filteredRows);
    };



  useEffect(() => {
      const updateEmployers = () => {
          setRows(employersData);
      }
    updateEmployers()
  }, [employersData]);

  const rowData = rows.map((employer) => {
    return {
        _id: v4(),
      id: employer?.id,
      name: !employer?.user.first_name
        ? 'Тимур Одинцев'
        : employer?.user.first_name,
      lastName: employer?.user.last_name,
      allowance: employer?.courier_allowance,
      number: employer?.user.phone_number,
      role: employer?.user.role,
      salary: employer?.salary,
    };
  });

  const handleDelete = (id) => {
          setConfirmDialog({
              ...confirmDialog,
              isOpen: false
          })
      dispatch(AsyncDeleteEmployers(id));
  };

  const handleClick = (id) => {
    navigate(`${id}`);
  };

  const roleColors = {
    админ: '#9A77D2',
    флорист: '#8EC885',
    курьер: '#D67DA7',
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      renderCell: (params) => {
        return <TextAdjust>{params.row.id}</TextAdjust>;
      },
    },
    {
      field: 'user',
      headerName: 'ФИО',
      width: 270,
      renderCell: (params) => {
        return (
          <div sx={{ display: 'flex' }}>
            <TextAdjust>{params.row.name}</TextAdjust>
            <TextAdjust> {params.row.lastName}</TextAdjust>
          </div>
        );
      },
    },
    {
      field: 'number',
      headerName: 'Номер телефона',
      width: 180,
      renderCell: (params) => {
        return <TextAdjust>{params.row.number}</TextAdjust>;
      },
    },
    {
      field: 'role',
      headerName: 'Роль',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Box
              sx={{
                fontFamily: 'Source Sans Pro',
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '15px',
                width: '121px',
                height: '34px',
                color: '#ffffff',
                borderRadius: '20px',
                padding: '8px 12px',
                cursor: 'pointer',
                background: roleColors[params.row.role.toLowerCase()],
              }}
            >
              {params.row.role}
            </Box>
          </>
        );
      },
    },
    {
      field: 'salary',
      headerName: 'Зарплата',
      width: 130,
      renderCell: (params) => {
        return <NumberAdjust>{params.row.salary}</NumberAdjust>;
      },
    },
    {
      field: 'allowance',
      headerName: 'Надбавка',
      width: 130,
      renderCell: (params) => {
        return <NumberAdjust>{params.row.allowance}</NumberAdjust>;
      },
    },
    {
      field: 'action',
      headerName: '',
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {' '}
            {isSuperAdmin && (
              <TextAdjust>
                <EditIcon
                  sx={{ cursor: 'pointer', mr: '15px' }}
                  onClick={() => handleClick(params.row.id)}
                />
                <ActionButton
                  onClick={() => {
                    setConfirmDialog({
                        isOpen: true,
                        title: 'Вы действительно хотите удалить данного сотрудника?',
                      onConfirm: () => { handleDelete(params.row.id) }
                    })
                  }}>
                  <DeleteOutlineIcon sx={{ cursor: 'pointer', fontSize: '28px' }}/>
                </ActionButton>
              </TextAdjust>
            )}
          </>
        );
      },
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: '40px',
          mr: '15px',
        }}
      >
          <Box sx={{ display: 'flex' }}>
              <SearchWrapper
                  value={searchText}
                  name="search"
                  type="string"
                  placeholder="Поиск"
                  onChange={(e) => requestSearch(e.target.value)}
              />
              <ButtonWrapper>
                  <SearchIcon />
              </ButtonWrapper>
          </Box>
        <Box sx={{ display: 'flex', color: '#487349', cursor: 'pointer' }}>
          <Typography
            sx={{
              width: '200px',
              textAlign: 'center',
              fontSize: 22,
              fontWeight: 600,
              mt: '8px',
              mr: '5px',
            }}
          >
            <span>{name}</span>
            <span>{surename}</span>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          mb: '24px',
          mr: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          sx={{
            color: 'black',
            fontSize: '30px',
            fontWeight: 600,
          }}
        >
          Сотрудники
        </Typography>
        {isSuperAdmin && (
          <CustomButton to="add" sx={{ textDecoration: 'none' }}>
            Добавить сотрудника
          </CustomButton>
        )}
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <ItemWrapper>
            {isFetching ? (
              <CircularPreloader />
            ) : (
              <DataGrid
                  getRowId={(r) => r._id}
                rows={rowData}
                columns={columns}
                pageSize={8}
                // checkboxSelection
                rowsPerPageOptions={[8]}
                disableSelectionOnClick
                sx={{ borderRadius: '20px' }}
              />
            )}
          </ItemWrapper>
        </Grid>
      </Grid>
        <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
        />
    </Box>
  );
};;




