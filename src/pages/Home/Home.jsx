import NavBar from "../../components/Nav/NavBar.jsx";
import Img1 from "../../assets/demoPic.webp";
import Img2 from "../../assets/demoPic2.webp";
import Img3 from "../../assets/demopic3.webp";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {


    return (
        <div className="Home">
            <NavBar />
            <div className="home-start">
                <img src={Img1} alt="demo-pic" />
                <div>
                    <p>My Thoughts</p>
                    <img src={Img2} alt="demo-pic2" />
                    <p>Detoxing</p>
                    <p>sdaashidgbasipudbasipudjnasodifn kidfjbaspiudbaspiud sadasyidgasiypdgasip asdjhbasdioyasgdbj asduhyabvsduyuasbd
                        jlbasuodygbasph4 dsaugdfasitydv aduosygasoydgas asipudhgasipudb piyasgdiyasgbdpiuo</p>
                    <button>See All Posts</button>
                </div>
            </div>

            <div className="home-post">
                <div className="home-post-title">Recent Post</div>
                <div>
                    <img src={Img3} alt="demo-pic3" />
                    <div>
                        <div><Link to="./1">May 2</Link></div>
                        <div><Link to="./1">The One thing I would tell to my 18 year old self</Link></div>
                        <div><Link to="./1">sdas asd asdas dsadsadasfadwf sdfsaefsFSADFSDfs
                            dfsdfasdfds fdsBIYLDFH IUPHFIUDSFI dsfhbsdhfbsadiuf
                            sdfsdf dsfasdfds as dasdasfdsafdsfdsafsdafasdfsadfads
                            asdfsadfsadfsdfsadfasdfasdfasd sdfsadfasdfasdfasdfasedf
                        </Link></div>

                    </div>
                </div>
                <div>
                    <img src={Img3} alt="demo-pic3" />
                    <div>
                        <div><Link to="./2">May 2</Link></div>
                        <div><Link to="./2">The One thing I would tell to my 18 year old self</Link></div>
                        <div><Link to="./2">sdas asd asdas dsadsadasfadwf sdfsaefsFSADFSDfs
                            dfsdfasdfds fdsBIYLDFH IUPHFIUDSFI dsfhbsdhfbsadiuf
                            sdfsdf dsfasdfds as dasdasfdsafdsfdsafsdafasdfsadfads
                            asdfsadfsadfsdfsadfasdfasdfasd sdfsadfasdfasdfasdfasedf</Link></div>
                    </div>
                </div>
                <div>
                    <img src={Img3} alt="demo-pic3" />
                    <div>
                        <div><Link to="./3">May 2</Link></div>
                        <div><Link to="./3">The One thing I would tell to my 18 year old self</Link></div>
                        <div>
                            <Link to="./3">sdas asd asdas dsadsadasfadwf sdfsaefsFSADFSDfs
                                dfsdfasdfds fdsBIYLDFH IUPHFIUDSFI dsfhbsdhfbsadiuf
                                sdfsdf dsfasdfds
                                sdas asd asdas dsadsadasfadwf sdfsaefsFSADFSDfs
                                dfsdfasdfds fdsBIYLDFH IUPHFIUDSFI dsfhbsdhfbsadiuf
                                sdfsdf dsfasdfds as dasdasfdsafdsfdsafsdafasdfsadfads
                                asdfsadfsadfsdfsadfasdfasdfasd sdfsadfasdfasdfasdfasedf</Link></div>

                    </div>
                </div>
            </div>

            <div className="home-intro2">
                <div><p>"U didnt told me to do it till "</p><p>By Colt Steele</p></div>
                <div>
                    <img src={Img1} alt="Img1" />
                </div>
            </div>
            <div className="home-intro2">
                <div>
                    <img src={Img1} alt="Img1" />
                </div>
                <div><p>"U didnt told me to do it till "</p><p>By Colt Steele</p></div>
            </div>

            <div className="home-collage">
                <div>Always Make Me Smile</div>
                <div>
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                </div>
                <div>
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                    <img src={Img2} alt="demo-pic" />
                </div>
            </div>
        </div>
    )
}

export default Home;