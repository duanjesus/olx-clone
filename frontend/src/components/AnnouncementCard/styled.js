import styled from 'styled-components';


export const Announcement = styled.div`
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction:column;
    margin-right: 30px;
`;

export const ImageArea = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
`;

export const ImageAnnouncement = styled.img`
    width:100%;
    height: 150px;
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
    margin-top: 5px;
    color: #4a4a4a;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
`;

export const PriceAnnouncement = styled.small`
    margin-top: 5px;
    color: rgb(74, 74, 74);
    font-size: 16px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif
`;
