import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';
import { Link } from 'react-router-dom';
import Api from '../../api';

import Header from '../../components/Header';
import AnnouncementCard from '../../components/AnnouncementCard';

const HeartIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#F02C56">
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
);

const PercentIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00A650" strokeWidth="2" strokeLinecap="round">
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
);

const GridIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="#8B2FE8">
        <circle cx="6" cy="6" r="3.2" />
        <circle cx="18" cy="6" r="3.2" />
        <circle cx="6" cy="18" r="3.2" />
        <circle cx="18" cy="18" r="3.2" />
    </svg>
);

const BagIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F78323" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8h12l-1 12H7L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6" />
    </svg>
);

const slides = [
    {
        title: 'Anuncie grátis hoje mesmo',
        subtitle: 'Publique seu anúncio em poucos minutos e alcance milhares de compradores.',
        cta: 'Anunciar grátis',
        to: '/announcement',
    },
    {
        title: 'Compre com segurança',
        subtitle: 'Converse direto com o vendedor pelo WhatsApp antes de fechar negócio.',
        cta: 'Ver anúncios',
        to: '/',
    },
    {
        title: 'Encontre o que você procura',
        subtitle: 'Milhares de anúncios espalhados por todas as categorias.',
        cta: 'Explorar categorias',
        to: '/',
    },
];

export default () => {

    const [categories, setCategories] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const scrollRef = useRef(null);

    const getCategories = async () => {
        setCategories([]);

        await Api.get('/categories').then((res) => {
            setCategories(res.data);
        });
    }

    const getAnnouncements = async () => {
        setAnnouncements([]);

        await Api.get('/announcements').then((res) => {
            setAnnouncements(res.data.data);
        });
    }

    useEffect(()=>{
        getCategories();
    }, [])

    useEffect(()=> {
        getAnnouncements();
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((current) => (current + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [])

    const goToSlide = (index) => {
        setSlideIndex((index + slides.length) % slides.length);
    }

    const scrollCategories = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    }

    return (
        <>
        <S.Container>
            <Header />
        </S.Container>

        <S.CategoryNavArea>
            <S.CategoryNavInner>
                <S.CategoryNavScroll ref={scrollRef}>
                    <S.CategoryNavItem as="button" type="button">
                        <GridIcon /> Categorias <ChevronDownIcon />
                    </S.CategoryNavItem>
                    <Link to="/"><S.CategoryNavItem><HeartIcon /> Favoritos</S.CategoryNavItem></Link>
                    <Link to="/"><S.CategoryNavItem><PercentIcon /> Cupons</S.CategoryNavItem></Link>
                    <Link to="/"><S.CategoryNavItem $active><BagIcon /> Tudo</S.CategoryNavItem></Link>

                    {categories && categories.map((item, key) => (
                        <Link to="/" key={key}>
                            <S.CategoryNavItem>
                                <S.CategoryNavIcon src={item.covercategory} />
                                {item.name}
                            </S.CategoryNavItem>
                        </Link>
                    ))}
                </S.CategoryNavScroll>
                <S.CategoryNavScrollButton type="button" onClick={scrollCategories} aria-label="Ver mais categorias">
                    <ChevronRightIcon />
                </S.CategoryNavScrollButton>
            </S.CategoryNavInner>
        </S.CategoryNavArea>

        <S.PromoArea>
            <S.PromoCarousel>
                <S.PromoArrow type="button" onClick={() => goToSlide(slideIndex - 1)} aria-label="Anterior">
                    <ChevronLeftIcon />
                </S.PromoArrow>

                <S.PromoContent>
                    <S.PromoTitle>{slides[slideIndex].title}</S.PromoTitle>
                    <S.PromoSubtitle>{slides[slideIndex].subtitle}</S.PromoSubtitle>
                    <Link to={slides[slideIndex].to}>
                        <S.PromoButton>{slides[slideIndex].cta}</S.PromoButton>
                    </Link>
                </S.PromoContent>

                <S.PromoArrow type="button" onClick={() => goToSlide(slideIndex + 1)} aria-label="Próximo">
                    <ChevronRightIcon />
                </S.PromoArrow>

                <S.PromoDots>
                    {slides.map((_, index) => (
                        <S.PromoDot key={index} $active={index === slideIndex} onClick={() => goToSlide(index)} />
                    ))}
                </S.PromoDots>
            </S.PromoCarousel>
        </S.PromoArea>

        <S.Announcements>
                <S.Title>Anúncios recentes</S.Title>


            <S.AnnouncementsArea>
            {announcements.map((item, key) => (

                <AnnouncementCard data={item} key={key} />
            ))}


            </S.AnnouncementsArea>
        </S.Announcements>


        </>
    )
}
