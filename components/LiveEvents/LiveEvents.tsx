import Link from "next/link";
import LiveFeed from "./LiveFeed";
import Image from "next/image";

export default function LiveEvents() {
    return(
        <>
            <div className="site--wrapper">
                <div className="event--section">
                    <div className="section--head">
                        <h3 className="title">
                            <Image 
                                src="/images/icon.png"
                                width={28}
                                height={28}
                                alt={""}
                            />
                            Live Now</h3>
                        <div className="event--action">
                            <Link href="#">View All</Link>
                        </div>
                    </div>

                    <div className="event--feeds--wrapper">
                        <LiveFeed />
                    </div>
                </div>
            </div>
        </>
    )
}