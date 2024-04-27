import Link from "next/link";
import WiresFeed from "./WirestFeed";

export default function LiveWires() {
    return(
        <>
            <div className="site--wrapper">
                <div className="event--section">
                    <div className="section--head">
                        <h3 className="title">Live Wires</h3>
                        <div className="event--action">
                            <Link href="#">View All</Link>
                        </div>
                    </div>

                    <div className="event--feeds--wrapper feeds--wrapper--style-2">
                        <WiresFeed />
                    </div>
                </div>
            </div>
        </>
    )
}