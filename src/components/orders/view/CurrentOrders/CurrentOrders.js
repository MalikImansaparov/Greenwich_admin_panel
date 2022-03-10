import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {useDispatch, useSelector} from "react-redux";
import {AsyncOrders} from "../../../../store/asyncAction/asyncOrders";
import axiosInstance from "../../../../api/utils/axiosInstance";
import CircularPreloader from "../../../preloader";
import {ItemWrapper} from "../../../../style";

export const CurrentOrders = () => {
    const [rowData, setRowData] = useState([]);
    const isFetching = useSelector((state) => state.orders.loading)
    const dispatch = useDispatch()

   const rowDatas = rowData?.map( order => {
       return {
           id: order?.id,
           user: order?.first_name,
           total: order?.total_price,
           number: order?.phone_number,
           address: order?.address,
           courier: order?.courier.user.first_name,
           phone: order?.courier.user.phone_number,
           status: order?.courier_status,
       }
   })

    useEffect(() => {
        axiosInstance.get("orders/order")
            .then((response) => {
            console.log(response.data.client);
            setRowData(response.data);
        });
    }, []);

    const columns = [
        {
            field: 'user',
            headerName: 'Получатель',
            width: 140,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.user}
                    </div>
                );
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
                return <Box sx={{
                    borderRadius: '12px',
                    padding: '5px 10px',
                    background: '#C1E7BE;',
                    cursor: 'pointer',
                }}>
                    {params.row.status}</Box>;
            },
        },
    ];

    useEffect(() => {
        dispatch(AsyncOrders())
    },[])

    return (
        <Grid container >
            <Grid item xs={12} >
                <ItemWrapper>
                 {isFetching ? <CircularPreloader/> :
                    <DataGrid
                        rows={rowDatas}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[8]}
                        disableSelectionOnClick
                        sx={{borderRadius:'20px'}}
                    /> }
                </ItemWrapper>
            </Grid>
        </Grid>
    );
}
