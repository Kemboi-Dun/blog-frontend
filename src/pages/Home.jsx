import React, { useEffect, useState } from "react";
import { getApi } from "../api/Api";
import { Link } from "react-router-dom";

function Home() {
  // demo data
  const demo = [
    {
      id: 1,
      title: "This is the first blog.",
      body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones",
      image:
        "https://www.thaipbsworld.com/wp-content/uploads/2023/04/Untitled-design-14-600x338.png",
    },
    {
      id: 2,
      title: "This is the second blog.",
      body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones Analysis: Jennifer Garner's return to TV much appreciated Hollywood writers vote on strike: ‘At stake the viability of TV as a career’ Silicon valediction? Our road trip to t industry hotspots as the sector cools When Will Apple Launch the iPad Mini 7?",
      image:
        "https://s.abcnews.com/images/International/wirestory_0ea339b7be33090b222169fd433cf51c_16x9_992.jpg",
    },
  ];
  const [blogs, setBlogs] = useState([]);

  const getBlogs = () => {
    getApi
      .get()
      .then((res) => {
        console.log(res.data.articles);
        setBlogs(res.data.articles);
      })
      .catch(() => {
        alert("Error fetching blogs..");
      });
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="home_container">
     
        <div className="blog_wrapper">
          {demo.map((blog) => (

            <div className="blog" key={blog.id}>

              <div className="content">

                <Link className="link" to={`/post/${blog.id}`}>
                  <h1>{blog.title}</h1>
                </Link>

                <p>{blog.body}</p>

                <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text"> <Link className="link" to={`/post/${blog.id}`}>
                  Read More
                </Link></span>
</button>

              </div>

              <div className="blog_image">
                <img src={blog.image} alt="" />
              </div>

            </div>

          ))}
        </div>
    
    </div>
  );
}

export default Home;
