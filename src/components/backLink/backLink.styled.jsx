import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledBackLink = styled(NavLink)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid #ffffff;
    border-radius: 3px;
    color: #ffffff;
    margin: 20px 0 30px 0;
    &:hover {
      color: red;
      border: 1px solid red;
    }
  `