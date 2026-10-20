# Implementation Plan - Dynamic SEO & Structured Data Management (`SEO.tsx`)

Implement a lightweight, dependency-free `SEO.tsx` component that dynamically synchronizes the document `<head>` metadata (page title, meta descriptions, OpenGraph, Twitter cards, robots, and Schema.org JSON-LD structured data) based on the current view and modal states in the AVRO web application.

---

## User Review Required

> [!IMPORTANT]
> Based on your clarifying answers:
> - **Zero External Dependencies**: The implementation will use native React hooks (`useEffect`) to manipulate `document.title`, `<meta>` tags, and dynamic `<script type="application/ld+json">` elements without installing heavy external packages like `react-helmet` or `react-helmet-async`.
> - **View Contexts Supported**:
>   - **Main Landing View**: "AVRO - 수학 문항 조판 & 에듀테크 테크 에이전시"
>   - **Sample Request Modal Active**: "샘플 3문항 무료 변환 신청 | AVRO 수학 문항 조판"
>   - **General Inquiry Modal Active**: "조판 및 외주 견적 상담 문의 | AVRO 수학 문항 조판"
>   - **Terms / Privacy Modal Active** (supplemental fallback)
> - **Rich Snippets (JSON-LD)**: Injects and updates Schema.org `ProfessionalService` and `Organization` structured data with accurate geo-location, service catalog, and contact information.

---

## Proposed Changes

### Dynamic SEO Component

#### [NEW] `src/components/SEO.tsx`
- Create a standalone React component accepting props:
  - `title?: string`
  - `description?: string`
  - `keywords?: string`
  - `ogTitle?: string`
  - `ogDescription?: string`
  - `ogType?: string`
  - `canonicalUrl?: string`
  - `structuredData?: Record<string, any> | Array<Record<string, any>>`
- Implement robust DOM update utility inside `useEffect`:
  - Dynamically updates `document.title`.
  - Searches for existing `<meta name="...">`, `<meta property="...">`, and `<link rel="canonical">` or creates them if absent.
  - Updates or creates `<script type="application/ld+json" id="dynamic-seo-jsonld">` with the provided structured data graph.
  - Restores default base metadata on unmount or transition.
- Define default preconfigured metadata constants and Schema.org schemas (`Organization`, `ProfessionalService`) tailored to AVRO's services (수학 문항 조판, 수식 타이핑, HWP 변환, 3문항 무료 샘플 테스트).

---

### App Integration

#### `src/App.tsx`
- Import `SEO` from `./components/SEO`.
- Compute the active SEO configuration based on state:
  - `isContactModalOpen && modalMode === 'sample'`: Free 3-item sample conversion SEO metadata and specific Offer structured data.
  - `isContactModalOpen && modalMode === 'inquiry'`: Quotation and enterprise consultation SEO metadata.
  - `modalPolicy !== null`: Terms & Privacy policy metadata.
  - Default: Main landing page with full `ProfessionalService` & `Organization` graph.
- Mount `<SEO ... />` at the root of `App.tsx`.

---

## Verification Plan

### Automated Tests & Checks
- Run `compile_applet` to verify TypeScript types and build integrity.
- Run `lint_applet` to ensure ESLint compliance.

### Manual / Browser Verification
- Verify initial page load: `document.title` reflects the default AVRO title, and `head` contains matching meta tags and JSON-LD.
- Trigger "무료 샘플 3문항 신청" button: check that `document.title` updates dynamically to the sample request title, and meta description updates.
- Switch or open "견적·협업 문의": check that `document.title` and meta tags reflect the quotation inquiry state.
- Close modal: check that metadata cleanly restores to the main landing page metadata.
- Validate JSON-LD script content using JSON parser to ensure valid Schema.org syntax.
