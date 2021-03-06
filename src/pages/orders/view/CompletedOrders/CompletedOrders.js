import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import { ItemWrapper} from "../../../../style";
import { useDispatch, useSelector } from 'react-redux';
import CircularPreloader from '../../../preloader';
import { AsyncOrders } from '../../../../store/asyncAction/asyncOrders';

export const CompletedOrders = () => {
  const dispatch = useDispatch();
  const isOrders = useSelector((state) => state.orders.order);
  const isFetching = useSelector((state) => state.orders.loading);

  const rowDatas = isOrders?.map((order) => {
    return {
      id: order?.id,
      user: order?.first_name,
      total: order?.total_price,
      number: order?.phone_number,
      address: order?.address,
      data: order?.date_created,
      active: order?.is_active,
    };
  });

  const showDatas = rowDatas?.map((item) => {
    return item.data.split('T').slice(0, 1).join();
  });
  console.log(showDatas);

  const columns = [
    {
      field: 'id',
      headerName: 'ID заказа',
      width: 100,
      renderCell: (params) => {
        return <div>{params.row.id}</div>;
      },
    },
    {
      field: 'user',
      headerName: 'Получатель',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.user}</div>;
      },
    },
    {
      field: 'number',
      headerName: 'Номер получателя',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.number}</div>;
      },
    },
    {
      field: 'data',
      headerName: 'Дата',
      width: 200,
      renderCell: (params) => {
        return <div>{showDatas}</div>;
      },
    },
    {
      field: 'address',
      headerName: 'Адрес',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.address}</div>;
      },
    },
    {
      field: 'total',
      headerName: 'Сумма',
      width: 200,
      renderCell: (params) => {
        return <div>{params.row.total}</div>;
      },
    },
  ];

  useEffect(() => {
    dispatch(AsyncOrders());
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <ItemWrapper>
          {isFetching ? (
            <CircularPreloader />
          ) : (
            <DataGrid
              rows={rowDatas}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              sx={{ borderRadius: '20px' }}
            />
          )}
        </ItemWrapper>
      </Grid>
    </Grid>
  );
};

