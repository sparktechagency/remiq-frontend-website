export interface IPricingPlan {
  id: string;
  title: string;
  icon: React.ReactNode;
  monthlyPrice: number;
  yearlyPrice: number;
  discount: string;
  popular?: boolean;
  features: string[];
  description: string;
  buttonText: string;
  gradientFrom: string;
  gradientTo: string;
  iconColor: string;
}