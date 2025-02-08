import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { Bio } from "@/components/Bio";
import { SectionCards } from "@/components/SectionCards";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <InfiniteSlider />
      <Bio />
      <SectionCards />
    </>
  );
}
