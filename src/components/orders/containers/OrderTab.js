import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useEffect, useMemo, useState} from 'react';
import Grid from '@mui/material/Grid';
import { ItemWrapper } from '../../../style';
import CircularPreloader from '../../preloader';
import { DataGrid } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
    AsyncCompletedOrders,
    AsyncConfirmOrder,
    AsyncDeleteOrder,
    AsyncOrders,
} from '../../../store/asyncAction/asyncOrders';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import ClearIcon from '@mui/icons-material/Clear';
import Checkbox from '@mui/material/Checkbox';
import { AsyncDeleteEmployers } from '../../../store/asyncAction/asyncEmployers';
import { useNavigate } from 'react-router';
import axiosInstance from '../../../api/utils/axiosInstance';
import { toast } from 'react-toastify';
import ConfirmDialog from "../../dialog/confirmPopup";
import {AsyncDeleteProduct} from "../../../store/asyncAction/asyncProducts";
import ActionButton from "../../ActionButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
const TextAdjust = styled('span')`
  margin-left: 5px;
`;

const NumberAdjust = styled('span')`
  margin: 0 auto;
`;

export const OrderTab = () => {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const isFetching = useSelector((state) => state.orders.loading);
    const isOrders = useSelector((state) => state.orders.orders || []);
    const completedOrders = useSelector((state) => state.orders.completed || []);
    const confirmOrders = useSelector((state) => state.orders.completed || []);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState(isOrders);
    const [confirm, setConfirm] = React.useState(true);
    const data = Array.from(rows);
    const [name, setName] = useState(localStorage.getItem('firstName'));
    const [surename, setSurename] = useState(localStorage.getItem('lastName'));
    const [initialRender, setInitialRender] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: '',
        subTitle: '',
    });


    useEffect(() => {
        dispatch(AsyncOrders());
        dispatch(AsyncCompletedOrders());
        if (name.length || surename.length === 0) {
            setName('Тимур ');
            setSurename('Одинцев');
        }
    }, []);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const filteredRows = isOrders.filter((row) => {
            return (
                row.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
                row.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
                row.phone_number.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        setRows(filteredRows);
    };

    useEffect(() => {
        const updateOrders = () => {
            setRows(isOrders);
        }
        updateOrders()

    }, [isOrders, initialRender ]);

    const rowData = completedOrders.map((order) => {
        return {
            id: order?.id,
            first: order?.first_name,
            last: order?.last_name,
            total: order?.total_price,
            number: order?.phone_number,
            address: order?.address,
            data: order?.date_created,
            name: order?.courier.user.first_name,
            surename: order?.courier.user.last_name,
        };
    });

    const rowDatas = useMemo( () =>
        data.map((order) => {
            return {
                id: order?.id,
                first: order?.first_name,
                last: order?.last_name,
                total: order?.total_price,
                number: order?.phone_number,
                address: order?.address,
                courier: order?.courier.user.first_name,
                phone: order?.courier.user.phone_number,
                status: order?.courier_status,
                confirm: order?.is_confirmed,
            };
        }), [rows])


    setTimeout(() => {
        AsyncOrders();
    }, 10000);

    const handleDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        dispatch(AsyncDeleteOrder(id));
    };


    const handleCheck = (id) => {
        toast
            .promise(axiosInstance.patch(`orders/order/${id}/`, { confirm }), {
                pending: 'Подверждение заказа...',
                success: 'Заказ успешно подверждено',
                error: 'Возникла ошибка',
            })
            .then((data) => {
                console.log(data.confirm);
            });
    };

    const handleClick = (id) => {
        navigate(`${id}`);
    };

    const columns = [
        {
            field: 'user',
            headerName: 'Получатель',
            width: 190,
            renderCell: (params) => {
                return (
                    <div sx={{ display: 'flex' }}>
                        <TextAdjust>{params.row.first}</TextAdjust>
                        <TextAdjust> {params.row.last}</TextAdjust>
                    </div>
                );
            },
        },

        {
            field: 'number',
            headerName: 'Номер получ.',
            width: 130,
            renderCell: (params) => {
                return <div>{params.row.number}</div>;
            },
        },

        {
            field: 'address',
            headerName: 'Адрес',
            width: 140,
            renderCell: (params) => {
                return <div>{params.row.address}</div>;
            },
        },
        {
            field: 'total',
            headerName: 'Сумма',
            width: 70,
            renderCell: (params) => {
                return <div>{params.row.total}</div>;
            },
        },
        {
            field: 'courier',
            headerName: 'Курьер',
            width: 120,
            renderCell: (params) => {
                return <div>{params.row.courier}</div>;
            },
        },
        {
            field: 'phone',
            headerName: 'Номер курьера',
            width: 130,
            renderCell: (params) => {
                return <div>{params.row.phone}</div>;
            },
        },
        {
            field: 'status',
            headerName: 'Статусы',
            width: 150,
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
        {
            field: 'action',
            headerName: 'Действие',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Checkbox
                            value={confirm}
                            defaultChecked
                            onChange={() => handleCheck(params.row.id)}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <EditIcon
                            sx={{ cursor: 'pointer', mr: '10px' }}
                            onClick={() => handleClick(params.row.id)}
                        />
                        <ActionButton
                            onClick={() => {
                                setConfirmDialog({
                                    isOpen: true,
                                    title: 'Вы действительно хотите отменить данный заказ?',
                                    onConfirm: () => { handleDelete(params.row.id) }
                                })
                            }}>
                            <ClearIcon sx={{ cursor: 'pointer', fontSize: '28px' }}/>
                        </ActionButton>
                    </>
                );
            },
        },
    ];

    const column = [
        {
            field: 'id',
            headerName: 'ID заказа',
            width: 100,
            renderCell: (params) => {
                return <NumberAdjust>{params.row.id}</NumberAdjust>;
            },
        },
        {
            field: 'user',
            headerName: 'Получатель',
            width: 200,
            renderCell: (params) => {
                return (
                    <div sx={{ display: 'flex' }}>
                        <TextAdjust>{params.row.first}</TextAdjust>
                        <TextAdjust> {params.row.last}</TextAdjust>
                    </div>
                );
            },
        },
        {
            field: 'number',
            headerName: 'Номер получателя',
            width: 150,
            renderCell: (params) => {
                return <TextAdjust>{params.row.number}</TextAdjust>;
            },
        },
        {
            field: 'data',
            headerName: 'Дата',
            width: 130,
            renderCell: (params) => {
                return (
                    <TextAdjust>{params.row.data.split('T').slice(0, 1)}</TextAdjust>
                );
            },
        },
        {
            field: 'address',
            headerName: 'Адрес',
            width: 170,
            renderCell: (params) => {
                return <TextAdjust>{params.row.address}</TextAdjust>;
            },
        },
        {
            field: 'courier',
            headerName: 'Курьер',
            width: 200,
            renderCell: (params) => {
                return (
                    <div sx={{ display: 'flex' }}>
                        <TextAdjust>{params.row.name}</TextAdjust>
                        <TextAdjust> {params.row.surename}</TextAdjust>
                    </div>
                );
            },
        },
        {
            field: 'total',
            headerName: 'Сумма',
            width: 80,
            renderCell: (params) => {
                return <NumberAdjust>{params.row.total}</NumberAdjust>;
            },
        },
    ];

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography component={'div'}>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Box>
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
                        value={searchText}
                        name="search"
                        type="string"
                        placeholder="Поиск"
                        onChange={(e) => requestSearch(e.target.value)}
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
                        <span>{name}</span>
                        <span>{surename}</span>
                    </Typography>
                </Box>
            </Box>
            <Typography
                sx={{
                    color: 'black',
                    fontSize: 30,
                    fontWeight: 600,
                    my: '30px',
                }}
            >
                Заказы
            </Typography>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                sx={{ mb: '24px', fontSize: '20px' }}
            >
                <Tab label="Текущие заказы" sx={{ mr: '30px', ml: '15px' }} />
                <Tab label="Завершенные заказы" sx={{ mr: '30px' }} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grid container>
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
                    <ConfirmDialog
                        confirmDialog={confirmDialog}
                        setConfirmDialog={setConfirmDialog}
                    />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container>
                    <Grid item xs={12}>
                        <ItemWrapper>
                            {isFetching ? (
                                <CircularPreloader />
                            ) : (
                                <DataGrid
                                    rows={rowData}
                                    columns={column}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                    disableSelectionOnClick
                                    sx={{ borderRadius: '20px' }}
                                />
                            )}
                        </ItemWrapper>
                    </Grid>
                </Grid>
            </TabPanel>
        </Box>
    );
};

