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
  title: 'AVRO - 수학 문항 조판 & 에듀테크 테크 에이전시',
  description:
    '수학·과학 시험지 PDF를 출판 인쇄 규격 HWP로 완벽 변환하는 전문 기업. 수식 타이핑, 캡처본 고화질 업스케일, 학원 교재 템플릿 맞춤 조판. 샘플 3문항 무료 테스트 제공.',
  keywords:
    '수학 문항 조판, 수학 문제 한글 타이핑, PDF HWP 변환, 수식 조판 외주, 학원 시험지 제작, 한글 수식 입력, 기출문제 HWP 전산화, 수식 타이핑 외주, 인천 서구 청라 조판, 에듀테크 전문 외주',
  ogType: 'website',
  ogUrl: 'https://avro.co.kr',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

// Default Schema.org Graph for Organization and ProfessionalService
export const DEFAULT_STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://avro.co.kr/#organization',
      name: 'AVRO',
      alternateName: '에이브로',
      url: 'https://avro.co.kr',
      logo: 'https://avro.co.kr/logo.png',
      email: 'ceo@avro.co.kr',
      description:
        '수학·과학 시험지 PDF를 인쇄 출판 규격 한글(HWP)로 완벽 변환 조판하는 에듀테크 테크 에이전시',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '청라에메랄드로 99',
        addressLocality: '인천광역시 서구',
        addressRegion: '인천광역시',
        addressCountry: 'KR',
      },
      sameAs: [],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://avro.co.kr/#service',
      name: 'AVRO 수학 문항 조판 및 HWP 전산화 서비스',
      description:
        '수학·과학 복합 수식 100% 한글 수식 개체 입력, 저해상도 캡처 도판 고화질 업스케일, 학원 및 출판사 전용 규격 1:1 맞춤 조판 납품.',
      url: 'https://avro.co.kr',
      email: 'ceo@avro.co.kr',
      priceRange: '₩₩',
      areaServed: 'KR',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '수학 조판 및 문서 변환 서비스',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '샘플 3문항 무료 변환 테스트',
              description:
                '실제 보유 원고 3문항을 고객사 전용 한글 HWP 규격으로 무상 변환해 드리는 사전 품질 검증 서비스',
            },
            price: '0',
            priceCurrency: 'KRW',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'PDF 및 캡처본 한글(HWP) 정밀 조판 변환',
              description:
                '수학·과학 복잡 수식 개체화, 도판 300dpi 벡터화/업스케일, 출판 인쇄 규격 완성본 납품',
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

/**
 * Lightweight, dependency-free React component for dynamic document head & meta tag management.
 */
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
    // 1. Update Document Title
    document.title = title;

    // 2. Primary Meta Tags
    setMetaTag('name', 'title', title);
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'robots', robots);

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', ogTitle || title);
    setMetaTag('property', 'og:description', ogDescription || description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', ogUrl);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:title', ogTitle || title);
    setMetaTag('name', 'twitter:description', ogDescription || description);

    // 5. Canonical Link
    if (canonicalUrl) {
      setCanonicalLink(canonicalUrl);
    }

    // 6. Schema.org JSON-LD Structured Data
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
