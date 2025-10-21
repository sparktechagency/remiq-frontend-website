import { IPricingPlan } from '@/types/subscription';
import { FaMusic, FaStar } from 'react-icons/fa';
  // Demo pricing plans data
  export const pricingPlans: IPricingPlan[] = [
    {
      id: 'free',
      title: 'Free Starter',
      icon: "",
      monthlyPrice: 0,
      yearlyPrice: 0,
      discount: 'Free Forever',
      description: 'Perfect for beginners getting started with music production',
      buttonText: 'Get Started Free',
      gradientFrom: 'from-gray-700',
      gradientTo: 'to-gray-800',
      iconColor: 'text-gray-400',
      features: [
        "Token Beat Marketplace Access",
        "Stem Uploads & Downloads",
        "Free Boosted Posts (5/month)",
        "Advanced Analytics Dashboard",
        "Artist Beat Request Feed",
        "Auto-license Templates",
        "Custom License Templates",
        "Priority Customer Support",
        "HD Audio Streaming"
      ]
    },
    {
      id: 'pro',
      title: 'Pro Creator',
      icon: "",
      monthlyPrice: 7.99,
      yearlyPrice: 79.99,
      discount: 'Save 20%',
      popular: true,
      description: 'Most popular plan for serious music producers',
      buttonText: 'Start Pro Trial',
      gradientFrom: 'from-slate-700',
      gradientTo: 'to-slate-800',
      iconColor: 'text-yellow-400',
      features: [
        "Everything in Free Starter",
        "Unlimited Stem Uploads",
        "Custom Branding & Domain",
        "Advanced Collaboration Tools",
        "White-label Player Embeds",
        "Advanced Sales Analytics",
        "Multi-format Downloads",
        "API Access for Integrations",
        "Dedicated Account Manager",
        "Priority Customer Support"
      ]
    },
    {
      id: 'premium',
      title: 'Premium Studio',
      icon: "",
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      discount: 'Save 25%',
      description: 'Professional studio-grade features for top producers',
      buttonText: 'Go Premium',
      gradientFrom: 'from-purple-700',
      gradientTo: 'to-purple-800',
      iconColor: 'text-purple-400',
      features: [
        "Everything in Pro Creator",
        "Unlimited Boosted Posts",
        "Advanced Analytics Dashboard",
        "Multi-user Team Management",
        "Advanced Rights Management",
        "Bulk Upload & Processing",
        "Custom Integration Support",
        "Advanced Reporting & Insights",
        "White-label Platform Option",
        "Priority Feature Requests",
        "24/7 Premium Support"
      ]
    }
  ];