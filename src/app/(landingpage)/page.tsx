import BannerSignUp from "@/components/organisms/BannerSignUp";
import Category from "@/components/organisms/Category";
import Clients from "@/components/organisms/Clients";
import FeaturedJob from "@/components/organisms/FeaturedJob";
import Hero from "@/components/organisms/Hero";
import LatestJob from "@/components/organisms/LatestJob";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute w-2/3 h-screen top-0 right-0 -z-10">
        <Image src="/images/pattern.png" alt="/images/pattern.png" fill />
      </div>
      <div className="px-32 mb-10">
        <Hero />
        <Clients />
        <Category />
        <BannerSignUp />
        <FeaturedJob />
        <LatestJob />
      </div>
    </>
  );
}
