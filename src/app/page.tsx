"use client";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import { InfiniteSlider } from "@/components/InfiniteSlider";
import { Bio } from "@/components/Bio";
import { SectionProjetos } from "@/components/SectionProjetos";
import SectionCertificados from "@/components/SectionCertificados";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <MainSection />
      <InfiniteSlider />
      <Bio />
      <SectionProjetos />
      <SectionCertificados />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
