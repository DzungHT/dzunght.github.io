import { motion } from 'framer-motion';
import { userInfo } from '@/data/Information';

interface PersonalInfo {
  iconClass: string;
  text: string;
  link: string;
}
const personalInfo: PersonalInfo[] = [
  {
    iconClass: 'fa fa-briefcase',
    text: '10+ years of work experience in software development.',
    link: `#`,
  },
  {
    iconClass: 'fa fa-envelope',
    text: userInfo.email,
    link: `mailto:${userInfo.email}`,
  },
  {
    iconClass: 'fa fa-phone',
    text: userInfo.phone,
    link: `#`,
  },
  {
    iconClass: 'fa fa-map-marker',
    text: userInfo.location,
    link: `#`,
  },
];

const HomeSection = () => {
  return (
    <section className="mh-home image-bg home-2-img" id="mh-home">
      <div className="img-foverlay img-color-overlay">
        <div className="container">
          <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
            {/* Left side: Info */}
            <motion.div
              className="col-sm-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="mh-header-info">
                <div className="mh-promo">
                  <span>Hello I'm</span>
                </div>
                <h2>{userInfo.fullName}</h2>
                <h4>{userInfo.role}</h4>
                <ul>
                  {personalInfo.map((item, index) => (
                    <li key={index}>
                      <i className={item.iconClass} />
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </ul>
                <ul className="social-icon">
                  {userInfo.socials.map((item, index) => (
                    <li key={index}>
                      <a href={item.url}>
                        <i className={item.iconClass}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right side: Avatar */}
            <motion.div
              className="col-sm-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <div className="hero-img">
                <div className="img-border">
                  <img src={userInfo.avatar} alt={userInfo.shortName} className="img-fluid" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
