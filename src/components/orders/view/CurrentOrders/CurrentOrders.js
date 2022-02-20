import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { userRows } from './orderData'
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Item} from "../../../../style";
import {useDispatch, useSelector} from "react-redux";
import {AsyncOrders} from "../../../../store/asyncAction/asyncOrders";
import {orderReducer} from "../../../../store/reducers/orderReducer";

export const CurrentOrders = () => {
    const [data, setData] = useState(userRows);
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        // {
        //     field: 'id',
        //     headerName: 'ID',
        //     width: 100,
        //     renderCell: (params) => {
        //         return <div className="user-l-id">{params.row.id}</div>;
        //     },
        // },
        {
            field: 'user',
            headerName: 'Получатель',

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

            renderCell: (params) => {
                return <div>{params.row.phone}</div>;
            },
        },
        {
            field: 'sum',
            headerName: 'Сумма',

            renderCell: (params) => {
                return <div>{params.row.sum}</div>;
            },
        },
        {
            field: 'address',
            headerName: 'Email',

            renderCell: (params) => {
                return <div>{params.row.address}</div>;
            },
        },
        {
            field: 'courier',
            headerName: 'Курьер',

            renderCell: (params) => {
                return <div>{params.row.courier}</div>;
            },
        },
        {
            field: 'phoneCourier',
            headerName: 'Номер курьера',

            renderCell: (params) => {
                return <div>{params.row.phoneCourier}</div>;
            },
        },
        {
            field: 'status',
            headerName: 'Действие',

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

     // const tableData  = useSelector(state => state.orders.order)
    // const ordersSelector = ;
    const tableData  = useSelector(state => state.orders.order)

    return (
        <Grid container >
            <Grid item xs={12}>
                <Item sx={{
                    height: '658px',
                    width: '100%',
                    borderRadius: '20px',
                    mt: '48px'
                }}>
                    <DataGrid
                        className="grid"
                        rows={tableData}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[2]}
                        disableSelectionOnClick
                    />
                </Item>
            </Grid>
        </Grid>
    );
}

//
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
