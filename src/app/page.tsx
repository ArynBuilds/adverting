import { Header } from '@/components/marketing/Header';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { Hero } from '@/components/marketing/Hero';
import { ThreeStepExplainer } from '@/components/marketing/ThreeStepExplainer';
import { TrendTickerSection } from '@/components/marketing/TrendTickerSection';
import { SplitFlow } from '@/components/marketing/SplitFlow';
import { PriorityEngineDemo } from '@/components/marketing/PriorityEngineDemo';
import { LearningLoop } from '@/components/marketing/LearningLoop';
import { Pricing } from '@/components/marketing/Pricing';
import { RoiCalculator } from '@/components/marketing/RoiCalculator';
import { News } from '@/components/marketing/News';
import { Faq } from '@/components/marketing/Faq';
import { Footer } from '@/components/marketing/Footer';

export default function HomePage(): React.ReactElement {
  return (
    <main className="relative">
      <Header />
      <ScrollProgress />
      <Hero />
      <ThreeStepExplainer />
      <TrendTickerSection />
      <SplitFlow />
      <PriorityEngineDemo />
      <LearningLoop />
      <Pricing />
      <RoiCalculator />
      <News />
      <Faq />
      <Footer />
    </main>
  );
}
