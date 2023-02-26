import React from "react";

import Layout from "components/Layout";
import HeroSection from "@/components/Home/HeroSection";
import OurPartners from "@/components/Home/OurPartners";
import WhyJoin from "@/components/Home/WhyJoin";
import ProcessFlow from "@/components/Home/ProcessFlow";
import Contact from "@/components/Home/Sponsor"; 

const Home: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <OurPartners />
      <ProcessFlow />
      <WhyJoin />
      <Contact />
    </Layout>
  );
};

export default Home;
