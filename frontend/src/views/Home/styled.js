import styled from 'styled-components';

export const Container = styled.div``;

export const CategoryNavArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
`;

export const CategoryNavInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    padding: 0 24px;
`;

export const CategoryNavScroll = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    flex: 1;
    min-width: 0;
    padding: 16px 0;
    overflow-x: auto;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

    a {
        text-decoration: none;
    }
`;

export const CategoryNavItem = styled.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    white-space: nowrap;
    font-size: 14px;
    color: #4A4A4A;
    font-weight: ${props => props.$active ? '700' : '500'};
    padding-bottom: ${props => props.$active ? '13px' : '0'};
    border-bottom: ${props => props.$active ? '2px solid #6e0ad6' : 'none'};
    background: none;
    border-left: none;
    border-right: none;
    border-top: none;
    cursor: pointer;
    transition: color ease 0.2s;

    :hover {
        color: #6e0ad6;
    }
`;

const badgeColors = ['#E8F5EE', '#FDEAEE', '#F1EAFB', '#EAF6FB', '#FDF3E7', '#EAFBF2', '#FBEAF7', '#EFEAFB', '#FDF7E7'];

export const CategoryNavIconBadge = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${props => badgeColors[props.$index % badgeColors.length]};
    flex-shrink: 0;
`;

export const CategoryNavIcon = styled.img`
    width: 15px;
    height: 15px;
    object-fit: contain;
`;

export const CategoryNavScrollButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    margin-left: 12px;
    border-radius: 50%;
    border: 1px solid #d8d8d8;
    background: #fff;
    color: #4A4A4A;
    cursor: pointer;

    :hover {
        border-color: #6e0ad6;
        color: #6e0ad6;
    }
`;

export const PromoArea = styled.div`
    margin-top: 24px;
`;

export const PromoCarousel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 220px;
    padding: 40px 80px;
    border-radius: 12px;
    background: linear-gradient(120deg, #6e0ad6, #9027B0);
    overflow: hidden;
`;

export const PromoContent = styled.div`
    max-width: 520px;
    text-align: center;
`;

export const PromoTitle = styled.h2`
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 12px;
`;

export const PromoSubtitle = styled.p`
    color: rgba(255,255,255,0.85);
    font-size: 16px;
    margin-bottom: 24px;
`;

export const PromoButton = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    padding: 0 28px;
    border-radius: 40px;
    background: #fff;
    color: #6e0ad6;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: all ease 0.2s;

    :hover {
        background: #f0f0f0;
    }
`;

export const PromoArrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #fff;
    color: #4A4A4A;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.2);

    &:first-of-type {
        left: 20px;
    }

    &:last-of-type {
        right: 20px;
    }

    :hover {
        color: #6e0ad6;
    }
`;

export const PromoDots = styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
`;

export const PromoDot = styled.button`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    padding: 0;
    background: ${props => props.$active ? '#fff' : 'rgba(255,255,255,0.5)'};
    cursor: pointer;
`;

export const Announcements = styled.section`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const Title = styled.span`
    color: rgb(74, 74, 74);
    font-size: 20px;
    font-weight: 600;
`;

export const AnnouncementsArea = styled.div`
   display: flex;
   flex: 1;
   flex-direction: row;
   margin-top: 20px;
   flex-wrap: wrap;

   a {
       text-decoration: none;
   }
`;
