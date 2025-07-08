import { Metadata } from 'next';
import AboutMeSection from './_components/home-page/AboutMeSection';
import HomeSection from './_components/home-page/HomeSection';
import ServicesSection from './_components/home-page/ServicesSection';
import ResumeSection from './_components/home-page/ResumeSection';

export const metadata: Metadata = {
  title: 'Hoang Tri Dung | Project Manager & Software Engineer',
  description:
    "I'm Hoang Tri Dung, a Project Manager with a software engineering background. 10+ years of experience in fullstack development, Agile team leadership, and software project management.",
};

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <ServicesSection />
      <ResumeSection />
    </>
  );
}
