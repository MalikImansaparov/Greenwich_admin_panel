import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="homeemployers" onClick={handleClick}>
            Сотрудники
        </Link>,
        <Link
            underline="hover"
            key="2"
            color="inherit"
            href="/getting-started/installation/"
            onClick={handleClick}
        >
          Добавить пользователей
        </Link>,
        <Typography key="3" color="text.primary">
            Breadcrumb
        </Typography>,
    ];

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    )
}
