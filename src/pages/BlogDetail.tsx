import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import { posts } from '@/data/PostList';
import { userInfo } from '@/data/Information';

export default function BlogDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    const filePath = `/posts/${slug}.md`;

    fetch(filePath)
      .then((res) => {
        return res.text();
      })
      .then((raw) => {
        setContent(raw);
      })
      .catch((err) => {
        setContent('# 404\nKhông tìm thấy bài viết');
        console.error(err);
      });
  }, [slug]);

  return (
    <>
      <section className="mh-blog">
        <div className="container">
          <div className="row section-separator">
            <div className="col-md-8">
              <div className="row">
                <div className="col-sm-12 col-md-12">
                  <div className="mh-blog-item dark-bg blog-single">
                    <img src={post?.thumnailUrl} alt="" className="img-fluid" />
                    <div className="blog-inner">
                      <h2>
                        <a href="#">{post?.title}</a>
                      </h2>
                      <div className="mh-blog-post-info">
                        <ul>
                          <li>
                            <strong>Post On</strong>
                            <a href="#">{post?.date}</a>
                          </li>
                          <li>
                            <strong>By</strong>
                            <a href="#">Dzunght</a>
                          </li>
                        </ul>
                      </div>

                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 ">
                  <div className="row mh-related-post">
                    <div className="mh-blog-next-prev-post col-md-6 text-left">
                      <a href="#">
                        <i className="fa fa-angle-left"></i> Previous post
                      </a>
                    </div>
                    <div className="mh-blog-next-prev-post col-md-6 text-right">
                      <a href="#">
                        Next post <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comment section */}
                {/* <div className="col-sm-12">
                  <div className="comments col-sm-12"></div>
                  <div className="clearfix"></div>
                  <div className="blog-form-inner col-sm-12">
                    <div className="post-comment-title">
                      <h3>Post your comment</h3>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="mh-blog-sidebar">
                <div className="sidebar-item mh-author-info dark-bg">
                  <div className="mh-author-img">
                    <div className="img-border">
                      <img src={userInfo.avatar} alt="" className="img-fluid" />
                    </div>
                  </div>
                  <h2>{userInfo.fullName}</h2>
                  <h4>{userInfo.role}</h4>
                  <p>{userInfo.shortName}</p>
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
                <div className="sidebar-item mh-blog-category dark-bg">
                  <h3>Category</h3>
                  <ul>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Techonology</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Photography</a>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-item mh-blog-category dark-bg">
                  <h3>Archive</h3>
                  <ul>
                    <li>
                      <a href="#">2018 (10)</a>
                    </li>
                    <li>
                      <a href="#">Techonology (8)</a>
                    </li>
                    <li>
                      <a href="#">Food (6)</a>
                    </li>
                    <li>
                      <a href="#">Travel (8)</a>
                    </li>
                    <li>
                      <a href="#">Photography (11)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
