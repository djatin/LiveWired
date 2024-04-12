import Image from "next/image";
import Link from "next/link";

export default function FooterTop() {
    return(
        <>
            <div className="footer--main">
                <div className="site--wrapper">
                    <div className="footer--nav">
                        <ul>
                            <li>
                                <span className="nav--title">Browse</span>
                                <ul className="sub--nav">
                                    <li>
                                        <Link href="#">My Library</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Live Now</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Following</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="nav--title">Company</span>
                                <ul className="sub--nav">
                                    <li>
                                        <Link href="#">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Newsroom</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Careers</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="nav--title">Help</span>
                                <ul className="sub--nav">
                                    <li>
                                        <Link href="#">Support</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Become a Producer</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Supported Devices</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="footer--social-navs">
                        <ul className="social--links">
                            <li>
                                <Link href="#" title="Instagram">
                                    <Image 
                                        src="/images/insta.svg"
                                        width={20}
                                        height={20}
                                        alt={"Instagram"}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="Facebool">
                                    <Image 
                                        src="/images/fb.svg"
                                        width={20}
                                        height={20}
                                        alt={"Facebook"}
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" title="Twitter">
                                    <Image 
                                        src="/images/twitter.svg"
                                        width={20}
                                        height={20}
                                        alt={"Twitter"}
                                    />
                                </Link>
                            </li>
                        </ul>
                        <div className="download--options">
                            <Link href="#">
                                <Image 
                                    src="/images/googleplay.png"
                                    width={116}
                                    height={34}
                                    alt={"Google Play Store"}
                                />
                            </Link>
                            <Link href="#">
                                <Image 
                                    src="/images/appstore.png"
                                    width={116}
                                    height={34}
                                    alt={"App Store"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}