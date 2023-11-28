import React from "react";
import NavBar from "../../components/Nav/NavBar";
import Img1 from "../../assets/demoPic2.webp";
import "./Blog.css";

function Blog() {
    return (<div>
        <NavBar />
        <div className="blog">
        <div className="blog-title">Slice of Sheetakshi</div>
       <img src={Img1} alt="Img1" />
       <div className="blog-que">
        <div>What your passion</div>
        <div>dsdnasjdns ddasnd asdsad a fasas fas fasf asfd sdfgkjafsgnakp fsdngbdsiufnkjas k;niuphun nothing tbf</div>
       </div>
        </div>
    </div>)
}

export default Blog;