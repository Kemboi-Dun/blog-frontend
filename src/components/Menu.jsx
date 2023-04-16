import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  // demo data
  const posts = [
    {
      id: 1,
      title: "This is my first blog on how to write readable code.",
      body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones",
      image:
        "https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbGFuaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "This is the second blog on how to write readable code.",
      body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones Analysis: Jennifer Garner's return to TV much appreciated Hollywood writers vote on strike: ‘At stake the viability of TV as a career’ Silicon valediction? Our road trip to t industry hotspots as the sector cools When Will Apple Launch the iPad Mini 7?",
      image:
        "https://images.unsplash.com/photo-1527201987695-67c06571957e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbGFuaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="menu">

      <h1>Related Posts</h1>

      {posts.map((post) => (

        <div className="post" key={post.id}>

          <img src={post.image} alt="" />

          <h2>{post.title}</h2>
          <button>
            <Link className="fancy" to={`/post/${post.id}`}>
  <span className="top-key"></span>
  <span className="text">Read More</span>
  <span className="bottom-key-1"></span>
  <span className ="bottom-key-2"></span>
</Link>
          </button>

        </div>
      ))}
    </div>
  );
}

export default Menu;
