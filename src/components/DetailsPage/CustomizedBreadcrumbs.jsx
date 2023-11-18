import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { Link } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: 'white',
    backgroundColor: 'red',
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: 'white',
      color: 'red',
      border: '1px solid red'
    },
    '&:active': {
      boxShadow: theme.shadows[1],
     
    },
  };
});

export default function CustomizedBreadcrumbs() {
  return (
    <div className="container my-5 p-0 px-5 px-lg-0  d-flex justify-content-start">
      <div role="presentation" >
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Home"
        
            />
          </Link>
          <StyledBreadcrumb component="a" href="#" label="Giochi" />
          <StyledBreadcrumb
            label="Ps5"
          
          />
        </Breadcrumbs>
      </div>
    </div>
  );
}
