import ProductSection from "@/components/ui/shop/ProductSection";
import FiltersSection from "@/components/ui/shop/FiltersSection";
import BrandFilter from "@/components/ui/shop/filters/BrandFilter";
import BodyFilter from "@/components/ui/shop/filters/BodyFilter";
import StyleFilter from "@/components/ui/shop/filters/StyleFilter";
import ColorFilter from "@/components/ui/shop/filters/ColorFilter";
import PriceRangeFilter from "@/components/ui/shop/filters/PriceRangeFilter";
import SellerFilter from "@/components/ui/shop/filters/SellerFİlter";

export default function page() {
  return (
    <div className="w-full flex items-start h-auto py-5 justify-center container mx-auto gap-5">
      <FiltersSection>
        <PriceRangeFilter />
        <BrandFilter />
        <BodyFilter />
        <StyleFilter />
        <ColorFilter />
        <SellerFilter />
      </FiltersSection>
      <div className="flex-1 h-full">
        <ProductSection />
      </div>
    </div>
  );
}
