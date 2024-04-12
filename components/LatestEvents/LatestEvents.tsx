import Link from "next/link";
import LatestFeed from "./LatestFeed";

export default function LatestEvents() {
    return(
        <>
            <div className="site--wrapper">
                <div className="event--section">
                    <div className="section--head">
                        <h3 className="title">Latest</h3>
                        <div className="event--action">
                            <Link href="#">View All</Link>
                        </div>
                    </div>

                    <div className="event--feeds--wrapper">
                        <LatestFeed />
                    </div>
                </div>
            </div>
        </>
    )
}