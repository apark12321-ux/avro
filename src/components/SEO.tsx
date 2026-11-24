import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_SEO = {
  title: 'AVRO — 소상공인·자영업자·전문직 맞춤형 AI 솔루션 · SEO 마케팅 개발사',
  description:
    '법무·세무·회계·병원·부동산부터 카페·식당·베이커리·학원·동네 매장까지. 업무 자동화 AI 솔루션과 검색 최적화(SEO/GEO)·마케팅 홍보 세팅을 함께 구축합니다.',
  keywords:
    'AI 솔루션 개발, 자영업자 AI, 소상공인 AI 자동화, 전문직 AI, 검색 최적화 SEO, GEO AI 검색 노출, 소상공인 마케팅 홍보, 병원 예약 자동화, 세무 AI, 개인사업자 맞춤 소프트웨어, AVRO, 에이브로',
  ogType: 'website',
  ogUrl: 'https://avro.co.kr',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

export const DEFAULT_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://avro.co.kr/#organization',
      name: 'AVRO',
      alternateName: '주식회사 에이브로',
      url: 'https://avro.co.kr',
      email: 'ceo@avro.co.kr',
      description:
        '자영업자, 소상공인, 전문직 및 개인사업자를 위한 맞춤형 AI 업무 자동화 솔루션과 검색 최적화(SEO/GEO)·홍보 시스템을 개발하는 AI 전문 개발사',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '청라에메랄드로 99',
        addressLocality: '인천광역시 서구',
        addressRegion: '인천광역시',
        addressCountry: 'KR',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://avro.co.kr/#service',
      name: 'AVRO 맞춤형 AI 솔루션 및 검색 최적화(SEO) 개발 서비스',
      description:
        '법무, 세무, 회계, 병원, 약국, 부동산, 카페, 식당, 베이커리, 학원, 휴대폰 판매점, 세탁소, 과일가게, 정육점 등 업종 특화 AI 자동화 및 SEO·마케팅 홍보 세팅.',
      url: 'https://avro.co.kr',
      email: 'ceo@avro.co.kr',
      areaServed: 'KR',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '업종별 맞춤형 AI 솔루션 및 SEO 마케팅',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '무료 AI 업무 진단 및 시안 제안',
              description: '업종별 반복 업무 분석과 맞춤형 AI 자동화 화면·견적 사전 제안',
            },
            price: '0',
            priceCurrency: 'KRW',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '맞춤형 AI 고객 응대·예약·정산·전용 웹앱 개발',
              description: '카카오톡 채널·알림톡·네이버 예약·POS·문서 자동화를 하나로 연결하는 전용 AI 소프트웨어 구축',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '검색 최적화(SEO/GEO) 및 AI 마케팅 홍보 세팅',
              description: '네이버·구글·AI 검색 상위 노출 구조 세팅 및 업종별 홍보·단골 알림 자동화',
            },
          },
        ],
      },
    },
  ],
};

function setMetaTag(attributeName: 'name' | 'property', attributeValue: string, content: string) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonicalLink(href: string) {
  if (!href) return;
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

function setJsonLdScript(data: Record<string, unknown> | Array<Record<string, unknown>>) {
  const scriptId = 'dynamic-seo-jsonld';
  let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = scriptId;
    scriptElement.type = 'application/ld+json';
    document.head.appendChild(scriptElement);
  }
  scriptElement.textContent = JSON.stringify(data, null, 2);
}

export const SEO: React.FC<SEOProps> = ({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  ogTitle,
  ogDescription,
  ogType = DEFAULT_SEO.ogType,
  ogUrl = DEFAULT_SEO.ogUrl,
  canonicalUrl = DEFAULT_SEO.ogUrl,
  robots = DEFAULT_SEO.robots,
  structuredData = DEFAULT_STRUCTURED_DATA,
}) => {
  useEffect(() => {
    document.title = title;

    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', robots);

    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', ogUrl);

    setMetaTag('name', 'twitter:title', ogTitle || title);
    setMetaTag('name', 'twitter:description', ogDescription || description);

    if (canonicalUrl) {
      setCanonicalLink(canonicalUrl);
    }

    if (structuredData) {
      setJsonLdScript(structuredData);
    }
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogType,
    ogUrl,
    canonicalUrl,
    robots,
    structuredData,
  ]);

  return null;
};

export default SEO;
