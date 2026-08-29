import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import * as S from './styled';

import Api from '../../api';
import Header from '../../components/Header';

const formatDate = (value) => {
    if (!value) return '';
    const date = new Date(value.replace(' ', 'T'));
    if (isNaN(date)) return value;
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
};

const formatMonthYear = (value) => {
    if (!value) return '';
    const date = new Date(value);
    if (isNaN(date)) return '';
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' });
};

const getInitials = (name = '') => {
    return name
        .trim()
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map(part => part[0].toUpperCase())
        .join('');
};

export default () => {
    let { id } = useParams();
    const [announcement, setAnnouncement] = useState({});
    const [activeImage, setActiveImage] = useState(null);

    useEffect(()=> {
        const getAnnouncement = async () => {
            setAnnouncement({});
            setActiveImage(null);
            await Api.get(`/announcement/${id}`).then((res) => {
                setAnnouncement(res.data.data);
                const gallery = res.data.data.gallery;
                setActiveImage(gallery && gallery.length ? gallery[0] : res.data.data.images);
            });
        }
        getAnnouncement();
    }, [id]);

    const gallery = announcement.gallery && announcement.gallery.length ? announcement.gallery : [announcement.images].filter(Boolean);

    return (
        <>
        <S.HeaderArea>
            <Header />
        </S.HeaderArea>
        <S.Breadcrumb>
            <Link to="/">{announcement.city || 'OLX'}</Link>
            {announcement.category_name && <>
                <S.BreadcrumbSeparator>›</S.BreadcrumbSeparator>
                <Link to="/">{announcement.category_name}</Link>
            </>}
        </S.Breadcrumb>
        <S.Container>
            <S.AnnouncementArea className="col-md-8">
                <S.TitleRow>
                    <S.TitleAnnouncement>{announcement.title}</S.TitleAnnouncement>
                    <S.IconButtonsArea>
                        <S.IconButton title="Favoritar">♡</S.IconButton>
                        <S.IconButton title="Compartilhar">↗</S.IconButton>
                    </S.IconButtonsArea>
                </S.TitleRow>
                <S.DateAnnouncement>Publicado em {formatDate(announcement.created_at)}</S.DateAnnouncement>
                <S.ImageAnnouncementArea>
                    <S.ImageAnnouncement src={activeImage} />
                </S.ImageAnnouncementArea>
                {gallery.length > 1 &&
                    <S.ThumbnailsArea>
                        {gallery.map((src, index) => (
                            <S.Thumbnail
                                key={index}
                                src={src}
                                $active={src === activeImage}
                                onClick={() => setActiveImage(src)}
                            />
                        ))}
                    </S.ThumbnailsArea>
                }
                <S.DescriptionAnnouncement>{announcement.description}</S.DescriptionAnnouncement>

                <S.DetailsTitle>Detalhes</S.DetailsTitle>
                <S.DetailsGrid>
                    <S.DetailItem>
                        <S.DetailLabel>Categoria</S.DetailLabel>
                        <S.DetailValue>{announcement.category_name}</S.DetailValue>
                    </S.DetailItem>
                    <S.DetailItem>
                        <S.DetailLabel>CEP</S.DetailLabel>
                        <S.DetailValue>{announcement.zipcode}</S.DetailValue>
                    </S.DetailItem>
                    <S.DetailItem>
                        <S.DetailLabel>Cidade</S.DetailLabel>
                        <S.DetailValue>{announcement.city}</S.DetailValue>
                    </S.DetailItem>
                </S.DetailsGrid>

                <S.LocationTitle>Localização</S.LocationTitle>
                <S.LocationArea>
                    <S.LocationZipCode>Cep: {announcement.zipcode}</S.LocationZipCode>
                    <S.LocationCity>Cidade: {announcement.city}</S.LocationCity>
                </S.LocationArea>

                <S.ButtonsArea>
                    <Link to="/">Favoritar</Link>
                    <Link to="/">Compartilhar</Link>
                    <Link to="/">Denunciar</Link>
                </S.ButtonsArea>
            </S.AnnouncementArea>
            <S.RightArea className="col-md-4">
                <S.PriceArea>R$ {announcement.price}</S.PriceArea>
                <S.InfoArea>
                    <S.AvatarCircle>{getInitials(announcement.name)}</S.AvatarCircle>
                    <S.NameUser>{announcement.name}</S.NameUser>
                    <S.SellerCity>{announcement.city}</S.SellerCity>
                    {announcement.seller_member_since &&
                        <S.LastAcessText>Na OLX desde {formatMonthYear(announcement.seller_member_since)}</S.LastAcessText>
                    }

                    <S.ButtonChatArea>
                        <a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=55${announcement.phone}&text=Ol%C3%A1%20${announcement.name}%20estou%20interessado%20no%20seu%20an%C3%BAncio%20da%20olx`}>Mensagem via WhatsApp</a>
                    </S.ButtonChatArea>

                    <S.SeparatorLine></S.SeparatorLine>

                    {announcement.seller_reviews_count > 0 &&
                        <S.SalesHistoryArea>
                            <S.SalesHistoryTitle>Histórico de vendas</S.SalesHistoryTitle>
                            <S.RatingRow>
                                <S.RatingValue>{announcement.seller_rating.toFixed(1)}</S.RatingValue>
                                <S.Stars>{'★'.repeat(Math.round(announcement.seller_rating))}{'☆'.repeat(5 - Math.round(announcement.seller_rating))}</S.Stars>
                            </S.RatingRow>
                            <S.LastAcessText>{announcement.seller_reviews_count} avaliações</S.LastAcessText>
                            <S.SalesCountRow>
                                <S.SalesCount>
                                    <strong>{String(announcement.seller_sales_completed).padStart(2, '0')}</strong>
                                    <span>Vendas concluídas</span>
                                </S.SalesCount>
                                <S.SalesCount>
                                    <strong>{String(announcement.seller_sales_cancelled).padStart(2, '0')}</strong>
                                    <span>Vendas canceladas</span>
                                </S.SalesCount>
                            </S.SalesCountRow>
                        </S.SalesHistoryArea>
                    }

                    <S.VerifiedArea>
                        <S.SalesHistoryTitle>Informações verificadas</S.SalesHistoryTitle>
                        <S.VerifiedItem $verified={announcement.seller_email_verified}>
                            {announcement.seller_email_verified ? '✓' : '✕'} E-mail
                        </S.VerifiedItem>
                        <S.VerifiedItem $verified={announcement.seller_phone_verified}>
                            {announcement.seller_phone_verified ? '✓' : '✕'} Telefone
                        </S.VerifiedItem>
                        <S.VerifiedItem $verified={announcement.seller_facebook_verified}>
                            {announcement.seller_facebook_verified ? '✓' : '✕'} Facebook
                        </S.VerifiedItem>
                    </S.VerifiedArea>

                    <S.AllAnnouncementsArea>
                        <Link to="/">Ver todos anúncios</Link>
                    </S.AllAnnouncementsArea>
                </S.InfoArea>
            </S.RightArea>
        </S.Container>
        </>
    )
}
