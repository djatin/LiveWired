import Image from "next/image";
import Link from "next/link";

export default function FooterBottom() {
    return(
        <>
            <div className="footer--secondary hidden lg:block">
                <div className="site--wrapper">
                    <div className="copyright">
                        <p>© 2024 Livewired, LLC</p>
                    </div>
                    <div className="utitlity--footer--menu">
                        <ul>
                            <li>
                                <Link href="#">Terms</Link>
                            </li>
                            <li>
                                <Link href="#">Accessibility</Link>
                            </li>
                            <li>
                                <Link href="#">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer--mobile block lg:hidden">
                <div className="site--wrapper py-6">
                    <ul className="flex justify-between items-center">
                        <li className="watch--now">
                            <Link href="#">
                                <Image 
                                    src="/images/watch-live.svg"
                                    sizes="100vw"
                                    width={24}
                                    height={24}
                                    alt={""}
                                />
                                Watch Now
                            </Link>
                        </li>
                        <li className="library">
                            <Link href="#">
                                <Image 
                                    src="/images/library.svg"
                                    sizes="100vw"
                                    width={24}
                                    height={24}
                                    alt={""}
                                />
                                Library
                            </Link>
                        </li>
                        <li className="lives">
                            <Link href="#">
                                <Image 
                                    src="/images/lives.svg"
                                    sizes="100vw"
                                    width={24}
                                    height={24}
                                    alt={""}
                                />
                                Lives
                            </Link>
                        </li>
                        <li className="earnings">
                            <Link href="#">
                                <Image 
                                    src="/images/earnings.svg"
                                    sizes="100vw"
                                    width={24}
                                    height={24}
                                    alt={""}
                                />
                                Earnings
                            </Link>
                        </li>
                        <li className="search">
                            <Link href="#">
                                <Image 
                                    src="/images/search.svg"
                                    sizes="100vw"
                                    width={24}
                                    height={24}
                                    alt={""}
                                />
                                Search
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}