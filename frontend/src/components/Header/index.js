import React from 'react';
import * as S from './styled';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Logo from '../../assets/logoolx.png';
import Api from '../../api';

const MenuIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const GridIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
    </svg>
);

const ChatIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.38 8.38 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />
    </svg>
);

const BellIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
);

const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l1.9 5.6L19.5 9l-5.6 1.9L12 16.5l-1.9-5.6L4.5 9l5.6-1.9L12 2z" />
    </svg>
);

const PinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

export default ({logged}) => {

    const token = useSelector(state => state.UserReducer.token);
    const name = useSelector(state => state.UserReducer.name);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        Api.post(`auth/logout?token=${token}`).then((res) => {
            dispatch({
                type: 'SET_TOKEN',
                payload: { token: ''}
            });
            dispatch({
                type: 'SET_NAME',
                payload: { name: 'Visítante'}
            });
            history.push('/');
        });
    }

    return (
        <S.Wrapper>
            <S.TopBar>
                <S.HeaderLeft>
                    <S.MenuButton type="button" aria-label="Menu"><MenuIcon /></S.MenuButton>
                    <Link to="/">
                        <S.Logo src={Logo} />
                    </Link>
                    <S.SearchWrapper>
                        <S.SearchInput type="text" placeholder={'Buscar "Carro"'} />
                        <S.SearchDivider />
                        <S.LocationButton type="button">
                            <PinIcon /> RJ <ChevronDownIcon />
                        </S.LocationButton>
                        <S.SearchDivider />
                        <S.SearchSubmit type="button" aria-label="Buscar"><SearchIcon /></S.SearchSubmit>
                    </S.SearchWrapper>
                </S.HeaderLeft>
                <S.HeaderRight>
                    <Link to="/"><S.NavItem><BriefcaseIcon /> Plano Profissional</S.NavItem></Link>
                    <Link to="/"><S.NavItem><GridIcon /> Meus Anúncios</S.NavItem></Link>
                    <Link to="/"><S.NavItem><ChatIcon /> Chat</S.NavItem></Link>
                    <Link to="/"><S.NavItem><BellIcon /> Notificações</S.NavItem></Link>

                    {!token &&
                        <Link to="/login"><S.ButtonOutline>Entrar</S.ButtonOutline></Link>
                    }

                    {token &&
                        <S.ButtonOutline as="button" onClick={handleLogout}>Sair</S.ButtonOutline>
                    }

                    {logged ?
                        <Link to="/announcement">
                            <S.UserName>Olá, {name}</S.UserName>
                        </Link>
                        :
                        <Link to="/announcement">
                            <S.ButtonAdd><SparkleIcon /> Anunciar grátis</S.ButtonAdd>
                        </Link>
                    }
                </S.HeaderRight>
            </S.TopBar>
        </S.Wrapper>
    )
}
