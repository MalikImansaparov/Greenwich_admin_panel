import { DataGrid } from '@mui/x-data-grid';
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Item} from "../../../../style";
import {useDispatch} from "react-redux";
import axiosInstance from "../../../../api/utils/axiosInstance";

export const CompletedOrders = () => {
    const [rowData, setRowData] = useState([]);
    const dispatch = useDispatch()

    const rowDatas = rowData?.map( order => {
        return {
            id: order?.id,
            user: order?.first_name,
            total: order?.total_price,
            number: order?.phone_number,
            address: order?.address,
            data: order?.data,
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
                return <div>{params.row.data}</div>;
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

    return (
        <Grid container>
            <Grid item xs={12}>
                <Item sx={{
                    height: '630px',
                    width: '100%',
                    borderRadius: '20px',
                    mt: '38px'
                }}>
                    <DataGrid
                        className="grid"
                        rows={rowData}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[2]}
                        disableSelectionOnClick
                        sx={{borderRadius:'20px'}}
                    />
                </Item>
            </Grid>
        </Grid>
    );
}

