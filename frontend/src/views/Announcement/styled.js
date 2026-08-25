import styled from 'styled-components';

export const HeaderArea = styled.div``;

export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-size: 13px;

    a {
        color: #999999;
        text-decoration: none;
    }

    a:hover {
        color: #6e0ad6;
    }
`;

export const BreadcrumbSeparator = styled.span`
    margin: 0 8px;
    color: #cccccc;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
    padding-bottom: 60px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AnnouncementArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    min-width: 300px;
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`;

export const TitleAnnouncement = styled.h1`
    color: #4A4A4A;
    font-size: 24px;
    font-weight: 600;
`;

export const IconButtonsArea = styled.div`
    display: flex;
    gap: 8px;
`;

export const IconButton = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid #d8d8d8;
    background: #fff;
    color: #4A4A4A;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease 0.2s;

    :hover {
        border-color: #6e0ad6;
        color: #6e0ad6;
    }
`;

export const DateAnnouncement = styled.p`
    font-size: 12px;
    color: #999999;
    margin-bottom: 16px;
`;

export const ImageAnnouncementArea = styled.div`
    width: 100%;
    max-width: 650px;
    height: 350px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

export const ImageAnnouncement = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ThumbnailsArea = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    max-width: 650px;
    flex-wrap: wrap;
`;

export const Thumbnail = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 6px;
    cursor: pointer;
    border: 2px solid ${props => props.$active ? '#6e0ad6' : 'transparent'};
    opacity: ${props => props.$active ? 1 : 0.7};
    transition: all ease 0.2s;

    :hover {
        opacity: 1;
    }
`;

export const PriceAnnouncement = styled.small`
    margin-top:20px;
    font-size: 24px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const DescriptionAnnouncement = styled.p`
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.5;
    color: #4A4A4A;
    max-width: 650px;
    white-space: pre-line;
`;

export const DetailsTitle = styled.h2`
    margin-top: 32px;
    font-size: 20px;
    font-weight: 600;
    color: #4A4A4A;
`;

export const DetailsGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 40px;
    margin-top: 16px;
    max-width: 650px;
`;

export const DetailItem = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 140px;
`;

export const DetailLabel = styled.span`
    font-size: 12px;
    color: #999999;
`;

export const DetailValue = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #4A4A4A;
`;

export const ButtonsArea = styled.div`
    margin-top: 32px;
    margin-bottom: 20px;
    a{
        display: inline-flex;
        padding-left: 16px;
        padding-right: 16px;
        width: auto;
        height: 40px;
        font-size: 16px;
        min-width: 120px;
        border-radius: 32px;
        align-items: center;
        justify-content: center;
        padding: 0px 8px;
        background: transparent;
        color: rgb(247, 131, 35);
        border: 1px solid;
        margin-right: 20px;
    }
`;

export const LocationTitle = styled.h2`
    margin-top: 32px;
    font-size: 20px;
    color: #4A4A4A;
    font-weight: 600;
`;

export const LocationArea = styled.div`
    margin-top: 12px;
`;

export const LocationZipCode = styled.small`
    margin-right: 20px;
    font-size: 14px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const LocationCity = styled.small`
    font-size: 14px;
    color: #4A4A4A;
    font-weight: 400;
`;

export const RightArea = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    min-width: 280px;
`;

export const PriceArea = styled.div`
    background-color: #6E04D6;
    color: #FFF;
    font-size: 36px;
    font-weight: 300;
    max-width:300px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    margin-top: 60px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        margin-top: 0;
    }
`;

export const InfoArea = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    padding: 24px 20px;
    border-radius: 10px;
    background-color: rgb(249, 249, 249);
    border: 1px solid rgb(216, 216, 216);
    align-items: center;
    justify-content: center;
`;

export const AvatarCircle = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #6E04D6;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
`;

export const NameUser = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    color: rgb(50, 50, 50);
`;

export const SellerCity = styled.span`
    font-size: 13px;
    color: #999999;
    margin-bottom: 20px;
`;

export const ButtonChatArea = styled.div`
    a{
        text-decoration: none;
        display: inline-flex;
        width: 250px;
        height: 40px;
        font-size: 16px;
        font-weight: bold;
        min-width: 120px;
        border-radius: 32px;
        align-items: center;
        justify-content: center;
        background: rgb(247, 131, 35);
        color: #FFF;
        border: 1px solid;
    }
`;

export const SeparatorLine = styled.div`
    width: 250px;
    margin-top: 16px;
    border-bottom: 1px solid #CCC;
`;

export const LastAcessText = styled.p`
    margin-top:10px;
    font-size: 12px;
    color: #999;
`;

export const AllAnnouncementsArea = styled.div`
    margin-top: 16px;
    a{
        color:#9027B0;
        font-weight: 600;
        text-decoration: none;
        transition: all ease 0.2s;
    }

    a:hover {
        color:#6E04D6;
    }
`;

export const SalesHistoryArea = styled.div`
    width: 100%;
    margin-top: 16px;
`;

export const SalesHistoryTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #4A4A4A;
    margin-bottom: 8px;
`;

export const RatingRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const RatingValue = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #4A4A4A;
`;

export const Stars = styled.span`
    color: #F78323;
    font-size: 16px;
    letter-spacing: 2px;
`;

export const SalesCountRow = styled.div`
    display: flex;
    gap: 24px;
    margin-top: 12px;
`;

export const SalesCount = styled.div`
    display: flex;
    flex-direction: column;

    strong {
        font-size: 16px;
        color: #4A4A4A;
    }

    span {
        font-size: 11px;
        color: #999999;
    }
`;

export const VerifiedArea = styled.div`
    width: 100%;
    margin-top: 20px;
`;

export const VerifiedItem = styled.p`
    font-size: 13px;
    margin-top: 6px;
    color: ${props => props.$verified ? '#4A4A4A' : '#bbbbbb'};
`;
