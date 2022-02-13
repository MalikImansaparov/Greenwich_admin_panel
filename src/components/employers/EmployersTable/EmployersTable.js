import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { userRows } from './orderData'
import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import {Item} from "../../../style";

export const EmployersTable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100,
            renderCell: (params) => {
                return <div className="user-l-id">{params.row.id}</div>;
            },
        },
        {
            field: 'user',
            headerName: 'ФИО',
            width: 180,
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
            headerName: 'Номер телефона',
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.phone}</div>;
            },
        },
        {
            field: 'email',
            headerName: 'Электронная почта',
            width: 100,
            renderCell: (params) => {
                return <div>{params.row.sum}</div>;
            },
        },
        {
            field: 'address',
            headerName: 'Email',
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.address}</div>;
            },
        },
        {
            field: 'Role',
            headerName: 'Роль',
            width: 100,
            renderCell: (params) => {
                return <Box sx={{
                    borderRadius: '12px',
                    padding: '5px 10px',
                    background: '#C1E7BE;',
                    cursor: 'pointer',
                }}>
                    {params.row.role}</Box>;
            },
        },
        {
            field: 'salary',
            headerName: 'Зарплата',
            width: 170,
            renderCell: (params) => {
                return <div>{params.row.phoneCourier}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Действие',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        elfkbnm
                        {/*<Link to={'/user/' + params.row.id}>*/}
                        {/*    <button className="user-l-edit">Edit</button>*/}
                        {/*</Link>*/}
                        {/*<DeleteOutline*/}
                        {/*    className="user-l-delete"*/}
                        {/*    onClick={() => handleDelete(params.row.id)}*/}
                        {/*/>*/}
                    </>
                );
            }
        }
    ];
    return (
        <Grid container >
            <Grid item xs={12}>
                <Item sx={{
                    height: '658px',
                    width: '1171px',
                    borderRadius: '20px',
                    mt: '48px'
                }}>
                    <DataGrid
                        className="grid"
                        rows={data}
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




