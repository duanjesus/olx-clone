import React from 'react'
import * as S from './styled';
import { Link } from 'react-router-dom';

const HeartIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
);

export default (data) => {
    const handleFavoriteClick = (e) => {
        e.preventDefault();
    }

    return (
        <Link to={`announcement/${data.data.id}`}>
            <S.Announcement>
                <S.ImageArea>
                    <S.ImageAnnouncement src={data.data.images} />
                    <S.FavoriteButton type="button" aria-label="Favoritar" onClick={handleFavoriteClick}>
                        <HeartIcon />
                    </S.FavoriteButton>
                </S.ImageArea>
                <S.DescriptionAnnouncement>{data.data.title} </S.DescriptionAnnouncement>
                <S.PriceAnnouncement>R$ {data.data.price}</S.PriceAnnouncement>
            </S.Announcement>
        </Link>
    )
}
