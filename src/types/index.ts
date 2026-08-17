export interface ProductItem {
  id: string;
  name: string;
  category: 'books' | 'competitive' | 'stationery' | 'gifts' | 'idcards';
  subcategory: string;
  description: string;
  popular?: boolean;
  priceTag?: string;
  iconName: string;
  features: string[];
}

export interface PrintingServiceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
  features: string[];
  startingPrice?: string;
}

export interface ProjectStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
}

export interface AdvantageItem {
  iconName: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
