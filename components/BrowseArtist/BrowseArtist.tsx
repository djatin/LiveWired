import Link from "next/link";
import ArtistFeed from "./ArtistFeed";

export default function BrowseArtist() {
    return(
        <>
            <div className="site--wrapper">
                <div className="event--section event--section-style--2">
                    <div className="section--head">
                        <h3 className="title">Browse By Artist</h3>
                        <div className="event--action">
                            <Link href="#">View All</Link>
                        </div>
                    </div>

                    <div className="event--feeds--wrapper feeds--wrapper--style-3">
                        <ArtistFeed />
                    </div>
                </div>
            </div>
        </>
    )
}