
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 100%;
`;

export const NavigationLink = styled(Link)`
    margin-right: 10px;
    text-decoration: none;
    color: grey;
    font-weight: var(--bold);
    &:hover {
        color: var(--black);
    }
    
`;
export const AuthWrapper = styled.div`
    display: flex;
`;
