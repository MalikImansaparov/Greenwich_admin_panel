import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from './orderData'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import {Item} from "../../../../style";


export const CompletedOrders = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
                        {/*<img*/}
                        {/*    className="user-list-avatar"*/}
                        {/*    src={params.row.avatar}*/}
                        {/*    alt="avatar"*/}
                        {/*/>*/}
                        {params.row.user}
                    </div>
                );
            },
        },
        {
            field: 'phone',
            headerName: 'Номер получателя',
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.phone}</div>;
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
            field: 'sum',
            headerName: 'Сумма',
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.sum}</div>;
            },
        },
        // {
        //     field: 'courier',
        //     headerName: 'Курьер',
        //     width: 200,
        //     renderCell: (params) => {
        //         return <div>{params.row.email}</div>;
        //     },
        // },
        // {
        //     field: 'phoneCourier',
        //     headerName: 'Номер курьера',
        //     width: 200,
        //     renderCell: (params) => {
        //         return <div>{params.row.email}</div>;
        //     },
        // },

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
                        rows={data}
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

//{
//             field: 'action',
//             headerName: 'Action',
//             width: 150,
//             renderCell: (params) => {
//                 return (
//                     <>
//                         <Link to={'/user/' + params.row.id}>
//                             <button className="user-l-edit">Edit</button>
//                         </Link>
//                         <DeleteOutline
//                             className="user-l-delete"
//                             onClick={() => handleDelete(params.row.id)}
//                         />
//                     </>
//                 );
//             },
//         },
