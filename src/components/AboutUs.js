import React from 'react'
import './AboutStyle.css'
import AboutUsImg from '../assets/images/about-page.png'

const AboutUs = () => {
    return (
        <>
        <section class="about">
            <div class="row">
                <div class="about-col">
                    <h1 class="heading"> “The Future Tech”</h1>
                    <p>The Future Tech is an inter-collegiate IT event organized by the students of Bachelor of Science in Information Technology BScIT. for the purpose of providing a platform for students to showcase their skills and knowledge in various tech related competitions. The event will focus on a wide range of topics such as web development, mobile app development, robotics, artificial intelligence, machine learning and more. The participants will have an opportunity to gain hands-on experience in these areas while competing against their peers from other colleges and universities.
                    </p>
                    <p>
                    Participants will be able to learn about the latest technologies and trends in the field of technology, as well as develop their skills and knowledge by taking part in these exciting competitions. The goal of these competitions is to help participants gain a better understanding of the various aspects of technology and how they can apply it to their own projects. By taking part in such events, participants will be able to hone their skills and learn more about different technologies that can help them succeed in their chosen career paths.
                    </p>
                </div>
                <div class="about-col">
                    <img src={AboutUsImg} alt="about-us-img"/>
                </div>
            </div>
        </section>  
        </>
    )
}

export default AboutUs
