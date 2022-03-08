import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {ItemWrapper} from "../../../style";
import Typography from "@mui/material/Typography";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import {useDispatch, useSelector} from "react-redux";
import {AsyncProducts} from "../../../store/asyncAction/asyncProducts";
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

const Content = styled(Box)`
margin-left: 15px;
`

export const ProductsTable = () => {
    const [data, setData] = useState();
    const productData = useSelector(state => state.products.product || [])
    const isFetching = useSelector((state) => state.products.loading)
    const navigate = useNavigate()
    const {id}  = useParams()
    const dispatch = useDispatch()

    const rowData = productData?.map( product => {
        return {
            id: product?.id,
            name: product?.name,
            total: product?.price,
            photo: product?.picture,
            category: product?.category.name,
        }
    })

    useEffect(() => { dispatch(AsyncProducts())}, []);

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
            width: 70,
            renderCell: (params) => {
                return <Content>{params.row.id}</Content>;
            },
        },
        {
            field: 'photo',
            headerName: 'Фото',
            width: 150,
            renderCell: (params) => {
                return (
                    <div >
                        <Box component="img"
                            src={params.row.photo}
                            alt="product_photo"
                            sx={{height: '79px', width: '74px', ml:'30px'}}
                        />
                    </div >
                );
            },
        },
        {
            field: 'name',
            headerName: 'Название',
            width: 250,
            renderCell: (params) => {
                return <Content>{params.row.phone}</Content>;
            },
        },
        {
            field: 'total',
            headerName: 'Цена',
            width: 100,
            renderCell: (params) => {
                return <Content>{params.row.sum}</Content>;
            },
        },
        {
            field: 'category',
            headerName: 'Категории',
            width: 200,
            renderCell: (params) => {
                return <Content>{params.row.address}</Content>;
            },
        },
        {
            field: 'action',
            headerName: 'Действие',
            width: 150,
            renderCell: (params) => {
                return (
                    <Content>
                            <EditIcon sx={{color: '#000000', mr: '15px'}}
                                      onClick={() => handleClick(params.row.id)}
                            />
                        <DeleteOutlineIcon
                            sx={{color: '#000000',  fontSize: "30px"}}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </Content>
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
                    Товары
                </Typography>
                <CustomButton to='add' sx={{textDecoration: 'none'}}>
                    Добавить товара
                </CustomButton>

            </Box>
            <Grid container >
                <Grid item xs={12}>
                    <ItemWrapper>
                        { isFetching ? <CircularPreloader/> :
                        <DataGrid
                            className="grid"
                            rows={rowData}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            sx={{borderRadius:'20px'}}
                        />}
                    </ItemWrapper>
                </Grid>
            </Grid>
        </Box>
    );
}




