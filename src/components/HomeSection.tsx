import { FaFacebook, FaTwitter, FaGithub, FaDribbble, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

export default function HomeSection() {
  return (
    <section
      id="mh-home"
      className="min-h-screen flex items-center relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/home-bg-img.jpg)' }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-10">
        <div className="md:w-1/2 text-white space-y-4">
          <span className="text-lg">Hello I'm</span>
          <h2 className="text-4xl font-bold">Alex Johnson</h2>
          <h4 className="text-xl">Product Designer</h4>
          <ul className="space-y-1">
            <li className="flex items-center gap-2"><FaEnvelope /> <a href="mailto:getemail@email.com">getemail@email.com</a></li>
            <li className="flex items-center gap-2"><FaPhone /> <a href="callto:+129869877867">+12 986 987 7867</a></li>
            <li className="flex items-center gap-2"><FaMapMarker /> <address className="not-italic">37, Pollsatnd, New York, United State</address></li>
          </ul>
          <ul className="flex space-x-4 mt-4">
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
            <li><a href="#"><FaGithub /></a></li>
            <li><a href="#"><FaDribbble /></a></li>
          </ul>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-white w-64 h-64">
            <img src="/assets/images/hero.png" alt="Hero" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}