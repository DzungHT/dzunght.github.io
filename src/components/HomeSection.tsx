import { motion } from 'framer-motion';

// import "./HomeSection.scss";
import avatar from '@/assets/images/avatar.jpg';
import homeBgImage from '@/assets/images/wp10271263-4k-workspace-desktop-wallpapers.jpg';

const userInfo = {
  name: 'Hoàng Trí Dũng',
  role: 'Project Manager / Web developer',
  email: 'dzunght95@gmail.com',
  phone: '(+84)-334-xxx-525',
  location: 'Hanoi, Vietnam',
  socials: [
    { iconClass: 'fa fa-facebook', url: 'https://www.facebook.com/dz.optimus' },
    { iconClass: 'fa fa-linkedin', url: 'https://www.linkedin.com/in/dzunght95/' },
    { iconClass: 'fa fa-github', url: 'https://github.com/DzungHT' },
  ],
};

const HomeSection = () => {
  return (
    <section className="mh-home image-bg" id="mh-home" style={{ backgroundImage: `url(${homeBgImage})` }}>
      <div className="img-foverlay img-color-overlay">
        <div className="container">
          <div className="row section-separator xs-column-reverse vertical-middle-content home-padding">
            {/* Left side: Info */}
            <motion.div
              className="col-sm-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mh-header-info">
                <div className="mh-promo">
                  <span>Hello I'm</span>
                </div>
                <h2>{userInfo.name}</h2>
                <h4>{userInfo.role}</h4>
                <ul>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                  </li>
                  <li>
                    <i className="fa fa-phone" />
                    <a href={`callto:${userInfo.phone}`}>{userInfo.phone}</a>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <address>{userInfo.location}</address>
                  </li>
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
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="hero-img">
                <div className="img-border">
                  <img src={avatar} alt="Hero" className="img-fluid" />
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
