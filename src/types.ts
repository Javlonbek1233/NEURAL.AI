export type Page = 'home' | 'products' | 'solutions' | 'pricing' | 'contact';

export interface ProductItem {
  id: string;
  name: string;
  badge: string;
  description: string;
  capabilities: string[];
  specs: { label: string; value: string }[];
  accentColor: string;
}

export interface MetricStat {
  label: string;
  value: string;
  trend?: string;
  subtext: string;
}

export interface DemoPrompt {
  id: string;
  tabLabel: string;
  promptText: string;
  simulatedResponse: string;
  nodesCount: number;
  avgLatency: string;
  status: 'optimal' | 'warning' | 'standby';
}
