import Image from "next/image";
import CampaignImage from "@/public/campaign-image.png";

export default function CampaignSection() {
  return (
    <section className="container mx-auto w-full px-10 max-md:px-5 py-32 max-md:py-16">
      <div className="rounded-xl h-72 m-auto w-full relative overflow-hidden">
        <Image
          src={CampaignImage}
          alt="Campaign Image"
          width={1000}
          height={700}
          className="object-cover z-0 w-full h-full"
        />
        <div className="bg-text/40 absolute left-0 w-2/6 h-72 shadow-xl shadow-text top-0 flex items-center font-bold text-center text-secondary p-4">
          <span className="text-5xl">
            Shock discount on electronic products
          </span>
        </div>
      </div>
    </section>
  );
}
