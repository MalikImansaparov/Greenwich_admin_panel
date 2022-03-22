import { DataGrid } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import React, {useEffect} from 'react';
import Grid from "@mui/material/Grid";
import {ItemWrapper} from "../../../style";
import Typography from "@mui/material/Typography";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {styled} from "@mui/system";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/ModeEditOutline';
import {useDispatch, useSelector} from "react-redux";
import {
  AsyncAllProducts,
  AsyncDeleteProduct,
  AsyncEditProduct,
  AsyncGetProduct,
} from '../../../store/asyncAction/asyncProducts';
import CircularPreloader from '../../preloader';
import avatar from '../../../assets/img/avater.svg';
import SearchIcon from '@mui/icons-material/Search';

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

const Content = styled(Box)`
  margin-left: 15px;
`;

export const ProductsTable = () => {
  const productData = useSelector((state) => state.products.product);
  const isFetching = useSelector((state) => state.products.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState(productData);
console.log('useSelector', productData);
console.log('useState', rows);

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
  setRows(productData);
}, [productData]);

useEffect(() => {
  dispatch(AsyncAllProducts());
}, []);

const rowData = rows?.map((product) => {
  return {
    id: product?.id,
    name: product?.description,
    total: product?.price,
    photo: product?.picture,
    category: product?.choice,
  };
});

const handleDelete = (id) => {
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
      width: 140,
      height: 150,
      renderCell: (params) => {
        return (
          <div>
            <Box
              component="img"
              src={params.row.photo}
              alt="product_photo"
              sx={{ height: '79px', width: '74px', ml: '30px' }}
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
      field: 'action',
      headerName: 'Действие',
      width: 150,
      height: 150,
      renderCell: (params) => {
        return (
          <Content>
            <EditIcon
              sx={{ cursor: 'pointer', mr: '15px' }}
              onClick={() => handleClick(params.row.id)}
            />
            <DeleteOutlineIcon
              sx={{ cursor: 'pointer', fontSize: '30px' }}
              onClick={() => handleDelete(params.row.id)}
            />
          </Content>
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
            {' '}
            Тимур Одинцев
            {/*<span>{firstName}</span>*/}
            {/*   <span>{lastName}</span>*/}
          </Typography>
          <img src={avatar} alt="avatar" sx={{ mt: '20px' }} />
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
                rows={rowData}
                columns={columns}
                pageSize={8}
                checkboxSelection
                rowsPerPageOptions={[8]}
                disableSelectionOnClick
                sx={{ borderRadius: '20px' }}
              />
            )}
          </ItemWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};




