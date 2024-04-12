import Link from "next/link";

export default function FooterBottom() {
    return(
        <>
            <div className="footer--secondary">
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
        </>
    )
}