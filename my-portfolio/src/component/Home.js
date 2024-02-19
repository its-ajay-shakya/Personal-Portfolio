import React from "react";
import {} from '../css/home.css'
import { Link } from "react-router-dom";
import foodiiss from '../images/Foodiii.png'
import zobs from '../images/Zobs.png'

import portfolio from '../images/portfolio.png'
import loginpage from '../images/loginpage.png'
import gym from '../images/gym ss.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";






const Home = () => {
    return <div>

    

<header class="header active">
        <a class="logo" href="#">AJAY</a>

        

        

        <nav class="navbar">
            
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#Projects">projects</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
            
       
        </nav>

        {/* <!-- mobile-navbar-btn --> */}

        <nav class="mobile-navbar-btn">
            <box-icon name='menu' class="mobile-nav-icon" ></box-icon>
            <box-icon type='solid' name='caret-up-square'  class="mobile-nav-icon"></box-icon>
        </nav>
    </header>

    

                      

    <section class="home"  id="home">
        <div class="home-content">
            <h1>Hi i'm <span>Ajay shakya</span></h1>
            <div class="text-animate skilltext">
                <h3 class="fullstack">FULL STACK WEB DEVELOPER</h3>
            </div>
            <div class="text-animate ">
                <h3 class="java">DSA(JAVA)</h3>
            </div>


            <p>
                
            </p>


            <div class="btn-box">
                <a href="#contact" class="btn">Hire Me</a>
                {/* <!-- <a href="#" class="btn">Let's Talk</a> --> */}

            </div>
        </div>
        <div class="home-sci">
            <a href="https://www.instagram.com/a_4_ajay_shakya_/" target="_blank"><FaInstagram/></a>
            <a href="https://www.linkedin.com/in/ajay-shakya-43065b271/" target="_blank"><FaGithub/></a>
            <a href="https://twitter.com/a_4_ajayshakya"  target="_blank"><FaLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=100023803478555" target="_blank"><FaFacebookF/></a>
        </div>  

        <div class="home-imageHover">

        </div> 


     </section>
     

    <section class="about " id="about">
        <h2 class="heading"> About <span>Me</span></h2>

        <div class="about-img">
            <img src="./images/ABOUT BEARD.jpg" alt=""/>
            <span class="circle-spin"></span>
        </div>
            <div class="about-content">
                <h3>FULL STACK WEB DEVELOPER</h3>
                <p></p>
                <p>Hi, my name is Ajay Kr Shakya and I'm from Buduan, Uttar Pradesh. <br />


                    As a Full-Stack Web developer, I enjoy tackling new challenges and continuously expanding my skillset. <br/>
                    
                    I am proficient in Development, as well as have knowledge in programming languages such as Html, Css, Javascript, Java. <br />
                    
                    I have a passion for working with these languages and i am interested in exploring new one's too;
                    
                    </p>
                    
            </div>
            <div class="btn-box btns readmorebtn ">
                <a href="#"  class="btn">Read more</a>
            </div>

        
    </section> 


    


    <section class="education" id="education">
        <h2 class="heading">MY <span>Journy</span></h2>
        
        <div class="education-row">
            <div class="education-column">
                <h3 class="title">Education</h3>
                 <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2016-2018</div>
                            <h3>10th - S.D.S.V. mandir(Budaun)</h3>
                            <p>I have completed my 10th from Shiv devi saraswati vidhya mandir (Budaun,UP)</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2018-2020</div>
                            <h3>12th - S.R.S.V. mandir(Budaun)</h3>
                            <p>I have completed my 10th from Shree ram saraswati vidhya mandir (Budaun,UP)</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2020-2024</div>
                            <h3>B.Tech -BIT(meerut)</h3>
                            <p>I have completed my graduation from Bharat Institute of Technology (Meerut)</p>
                        </div>
                    </div>
                 </div>
            </div>


            <div class="education-column">
                <h3 class="title">Experience</h3>
                 <div class="education-box">
                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2023</div>
                            <h3>Web-Dovelopment(Interpa)</h3>
                            <p>I have completed the intership of Web-Dovelopment from Interpa.</p>
                        </div>
                    </div>

                    <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2024</div>
                            <h3>JAVA (Interpa) </h3>
                            <p>I have completed the inteship of java. </p>
                        </div>
                    </div>

                    {/* <!-- <div class="education-content">
                        <div class="content">
                            <div class="year"><i class='bx bxs-calendar'></i>2017 2029</div>
                            <h3>dkdl</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis suscipit quaerat itaque quo, molestiae rerum facilis labore impedit vel harum?</p>
                        </div>
                    </div> --> */}
                 </div>
            </div>
        </div>

    </section>



 

    <section class="skills" id="skills">
        <h2 class="heading">My <span>skills</span></h2>

        <div class="skills-row">
            <div class="skills-column">
                <h3 class="title">Coding Skills</h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>CSS<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JavaScript<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>JAVA<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skills-column">
                <h3 class="title">Coding Skills</h3>

                <div class="skills-box">
                    <div class="skills-content">
                        <div class="progress">
                            <h3>DSA(JAVA)<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Express.js<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>Node.js<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                        <div class="progress">
                            <h3>C++<span>90%</span></h3>
                            <div class="bar"><span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <div class="Projects" id="Projects">
    <h2 class="heading">My<span>Prjocts</span></h2>
        <div className="projectsrow">
            <div className="projectCard">
                <div className="projectimg">
                    <img src={foodiiss} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Foodiii (A cloud kitchen)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM , multer  
                    </p>
                </div>


            </div>
            <div className="projectCard">
                <div className="projectimg">
                    <img src={zobs} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Zobs (A job portal)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM  
                    </p>
                </div>


            </div><div className="projectCard">
                <div className="projectimg">
                    <img src={portfolio} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">My Portfolio</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB 
                    </p>
                </div>


            </div>
            

        </div>
        <div className="projectsrow">
        <div className="projectCard">
                <div className="projectimg">
                    <img src={gym} alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Foodiii (A cloud kitchen)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM  
                    </p>
                </div>


            </div>
            <div className="projectCard">
                <div className="projectimg">
                    <img src={loginpage } alt="" />
                </div>
                <div className="projectinfo">
                    <p className="title">Foodiii (A cloud kitchen)</p>
                    <p className="techs">
                        Rect.js , Express.js , Node.js , MongoDB ,NPM  
                    </p>
                </div>


            </div>

            {/* <div className="projectCard"></div> */}
        </div>

    </div>

        

    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>
        <form action="#" class="form">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" class="userName" placeholder="Full name" required/>
                    <span class="focus"></span>

                </div>
                <div class="input-field">
                    <input type="email" placeholder="Mail" required class="userEmail"/>
                    <span class="focus"></span>
                </div>

                </div>
                <div class="input-box">
                <div class="input-field">
                    <input type="number" class="userNumber" placeholder="Your Number" required/>
                    <span class="focus"></span>

                </div>
                <div class="input-field">
                    <input type="text" class="userSubject" placeholder="Subject" required/>
                    <span class="focus"></span>

                </div>
            </div>
            
            <div class="textarea-field">
                <textarea class="userText" cols="30" rows="10" placeholder="type you massange here" required></textarea>
                <span class="focus"></span>
            </div>
            <div class="btn-box btns" >
                <button type="submit" class="btn onsumi">Submit</button>
            </div>
        </form>
    </section>
    

   
   
    <footer class="footer">
        <div class="footer-text">
            <p>Copyright &copy; 2023- All rights reserved || Designed By: Ajay Kr Shakya</p>
        </div>

        <div class="footer-icon">
            <a href="#"> <i class='bx bx-up-arrow-alt'></i></a>
        </div>

    </footer>
        
    
    

   
    </div>;
}
export default Home;