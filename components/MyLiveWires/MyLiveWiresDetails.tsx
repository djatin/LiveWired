import Image from "next/image";
import Link from "next/link";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { MdOutlineIosShare } from "react-icons/md";

export default function MyLiveWiresDetails () {
    return(
        <>
            <div className="live--section mt-20">
                <div className="section--head">
                    <h3 className="title">Post Malone - Live in Barcelona</h3>
                </div>
                <div className="section--detail">
                    <div className="artist--detail">
                        <div className="artist--pic">
                            <Image 
                                src="/images/avatar.png"
                                sizes="100vw"
                                alt={""}
                                width={56}
                                height={56}
                            />
                            {/* <span className="artist--status active"></span> */}
                            <span className="artist--status inactive"></span>
                            {/* <span className="artist--status offline"></span> */}
                        </div>
                        <div className="artist--meta">
                            <div>
                                <p>Artist name</p>
                                <p className="opacity-50">1.5M Followuing</p>
                            </div>
                            <div className="follow--btn social--btns">
                                <Link href="#">
                                    <IoAdd /> Follow
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="social--btns">
                        <Link href="#" className="like--btn">
                            <AiOutlineLike /> 169 &nbsp;| <AiOutlineDislike />
                        </Link>
                        <Link href="#" className="share--btn">
                            <MdOutlineIosShare /> Share
                        </Link>
                        <Link href="#" className="share--btn">
                            <IoAdd /> Save
                        </Link>
                    </div>
                </div>

                {/* Description */}
                <div className="live--event--desc">
                    <p className="desc--stats">6.3K views 3 months ago</p>
                    <p className="desc--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.... <span>Show more</span></p>
                </div>
            </div>
        </>
    )
}