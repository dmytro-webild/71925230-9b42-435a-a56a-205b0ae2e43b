"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Clock, Flame, Gauge, Shield, ShieldCheck, Truck, Users, Wind, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Services", id: "features" },
        { name: "About", id: "about" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Patriot Heating and Cooling LLC"
      button={{ text: "(706) 305-4974", href: "tel:7063054974" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Patriot Heating and Cooling LLC"
      description="Professional HVAC solutions for your home and business. Always on time, always reliable. Providing premium comfort in every season."
      tag="24/7 Emergency Service"
      buttons={[{ text: "Free Estimates", href: "#contact" }]}
      titleClassName="text-5xl md:text-7xl font-extrabold"
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CzzCyGg9qWO1sPMhfX3ty0YMRu/uploaded-1777404208405-h0r8v34e.jpg",          imageAlt: "Professional HVAC technician servicing a residential unit"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CzzCyGg9qWO1sPMhfX3ty0YMRu/uploaded-1777404246385-nkk5te0e.jpg",          imageAlt: "Modern home heating system and ductwork"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 500+ local families"
      tagIcon={Zap}
      tagAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { icon: Flame, title: "System Repair", description: "Rapid response for any breakdown." },
        { icon: Gauge, title: "Installation", description: "High-efficiency systems for new builds." },
        { icon: ShieldCheck, title: "Maintenance", description: "Preventative care to save energy." },
        { icon: Wind, title: "Air Quality", description: "Purification and filtration solutions." },
        { icon: Zap, title: "Energy Audits", description: "Optimizing system performance." },
      ]}
      title="Our Expert Services"
      description="Comprehensive heating and cooling care to keep your environment perfect."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Why Choose Patriot"
      metrics={[
        { icon: Clock, label: "Years Experience", value: "15+" },
        { icon: Truck, label: "Emergency Calls", value: "24/7" },
        { icon: Award, label: "Happy Clients", value: "1,000+" },
        { icon: Shield, label: "Licensed Professionals", value: "100%" },
        { icon: Users, label: "Team Members", value: "50+" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "1", name: "John Doe", handle: "@johnd", testimonial: "Fast, reliable, and professional.", imageSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
        { id: "2", name: "Jane Smith", handle: "@janes", testimonial: "My AC died during a heatwave and they were here within an hour.", imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
        { id: "3", name: "Bob Lee", handle: "@bob", testimonial: "Great experience, very transparent pricing.", imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
        { id: "4", name: "Alice Wang", handle: "@alicew", testimonial: "Polite technicians and excellent cleanup.", imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
        { id: "5", name: "Charlie Brown", handle: "@charlie", testimonial: "Highly recommended for all heating needs.", imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
      ]}
      title="Customer Stories"
      description="Why our neighbors choose us for their HVAC needs."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        { id: "basic", name: "Maintenance", price: "$89", features: ["Seasonal Tune-up", "Filter Check", "Priority Scheduling"], buttons: [{ text: "Book Now" }] },
        { id: "pro", name: "Deep Clean", price: "$199", features: ["Full System Flush", "Coil Sanitization", "Energy Audit"], buttons: [{ text: "Book Now" }] },
        { id: "prem", name: "Premium Care", price: "$399", features: ["Annual Coverage", "All Repairs Included", "24/7 Hotline"], buttons: [{ text: "Book Now" }] },
      ]}
      title="Transparent Pricing"
      description="Simple plans for your home comfort needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Do you offer financing?", content: "Yes, we offer flexible payment plans." },
        { id: "q2", title: "What areas do you serve?", content: "We serve the entire metro area." },
        { id: "q3", title: "Are you licensed and insured?", content: "Yes, we are fully licensed and insured." },
        { id: "q4", title: "Is emergency service available?", content: "Our team is available 24/7 for emergency repairs." },
        { id: "q5", title: "How often should I change filters?", content: "We recommend every 3 months for optimal efficiency." },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      text="Ready to get started? Contact us today for a free estimate on any new installation."
      buttons={[{ text: "Call Now", href: "tel:7063054974" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Services", href: "#features" }, { label: "About", href: "#about" }, { label: "Pricing", href: "#pricing" }] },
        { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }, { label: "Careers", href: "#" }] },
      ]}
      logoText="Patriot HVAC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}