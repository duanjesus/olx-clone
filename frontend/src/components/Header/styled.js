import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: #fff;
`;

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    height: 80px;
    padding: 0 24px;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;

    a {
        text-decoration: none;
        color: #4A4A4A;
        transition: all ease 0.2s;
    }

    a:hover {
        color: #6e0ad6;
    }
`;

export const Logo = styled.img`
    width: 50px;
    margin-right: 50px;
`;

export const HeaderRight = styled.div`
    display:flex;
    flex-shrink: 0;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    margin-left: 24px;

    a {
        color: rgb(74, 74, 74);
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        transition: all ease 0.2s;
    }

    a:hover {
        color: #6e0ad6;
    }
`;

export const IconButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #4A4A4A;
    cursor: pointer;
    padding: 4px;

    :hover {
        color: #6e0ad6;
    }
`;

export const NavItem = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
`;

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonOutline = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    padding: 0 24px;
    border-radius: 40px;
    border: 1px solid #d8d8d8;
    color: #4A4A4A;
    font-size: 14px;
    font-weight: 600;
    background: transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all ease 0.2s;

    :hover {
        border-color: #6e0ad6;
        color: #6e0ad6;
    }
`;

export const ButtonLogout = styled.button`
        margin-left: 50px;
        color: rgb(74, 74, 74);
        background-color: transparent;
        border: 0;
        font-size: 14px;
        text-decoration: none;
        transition: all ease 0.2s;
        :hover {
        color: #6e0ad6;
    }
`;

export const ButtonAdd = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 40px;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
    border: 1px solid transparent;
    text-decoration: none;
    background-color: #6e0ad6;
    border-radius: 40px;
    font-weight: bold;
    white-space: nowrap;
`;

export const UserName = styled.span`
    color: #6e0ad6;
    font-weight: 600;
    font-size: 16px;
`;

export const SearchWrapper = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
    max-width: 620px;
    height: 44px;
    border: 1px solid #d8d8d8;
    border-radius: 6px;
    overflow: hidden;
`;

export const SearchInput = styled.input`
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: #f5f5f5;
    padding: 0 16px;
    font-size: 15px;
    color: #4A4A4A;

    ::placeholder {
        color: #767676;
    }
`;

export const SearchDivider = styled.div`
    width: 1px;
    height: 24px;
    background: #d8d8d8;
    flex-shrink: 0;
`;

export const LocationButton = styled.button`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    height: 100%;
    padding: 0 14px;
    border: none;
    background: transparent;
    color: #4A4A4A;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;

    :hover {
        color: #6e0ad6;
    }
`;

export const SearchSubmit = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 44px;
    height: 100%;
    background: transparent;
    border: none;
    color: #4A4A4A;
    cursor: pointer;

    :hover {
        color: #6e0ad6;
    }
`;
