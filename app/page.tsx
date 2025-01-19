import CampaignSection from "@/components/ui/home/CampaignSection";
import Footer from "@/components/ui/home/Footer";
import Header from "@/components/ui/home/Header";
import ProductSection from "@/components/ui/home/ProductSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <Header />
      <CampaignSection />
      <ProductSection />
      <Footer />
    </div>
  );
}
