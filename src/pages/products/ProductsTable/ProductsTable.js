import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {ItemWrapper} from "../../../style";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import {useDispatch, useSelector} from "react-redux";
import {
  AsyncAllProducts,
  AsyncDeleteProduct,
} from '../../../store/asyncAction/asyncProducts';
import CircularPreloader from '../../preloader';
import SearchIcon from '@mui/icons-material/Search';
import ActionButton from "../../dialog/ActionButton";
import ConfirmDialog from "../../dialog/confirmPopup";
import {v4} from 'uuid'
import {ButtonWrapper, SearchWrapper, TextAdjust} from "../../employers/EmployersTable/style";
import {CustomButton} from "../../customButton";

export const ProductsTable = () => {
  const productData = useSelector((state) => state.products.product || []);
  const isFetching = useSelector((state) => state.products.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(productData);
  const [name, setName] = useState(localStorage.getItem('firstName'));
  const [surename, setSurename] = useState(localStorage.getItem('lastName'));
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subTitle: '',
  });

  useEffect(() => {
      dispatch(AsyncAllProducts());
    if (name.length || surename.length === 0) {
      setName('Тимур ');
      setSurename('Одинцев');
    }

  }, []);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const filteredRows = productData.filter((row) => {
      return (
          row.description.toLowerCase().includes(searchText.toLowerCase()) ||
          row.choice.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setRows(filteredRows);
  };

  useEffect(() => {
    const updateProducts = () => {
      setRows(productData)
    }
    updateProducts()
  }, [productData]);

  const rowData = rows.map((product) => {
    return {
        _id: v4(),
      id: product?.id,
      name: product?.name,
      total: product?.price,
      photo: product?.picture,
      category: product?.choice,
      count: product?.quantity,
    };
  });

  const handleDelete = (id) => {
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false
    })
    dispatch(AsyncDeleteProduct(id));
  };

  const handleClick = (id) => {
    navigate(`${id}`);
  };
  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      height: 150,
      renderCell: (params) => {
        return <Content>{params.row.id}</Content>;
      },
    },
    {
      field: 'photo',
      headerName: 'Фото',
      width: 100,
      height: 150,
      renderCell: (params) => {
        return (
            <div>
              <Box
                  component="img"
                  src={params.row.photo}
                  alt="product_photo"
                  sx={{ height: '69px', width: '60px', ml: '0px', py: '10px' }}
              />
            </div>
        );
      },
    },
    {
      field: 'name',
      headerName: 'Название',
      width: 340,
      height: 150,
      renderCell: (params) => {
        return <Content>{params.row.name}</Content>;
      },
    },
    {
      field: 'total',
      headerName: 'Цена',
      width: 100,
      height: 150,
      renderCell: (params) => {
        return <Content>{params.row.total}</Content>;
      },
    },
    {
      field: 'category',
      headerName: 'Категории',
      width: 200,
      height: 150,
      renderCell: (params) => {
        return <Content>{params.row.category}</Content>;
      },
    },
    {
      field: 'count',
      headerName: 'Количество',
      width: 120,
      height: 150,
      renderCell: (params) => {
        return <Content sx={{ ml: '40px' }}>{params.row.count}</Content>;
      },
    },
    {
      field: 'action',
      headerName: 'Действие',
      width: 100,
      height: 150,
      renderCell: (params) => {
        return (
            <TextAdjust>
            <span>
              <EditIcon
                  sx={{ cursor: 'pointer', mr: '15px' }}
                  onClick={() => handleClick(params.row.id)}
              />
            </span>
              <ActionButton
                  onClick={() => {
                    setConfirmDialog({
                      isOpen: true,
                      title: 'Вы действительно хотите удалить данный товар?',
                      onConfirm: () => { handleDelete(params.row.id) }
                    })
                  }}>
                <DeleteOutlineIcon sx={{ cursor: 'pointer', fontSize: '30px' }}/>
              </ActionButton>
            </TextAdjust>
        );
      },
    },
  ];
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
        <Box
            sx={{
              mb: '24px',
              mr: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
        >
          <Typography
              sx={{
                color: 'black',
                fontSize: '30px',
                fontWeight: 600,
              }}
          >
            Товары
          </Typography>
          <CustomButton to="add" sx={{ textDecoration: 'none' }}>
            Добавить товара
          </CustomButton>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <ItemWrapper>
              {isFetching ? (
                  <CircularPreloader />
              ) : (
                  <DataGrid
                      getRowId={(r) => r._id}
                      rows={rowData}
                      columns={columns}
                      pageSize={8}
                      rowsPerPageOptions={[8]}
                      disableSelectionOnClick
                      sx={{ borderRadius: '20px' }}
                  />
              )}
            </ItemWrapper>
          </Grid>
        </Grid>
        <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
        />
      </Box>
  );
};
