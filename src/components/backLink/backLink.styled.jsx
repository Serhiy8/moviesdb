import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackLink = styled(NavLink)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid ${({theme}) => theme.colors.white};
    border-radius: 3px;
    color: ${({theme}) => theme.colors.white};
    margin: 20px 0 30px 0;
    &:hover {
      color: ${({theme}) => theme.colors.btnHover};
      border: 1px solid ${({theme}) => theme.colors.btnHover};
    }
  `