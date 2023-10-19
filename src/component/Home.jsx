import React from 'react'
import { Link } from "react-router-dom";
import './Home.css'
import { GiNetworkBars } from "react-icons/gi"
import { AiOutlinePlus } from "react-icons/ai"
import { BiSolidCircle } from "react-icons/bi"
import { RxDotsHorizontal } from "react-icons/rx"

const Home = () => {
    return (
        <div className='Body' >
            <div className='Navbar'>
                <select className="groupby" >
                    <option value="1">Groupby 1</option> 
                    <option value="2">Groupby 2</option> 
                    <option value="3">Groupby 3</option> 
                </select>
            </div>
            <div className="main_body">
                <div className="small_div sdiv1">
                    <div className="title">
                        <div className="icon">
                            <GiNetworkBars />
                        </div>
                        <p className="title_text">
                            No priority
                        </p>
                        <div className="icon2">
                            <AiOutlinePlus />
                        </div>
                        <div className="icon3">
                            <RxDotsHorizontal />
                        </div>
                    </div>
                    <div className="textbox div1box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                    <div className="textbox div2box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                    <div className="textbox div3box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                </div>
                <div className="small_div sdiv2">
                    <div className="title">
                        <div className="icon">
                            <GiNetworkBars />
                        </div>
                        <p className="title_text">
                            Urgent
                        </p>
                        <div className="icon2">
                            <AiOutlinePlus />
                        </div>
                        <div className="icon3">
                            <RxDotsHorizontal />
                        </div>
                    </div>
                    <div className="textbox div1box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                    <div className="textbox div2box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                </div>
                <div className="small_div sdiv3">
                    <div className="title">
                        <div className="icon">
                            <GiNetworkBars />
                        </div>
                        <p className="title_text">
                            High
                        </p>
                        <div className="icon2">
                            <AiOutlinePlus />
                        </div>
                        <div className="icon3">
                            <RxDotsHorizontal />
                        </div>
                    </div>
                    <div className="textbox div1box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>

                </div>
                <div className="small_div sdiv4">
                    <div className="title">
                        <div className="icon">
                            <GiNetworkBars />
                        </div>
                        <p className="title_text">
                            Medium
                        </p>
                        <div className="icon2">
                            <AiOutlinePlus />
                        </div>
                        <div className="icon3">
                            <RxDotsHorizontal />
                        </div>
                    </div>
                    <div className="textbox div1box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                    <div className="textbox div2box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                    <div className="textbox div3box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>
                </div>
                <div className="small_div sdiv5">
                    <div className="title">
                        <div className="icon">
                            <GiNetworkBars />
                        </div>
                        <p className="title_text">
                            Low
                        </p>
                        <div className="icon2">
                            <AiOutlinePlus />
                        </div>
                        <div className="icon3">
                            <RxDotsHorizontal />
                        </div>
                    </div>
                    <div className="textbox div1box">
                        <div className="iconpart">
                            <p>CAM</p>
                        </div>
                        <div className='text'>
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum neque animi officia molestias sint. Veniam deleniti a labore numquam</p>
                        </div>
                        <div className="comm">
                            <div className="icon_comm">
                                <BiSolidCircle />
                            </div><p className='comm_text'>Feature Request</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Home