import React, { useEffect, useState } from "react";
import "./blogs.css";
import arrowImg from "../../assets/img/span_arrow.png";
import moment from "moment";
import { getAllBlogs } from "../../utils/blogService";

const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    blogDetails();
  }, []);

  const blogDetails = async () => {
    const res = await getAllBlogs();
    setData(res.data.data);
  };

  return (
    <>
      <div className="blogs__container">
        <div className="blogs__positions">
          <div className="blog__header">
            <div className="blog__heading">
              <h3>Blogs</h3>
            </div>
            <div className="view__btn">
              <span>View All</span>
              <span className="span__arrow">
                <img src={arrowImg} alt="arrow" />
              </span>
            </div>
          </div>
          <div className="blog__posts">
            <div className="post__container">
              {data.slice(0, 3).map((item) => (
                <div className="posts" key={item.id}>
                  <img src={item.image_url} alt="blog" className="post__img" />
                  <h6 className="post__heading">{item.name}</h6>
                  <p className="post__date">
                    {moment(item.createdAt).format("MMM Do YY")} By{" "}
                    <span>{item.writer_name}</span>
                  </p>
                  <p className="post__desc">{item.short_description}</p>
                </div>
              ))}

              {/* <div className="posts">
                    <img src={blogImg} alt="blog" className='post__img'/>
                        <h6 className='post__heading'>Account management tips</h6>
                        <p className='post__date'>May 13 2019 By <span>Allison Fox</span></p>
                        <p className='post__desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
                    </div>
                    <div className="posts">
                    <img src={blogImg} alt="blog" className='post__img'/>
                        <h6 className='post__heading'>Account management tips</h6>
                        <p className='post__date'>May 13 2019 By <span>Allison Fox</span></p>
                        <p className='post__desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
