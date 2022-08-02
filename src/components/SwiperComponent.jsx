import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ProjectCard from './ProjectCard';

import IOTproject from '../assets/IOTproject.png'
import WTproject from '../assets/WTproject.png'
import PLIIproject from '../assets/PLIIproject.jpeg'
import FWDproject from '../assets/FWDproject.png'
import BDSproject from '../assets/BDSproject.png'
import Portfolio from '../assets/Portfolio.png'

import { SiPython } from 'react-icons/si'
import { ImStatsDots } from 'react-icons/im'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript, SiAngular, SiReact, SiPhp, SiMongodb, SiMysql, SiNodedotjs, SiCplusplus, SiGithub } from 'react-icons/si'
import { BiCube } from 'react-icons/bi'

let width = window.innerWidth

const SwiperComponent = () => {
    return (
        <Swiper
            slidesPerView={width < 1200 ? 1 : 3}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}
        >
            <SwiperSlide>
                <ProjectCard
                    title='Personal Portfolio'
                    description='My personal portfolio showing the technologies I am familiar with as well as a 3D interactive model to know about me. This project is constantly being updated.'
                    stack={
                        <>
                            <AiFillHtml5 />
                            <IoLogoCss3 />
                            <SiReact />
                            <BiCube />
                            <SiGithub />
                        </>
                    }
                    image={Portfolio}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title="Ocean O' NFT"
                    description='An online webstore for listing and selling NFTs with a live bidding system.'
                    stack={<>
                        <AiFillHtml5 />
                        <IoLogoCss3 />
                        <SiJavascript />
                        <SiAngular />
                        <SiNodedotjs />
                        <SiMongodb />

                    </>}
                    image={WTproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='Expense Manager'
                    description='An expense manager and tracker built in Python which based on user’s monthly allowance gives a daily expenditure limit to the user as well as provides graphs for both daily spend and where (food, medical, other etc) the money was spent.'
                    stack={
                        <>
                            <SiPython />
                            <SiMysql />
                        </>
                    }
                    image={PLIIproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title="Layman's Guide"
                    description='A blog/forum website explaining the new and latest technologies to the non tech savvy generation of people.'
                    stack={
                        <>
                            <AiFillHtml5 />
                            <IoLogoCss3 />
                            <SiJavascript />
                            <SiPhp />
                            <SiMysql />
                        </>
                    }
                    image={FWDproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='Prescriptive Analysis of Covid-19'
                    description='An autoregressive integrated moving average model fed data from Indian Unemployment rate records to predict the trend in unemployment due to the lockdowns initiated to control Covid 19.'
                    stack={
                        <>
                            <SiPython />
                            <ImStatsDots />
                        </>
                    }
                    image={IOTproject}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProjectCard
                    title='File Manager'
                    description='Simple File Manager in C++ CUI'
                    stack={
                        <>
                            <SiCplusplus />
                        </>
                    }
                    image={BDSproject}
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent