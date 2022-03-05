import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { userRows } from './orderData'
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Item} from "../../../style";
import Typography from "@mui/material/Typography";
import { useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import axiosInstance from "../../../api/utils/axiosInstance";
import {AsyncEmployers} from "../../../store/asyncAction/asyncEmployers";
import {useDispatch, useSelector} from "react-redux";

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

export const EmployersTable = () => {
    const [data, setData] = useState(userRows);
    const navigate = useNavigate()
    const [rowData, setRowData] = useState([]);
    const [isSuperAdmin, setSuperAdmin] = useState(null);
    const employers = useSelector((state) => state.employers.user)
    const dispatch = useDispatch()
    const {title} = employers

    console.log(title)
    useEffect(() => {
        if (localStorage.getItem('role') === 'Суперадмин') {
            setSuperAdmin('суперадмин');
        }
console.log(employers);
        console.log(title)
    }, []);

    // const rowDatas = rowData?.map( order => {
    //     return {
    //         id: order?.id,
    //         user: order?.first_name,
    //         email: order?.total_price,
    //         number: order?.phone_number,
    //         role: order?.role,
    //         salary: order?.salary,
    //     }
    // })
    //
    // useEffect(() => {
    //     axiosInstance.get("employers")
    //         .then((response) => {
    //             console.log(response.data.client);
    //             setRowData(response.data);
    //         });
    // }, []);

    // const async asyncEmpoyersEdit = dispatch => {
    //      const employers = await instance.get(`employers${id}`)
    //      dispatch(getUsers(employers))
    // }
    // const onChange = () => {
    //     navigate('add', { replace: true })
    // }
    useEffect(() => {
        dispatch(AsyncEmployers())
    },[])
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            renderCell: (params) => {
                return <div>{params.row.id}</div>;
            },
        },
        {
            field: 'user',
            headerName: 'ФИО',
            width: 270,
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
            headerName: 'Номер телефона',
            width: 180,
            renderCell: (params) => {
                return <div>{params.row.number}</div>;
            },
        },
        {
            field: 'email',
            headerName: 'Электронная почта',
            width: 200,
            renderCell: (params) => {
                return <div>{params.row.email}</div>;
            },
        },
        {
            field: 'role',
            headerName: 'Роль',
            width: 150,
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
            width: 120,
            renderCell: (params) => {
                return <div>{params.row.salary}</div>;
            },
        },
        {
            field: 'action',
            headerName: 'Действие',
            width: 100,
            renderCell: (params) => {
                return (
                    <> {isSuperAdmin &&
                    <Link to={'edit/' + params.row.id}>
                        <EditIcon sx={{color: '#000000', mr: '15px'}}/>
                    </Link>
                    }
                        <DeleteOutlineIcon
                            sx={{color: '#000000',  fontSize: "30px"}}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            }
        }
    ];
    return (
        <Box>
            <Box sx={{mb: '24px', ml: '20px', display: 'flex', justifyContent: 'space-between'}}>
                <Typography
                    sx={{
                        color: 'black',
                        fontSize: '30px',
                        fontWeight: 600,
                    }}
                >
                    Сотрудники
                </Typography>
                { isSuperAdmin &&
                    <CustomButton to='add' sx={{textDecoration: 'none'}}>
                        Добавить сотрудника
                    </CustomButton>
                }
            </Box>
            <Grid container >
                <Grid item xs={12}>
                    <Item sx={{
                        height: '630px',
                        width: '100%',
                        borderRadius: '20px',
                        mt: '48px'
                    }}>
                        <DataGrid
                            rows={rowData}
                            columns={columns}
                            pageSize={10}
                            // checkboxSelection
                            rowsPerPageOptions={[2]}
                            disableSelectionOnClick
                            sx={{borderRadius:'20px'}}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}




