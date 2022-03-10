import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, {useEffect, useLayoutEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {ItemWrapper} from "../../../style";
import Typography from "@mui/material/Typography";
import { useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import {AsyncEmployers} from "../../../store/asyncAction/asyncEmployers";
import {useDispatch, useSelector} from "react-redux";
import CircularPreloader from "../../preloader";

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
 cursor:pointer;
 &: hover {
 color: '#487349'
 }
`

export const EmployersTable = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [data, setData] = useState(null);
    const [isSuperAdmin, setSuperAdmin] = useState(null);
    // const [isAdmin, setAdmin] = useState(null);
    // const [isFlorist, setFlorist] = useState(null);
    const employersData = useSelector(state => state.employers.user || [])
    const isFetching = useSelector((state) => state.employers.loading)


    useEffect(() => {
        if (localStorage.getItem('role') === 'Суперадмин') {
            setSuperAdmin('суперадмин');
        }
        dispatch(AsyncEmployers())
    }, []);

    const rowData = employersData.map( employer => {
        return {
            id: employer?.id,
            user: employer?.user.first_name,
            user2: employer?.user.last_name,
            email: employer?.user.total_price,
            number: employer?.user.phone_number,
            role: employer?.user.role,
            salary: employer?.salary,
        }
    })

    // useLayoutEffect(() => {
    //     if ( rowData.role === 'админ') {
    //         setAdmin('админ');
    //     }
    //     if ( rowData.role === 'флористь') {
    //         setFlorist('флористь');
    //     }
    //     console.log('isAdmin', rowData[1].role)
    // },[])

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
    const handleClick = (id) => {
        return navigate(`edit:${id}`)
    }

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
            width: 250,
            renderCell: (params) => {
                return (
                    <div sx={{display: 'flex'}}>
                       <span sx={{ml: '5px'}}>{params.row.user}</span>
                        <span sx={{mr: '5px'}}> {params.row.user2}</span>
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
                return <div>greenwich12@gmail.com</div>;
            },
        },
        {
            field: 'role',
            headerName: 'Роль',
            width: 150,
            renderCell: (params) => {
                return (
                        <Box sx={{
                            borderRadius: '12px',
                            padding: '5px 10px',
                            background: '#e6f0e6',
                            cursor: 'pointer',
                        }}>
                            {params.row.role}</Box>
                )
            }
        },
        {
            field: 'salary',
            headerName: 'Зарплата',
            width: 120,
            renderCell: (params) => {
                return <div>35000</div>;
            },
        },
        {
            field: 'action',
            headerName:'',
            width: 100,
            renderCell: (params) => {
                return (
                    <> {isSuperAdmin &&
                    <>
                        <EditIcon sx={{cursor: 'pointer', mr: '15px'}}
                                  onClick={() => handleClick(params.row.id)}/>
                        <DeleteOutlineIcon
                        sx={{cursor: 'pointer', fontSize: "30px",}}
                        onClick={() => handleDelete(params.row.id)}
                        />
                        </>
                    }
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
                    <ItemWrapper>
                    { isFetching ? <CircularPreloader/> :
                        <DataGrid
                            rows={rowData}
                            columns={columns}
                            pageSize={8}
                            // checkboxSelection
                            rowsPerPageOptions={[8]}
                            disableSelectionOnClick
                            sx={{borderRadius:'20px'}}
                        />}
                    </ItemWrapper>
                </Grid>
            </Grid>
        </Box>
    );
}




