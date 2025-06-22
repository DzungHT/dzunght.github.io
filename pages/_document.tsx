import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title + Meta SEO */}
        <title>Hoang Tri Dung | Project Manager & Software Engineer</title>
        <meta
          name="description"
          content="I'm Hoang Tri Dung, a Project Manager with a software engineering background. 10+ years of experience in fullstack development, Agile team leadership, and software project management."
        />
        <meta name="developer" content="dzunght95" />
        <meta
          name="keywords"
          content="Hoàng Trí Dũng, Project Manager, quản lý dự án phần mềm, software project manager, agile, scrum, software engineer, kỹ sư phần mềm, quản lý đội dev, fullstack developer, React, .NET"
        />
        <meta property="og:title" content="Hoàng Trí Dũng | Portfolio cá nhân" />
        <meta property="og:description" content="Lập trình viên Fullstack, 10+ năm kinh nghiệm. Xem các dự án nổi bật của tôi." />
        <meta property="og:image" content="https://dzunght.github.io/assets/images/preview.png" />
        <meta property="og:url" content="https://dzunght.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        {/* Favicon and Web App */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="DzungHT" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Loader CSS */}
        <link rel="stylesheet" href="/assets/css/loader.css" />

        {/* Fonts + Icons */}
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        <link rel="stylesheet" href="/assets/icons/font-awesome-4.7.0/css/font-awesome.min.css" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hoàng Trí Dũng',
              alternateName: 'Hoang Tri Dung',
              jobTitle: 'Project Manager - Quản lý dự án phần mềm',
              description:
                'Tôi là Hoàng Trí Dũng – quản lý dự án phần mềm với nền tảng kỹ sư lập trình. Hơn 10 năm kinh nghiệm phát triển hệ thống với Java, .NET và dẫn dắt team Agile/Water Fall hiệu quả.',
              url: 'https://dzunght.github.io/',
              sameAs: ['https://www.linkedin.com/in/dzunght95', 'https://github.com/DzungHT'],
              knowsAbout: ['Quản lý dự án phần mềm', 'Agile', 'Scrum', 'Water Fall', 'Jave', '.NET', 'Fullstack Development', 'ReactJS', 'VueJS'],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hà Nội',
                addressCountry: 'Việt Nam',
              },
            }),
          }}
        />
      </Head>
      <body className="dark-vertion black-bg">
        {/* Loader sẽ được render lại bằng React nếu bạn muốn giữ */}
        <div id="global-loader" className="section-loader">
          <div className="loader">
            <div></div>
            <div></div>
          </div>
        </div>

        {/* App content sẽ được Next.js render tại đây */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
