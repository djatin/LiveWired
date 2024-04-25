import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <>
            <header>
                <div className="site--wrapper flex gap-6 items-center justify-between">
                    {/* Site Logo */}
                    <div className="site--logo">
                        <Link href="/">
                            <Image 
                                src="/images/LW-logo.png"
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                width={500}
                                height={300}
                                alt={""}                        
                            />
                        </Link>
                    </div>

                    {/* Site menu & search section */}
                    <div className="site--menu--action">
                        {/* Site menus */}
                        <ul>
                            <li>
                                <Link href="#">My LiveWires</Link>
                            </li>
                            <li>
                                <Link href="#">Following</Link>
                            </li>
                            <li>
                                <Link href="#">Become a Producer</Link>
                            </li>
                        </ul>

                        {/* Search box */}
                        <div className="nav-search--field flex items-center gap-1">
                            <form>
                                <div className="form--field">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <Image 
                                            src="/images/search-icon.png"
                                            sizes="100vw"
                                            style={{
                                                height: 'auto',
                                            }}
                                            width={18}
                                            height={18}
                                            alt={""} 
                                        />
                                    </button>
                                </div>
                            </form>
                            <div className="form--mic">
                                <Image 
                                    src="/images/mic.png"
                                    sizes="100vw"
                                    style={{
                                        height: 'auto',
                                    }}
                                    width={13}
                                    height={18}
                                    alt={""} 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right header options */}
                    <div className="user--options flex items-center gap-6">
                        {/* App install button */}
                        <div className="app--install">
                            <Link href="#">Install the App</Link>
                        </div>

                        {/* Profile links */}
                        <div className="user--profile--options">
                            <ul className="flex items-center gap-6">
                                <li className="user--noti">
                                    <Link href="#">
                                        <Image 
                                            src="/images/bell.png"
                                            sizes="100vw"
                                            style={{
                                                height: 'auto',
                                            }}
                                            width={24}
                                            height={24}
                                            alt={""} 
                                        />
                                    </Link>
                                </li>
                                <li className="user--auth">
                                    <Link href="#">P</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}