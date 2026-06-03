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

export interface ServiceItem {
  num: string;
  title: string;
  englishTitle: string;
  description: string;
  items: string[];
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
}
