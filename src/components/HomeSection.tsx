import { motion } from 'framer-motion';

const userInfo = {
  name: 'Hoàng Trí Dũng',
  avatar: '/assets/images/avatar.jpg',
  role: 'Project Manager / Web developer',
  email: 'dzunght95@gmail.com',
  phone: '(+84)-334-xxx-525',
  location: 'Hanoi, Vietnam',
  socials: [
    { iconClass: 'fa fa-github', url: 'https://github.com/DzungHT' },
    { iconClass: 'fa fa-linkedin', url: 'https://www.linkedin.com/in/dzunght95/' },
    { iconClass: 'fa fa-facebook', url: 'https://www.facebook.com/dz.optimus' },
  ],
};

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
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 1.5, delay: 0.3 }}
            >
              <div className="hero-img">
                <div className="img-border">
                  <img src={userInfo.avatar} alt="dzunght" className="img-fluid" />
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
