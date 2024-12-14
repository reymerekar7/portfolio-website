import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}