import styled from 'styled-components';


export const Announcement = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
`;

export const ImageArea = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
`;

export const ImageAnnouncement = styled.img`
    width:100%;
    height: 220px;
    border-radius: 10px;
    object-fit: cover;
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.9);
    color: #4A4A4A;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    :hover {
        color: #F71963;
    }
`;

export const DescriptionAnnouncement = styled.small`
    margin-top: 12px;
    color: #1A1D23;
    font-size: 18px;
    font-weight: 600;
    line-height: 27px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const PriceAnnouncement = styled.small`
    margin-top: 8px;
    color: #1A1D23;
    font-size: 18px;
    font-weight: 600;
`;
