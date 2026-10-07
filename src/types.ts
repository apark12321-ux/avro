/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TimelineEvent {
  description: string;
  isHighlight?: boolean;
}

export interface TimelineItem {
  year: string;
  events: TimelineEvent[];
}

export interface SubServiceItem {
  id: string;
  name: string;
  category: 'munhang' | 'homepage' | 'youtube';
  tagline: string;
  keywords: string[];
  description: string;
  features: string[];
  turnaroundTime: string;
  priceNote?: string;
  badge?: string;
}

export interface ServiceCategory {
  id: 'munhang' | 'homepage' | 'youtube';
  num: string;
  title: string;
  subtitle: string;
  englishTitle: string;
  description: string;
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  domain?: string;
  tags: string[];
  description: string;
  isFeatured?: boolean;
  status: 'LIVE' | 'LAUNCHING SOON' | 'CASE STUDY';
}

export interface PartnerItem {
  name: string;
  type: string;
  isHighlight?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  englishTitle: string;
  description: string;
}

export interface GuideItem {
  id: string;
  title: string;
  category: string;
  keyword: string;
  readTime: string;
  summary: string;
  keyPoints: string[];
}

export interface SampleRequestData {
  name: string;
  organization: string;
  contact: string;
  email: string;
  serviceType: string;
  notes: string;
  requestNda: boolean;
  fileName?: string;
}
