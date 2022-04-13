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
import SearchIcon from '@mui/icons-material/Search';
import {ButtonWrapper, SearchWrapper} from "../../../employers/EmployersTable/style";

export const CurrentOrders = () => {
  const isFetching = useSelector((state) => state.orders.loading);
  const isOrders = useSelector((state) => state.orders.order || []);
  const dispatch = useDispatch();

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
            name="search"
            type="string"
            placeholder="Поиск"
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
            Тимур Одинцев
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
