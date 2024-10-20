import React from 'react'
import './Dashboard.css'
import Navbar from '../../Components/Navbar/Navbar'
import evm from '../../assets/evm.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import model from '../../assets/model.jpg';
import model2 from '../../assets/model2.jpg';
import Community from '../../Components/Community/Community';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Navbar />
            <div className="body">
                <div className="header">
                    <div className="left">
                        <h2>SMART EVM</h2>
                        <p>The motivation behind this EVM project is to create an electronic voting machine (EVM) that will help overcome the challenges posed by manual voting machines.</p>
                    </div>
                    <div className="right">
                        <img src={evm} alt="" />
                    </div>
                </div>
            </div>
            {/* new features section */}
            <div className="break" />
            <div className="features">
                <div className="content">
                    <div className="left">
                        <img src={model} alt="" />
                    </div>
                    <div className="right">
                        <h2>WHAT's NEW</h2>
                        <div className="list">
                            <div className="item">
                                <parseFloat><strong>Blockchain-Integrated Security</strong></parseFloat>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Real-Time Monitoring with Admin Panel</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Crypto Cloud Storage</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>User-Friendly Voting Interface</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                            <div className="item">
                                <p><strong>Configurable via Application Interface</strong></p>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="break" />
            <div className="product">
                <div className="content">
                    <div className="left">
                        <h2>PRODUCT</h2>
                        <p><b>NovoTech EVM </b>- The cutting-edge electronic voting machine designed for secure, accurate, and user-friendly voting experiences. Ideal for school elections.</p>
                        <button onClick={(e) => { window.location.href = 'https://thekidcompany.in/product/smart-evm-economy/'; }}><span>BUY NOW!</span></button>
                        <a href="https://www.smartevm.in/smartevm/smart-evm_without_blockchain.html" target='_blank'>Click here for User Manual</a>
                        <div className="icons">
                            <a className='icon' href='https://youtu.be/6SDpkp_0fKU?si=oV75jMTaFDgvnUH'>
                                <FontAwesomeIcon icon={faYoutube} style={{ color: "#d7301d", }} size='3x' />
                            </a>
                            <a className='icon' href='https://www.instagram.com/reel/DAJTJ3FS4fQ/?igsh=dHA2azM0b203bTJ5'>
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#f73bbb", }} size='3x' />
                            </a>
                        </div>
                    </div>
                    <div className="right">
                        <img src={model2} alt="EVM" />
                    </div>
                </div>
            </div>
            <div className="break" />
            <Community />
            {/* <div class="community">
                <div className="content">
                    <h1>COMMUNITY</h1>
                    <p>At Novotech, we are committed to fostering a strong and inclusive community around our innovative solutions. We believe that collaboration and open communication are the keys to driving progress and creating meaningful impact. Our community support is designed to assist you every step of the way. Here’s how we can help:</p>

                    <h2>1. 24/7 Technical Support</h2>
                    <p>Our dedicated support team is available around the clock to answer your questions and resolve issues related to our electronic voting machine or any other Novotech product. Reach out to us anytime via email, phone, or live chat.</p>

                    <h2>2. Knowledge Base & Resources</h2>
                    <p>We've compiled a comprehensive library of documentation, tutorials, and FAQs to help you get the most out of our products. From installation guides to advanced configuration tips, our knowledge base is here to empower you.</p>

                    <h2>3. Community Forum</h2>
                    <p>Join the conversation in the Novotech Community Forum. Engage with other users, share ideas, ask questions, and get advice from both Novotech experts and fellow community members. Whether you're troubleshooting or looking to improve your system, the forum is the place to connect.</p>

                    <h2>4. Feature Requests & Feedback</h2>
                    <p>Your feedback is invaluable to us! We actively listen to our community and continuously improve our products based on your suggestions. Submit feature requests or share your thoughts through our <a href="https://thekidcompany.in/product/smart-evm-economy/">feedback portal</a>, and help shape the future of Novotech.</p>

                    <h2>5. Regular Updates & Announcements</h2>
                    <p>Stay informed with the latest updates, patches, and product enhancements. We regularly post announcements about new features, security improvements, and community initiatives to ensure you’re always in the loop.</p>

                    <h2>6. Workshops and Webinars</h2>
                    <p>Novotech organizes regular workshops, webinars, and training sessions to help you stay ahead with our latest technologies. Join our experts for hands-on training or deep dives into specific features and industry trends.</p>
                </div>
            </div> */}
        </div>
    )
}
export default Dashboard