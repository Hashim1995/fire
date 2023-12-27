import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogOne = ({ item }) => {

  return (
    <>
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details__left">
                <div className="blog-details__img">
                  <img alt="img " style={{
                    objectFit: 'cover'
                  }} height={500} src={`https://ivisaapp.azurewebsites.net/${item?.imageUrl}`} title="Vixoz" />

                  <div className="blog-details__date">
                    {item?.date}
                  </div>
                </div>
                <div className="blog-details__content">
                  <ul className="list-unstyled blog-details__meta">
                    <li>
                      <Link href="/news-details">
                        <i className="fas fa-user-circle"></i> {item?.author}
                      </Link>{" "}
                    </li>

                  </ul>
                  <h3 className="blog-details__title font-weight-600">{item?.title}</h3>
                  {item?.description}
                </div>



              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="sidebar">

                <div className="sidebar__single sidebar__post">
                  <h3 className="sidebar__title">Latest Posts</h3>
                  <ul className="sidebar__post-list list-unstyled">
                    <li>
                      <div className="sidebar__post-image">
                        {" "}
                        <img alt="img " src="/images/resource/news-2.jpg" title="Vizox" />{" "}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          {" "}
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle"></i>Admin
                          </span>{" "}
                          <Link href="/news-details">Top crypto exchange influencers</Link>
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        {" "}
                        <img alt="img " src="/images/resource/news-2.jpg" title="Vizox" />{" "}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          {" "}
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle"></i>Admin
                          </span>{" "}
                          <Link href="/news-details">Necessity may give us best virtual court</Link>{" "}
                        </h3>
                      </div>
                    </li>
                    <li>
                      <div className="sidebar__post-image">
                        {" "}
                        <img alt="img " src="/images/resource/news-3.jpg" title="Vizox" />{" "}
                      </div>
                      <div className="sidebar__post-content">
                        <h3>
                          {" "}
                          <span className="sidebar__post-content-meta">
                            <i className="fas fa-user-circle"></i>Admin
                          </span>{" "}
                          <Link href="/news-details">You should know about business plan</Link>{" "}
                        </h3>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="sidebar__single sidebar__tags">
                  <h3 className="sidebar__title">Tags</h3>
                  <div className="sidebar__tags-list">
                    {" "}
                    {item?.tags?.map(z => <p key={z} >{z}</p>)}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogOne;
