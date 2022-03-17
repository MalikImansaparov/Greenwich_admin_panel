import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { AsyncOrders } from '../../../../store/asyncAction/asyncOrders';
import axiosInstance from '../../../../api/utils/axiosInstance';
import CircularPreloader from '../../../preloader';
import { ItemWrapper } from '../../../../style';
import avatar from '../../../../assets/img/avater.svg';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

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

export const CurrentOrders = () => {
  //   const [rowData, setRowData] = useState([]);
  const isFetching = useSelector((state) => state.orders.loading);
  const isOrders = useSelector((state) => state.orders.order || []);
  const dispatch = useDispatch();
  //   const [searchText, setSearchText] = React.useState('');
  //   const [rows, setRows] = React.useState(rowData);

  //   const requestSearch = (searchValue) => {
  //     setSearchText(searchValue);

  //     const filteredRows = rowData.filter((row) => {
  //       return (
  //         row.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
  //         row.phone_number.toLowerCase().includes(searchText.toLowerCase())
  //       );
  //     });
  //     setRows(filteredRows);
  //   };

  //   useEffect(() => {
  //     setRows(rowData);
  //   }, [rowData]);

  const rowDatas = isOrders.map((order) => {
    return {
      id: order?.id,
      user: order?.first_name,
      total: order?.total_price,
      number: order?.phone_number,
      address: order?.address,
      courier: order?.courier.user.first_name,
      phone: order?.courier.user.phone_number,
      status: order?.courier_status,
    };
  });

  useEffect(() => {
    dispatch(AsyncOrders());
  }, []);

  const columns = [
    {
      field: 'user',
      headerName: 'Получатель',
      width: 140,
      renderCell: (params) => {
        return <div>{params.row.user}</div>;
      },
    },
    {
      field: 'number',
      headerName: 'Номер получателя',
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.number}</div>;
      },
    },
    {
      field: 'total',
      headerName: 'Сумма',
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.total}</div>;
      },
    },
    {
      field: 'address',
      headerName: 'Адрес',
      width: 180,
      renderCell: (params) => {
        return <div>{params.row.address}</div>;
      },
    },
    {
      field: 'courier',
      headerName: 'Курьер',
      width: 140,
      renderCell: (params) => {
        return <div>{params.row.courier}</div>;
      },
    },
    {
      field: 'phone',
      headerName: 'Номер курьера',
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.phone}</div>;
      },
    },
    {
      field: 'status',
      headerName: 'Действие',
      width: 170,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              borderRadius: '12px',
              padding: '5px 10px',
              background: '#C1E7BE;',
              cursor: 'pointer',
            }}
          >
            {params.row.status}
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(AsyncOrders());
  }, []);

  return (
    <Grid container>
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
            // value={searchText}
            name="search"
            type="string"
            placeholder="Поиск"
            // onChange={(e) => requestSearch(e.target.value)}
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
            {' '}
            Тимур Одинцев
            {/*<span>{firstName}</span>*/}
            {/*   <span>{lastName}</span>*/}
          </Typography>
          <img src={avatar} alt="avatar" sx={{ mt: '20px' }} />
        </Box>
      </Box>
      <Grid item xs={12}>
        <ItemWrapper>
          {isFetching ? (
            <CircularPreloader />
          ) : (
            <DataGrid
              rows={rowDatas}
              columns={columns}
              pageSize={8}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              sx={{ borderRadius: '20px' }}
            />
          )}
        </ItemWrapper>
      </Grid>
    </Grid>
  );
};
