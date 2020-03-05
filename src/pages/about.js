import React from 'react';

import Layout from '../components/Layout';

// import { ParalaxProvider, Parallax } from 'react-scroll-parallax';

function AboutPage() {
    return (
        <Layout>
            <div class="main">
                <div class="landing">
                    <h2 className='header'>A B O U T </h2>
                    <div class="intro">

                        <div class="profile"></div>
                        <div class="bio">
                            <h4>B I O</h4>
                            <p>I'm a UX/UI and graphic designer currently working as a Research Assistant at the UW Seattle
                                Inclusive Design Lab. As a techie with a knack for humanities, my projects are representative of
                                the
                                interdisciplinary background I've developed. <br></br><br></br> Being a Senior at UW studying Human Centered Design
                                & Engineering,
                                I emphasize ethical, accessible, and sustainable design. My work is dedicated to building
                                healthy, working relationships between humans and technology. <br></br><br></br>
                            </p>

                            <a href="/assets/Current Resume.pdf"><button class="button"
                                    type="submit">Resume</button></a>
                        </div>

                        <div class="divider"></div>

                        <div class="contact">
                            <h4>C O N T A C T</h4>
                            <p> While I do much of my work alone, I feel more empowered designing alongside others. <br></br><br></br>I am more
                                than happy to chat about business opportunities, creative
                                ideas, or mutual interests.<br></br>
                                </p>
                            <h4>Send me an email: <a href="mailto:hello@mnicolew.com">hello@mnicolew.com </a><br></br></h4>
                            <a href="https://www.linkedin.com/in/m-nicole-w/"><i class="fa fa-linkedin-square"
                                   style={{fontSize:"3.2vw;"}}></i></a>
                        </div>
                    </div>

                </div>
                <div className="second-frame">
                    <h2 className='header'> S K I L L S</h2>
                    <div class="last">
                        <div class="icon"></div>
                        <div class="tasks">
                            <h4>T A S K S</h4>
                            <p>As a generalist, there are many things I can assist you with. Here are just a few of the areas of
                                experience under my belt:
                            </p>

                            <ul>
                                <li>UX Design & Research</li>
                                <li>UI Design</li>
                                <li>Graphic Design</li>
                                <li>Branding</li>
                                <li>Web Design & Development</li>
                            </ul>


                        </div>
                        <div class="divider"></div>
                        <div class="tools">
                            <h4>T O O L S</h4>
                            <p>These are my weapons of choice when designing and engineering:<br></br><br></br></p>
                            <ul>
                                <li>Adobe Illustrator</li>
                                <li>Visual Studio Code</li>
                                <li>Figma</li>
                                <li>HTML / CSS / Sass</li>
                                <li>Java / Python</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="third-frame">
                    <h2 className='header'>H O B B Y</h2>
                    <div class="section">
                        <div class="third switch">
                            <div class="image"></div>
                            <p class="text"> <strong>G A M E S </strong><br></br><br></br>Ever since I was little, video games helped me
                                learn valuable problem solving skills. Ironically, I play heart-pumping action games on the
                                Nintendo Switch, Xbox One, and PC, so I can relax.
                                <br></br><br></br> <b>Loves:</b> Rocket League
                            </p>
                        </div>
                        <div class="third fitness">
                            <div class="image"></div>
                            <p class="text"> <strong>F I T N E S S</strong><br></br><br></br>Working out strengthens my body and mind. I
                                enjoy weightlifting because it helps me develop the consistency and work ethic I strive to
                                demonstrate in other areas of my life. <br></br><br></br> <b>Loves:</b> Barbell Squats
                                </p>
                        </div>
                        <div class="third music">
                            <div class="image"></div>
                            <p class="text"><strong>M U S I C</strong><br></br><br></br> Music captivates me. I find solace in mellow,
                                neo-soul harmonies. My passion for listening to and crafting songs was inherited from my
                                talented
                                father who's a self-taught drummer and singer.
                                <br></br><br></br> <b>Loves: </b>Frank Ocean
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default AboutPage