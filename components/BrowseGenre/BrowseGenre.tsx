import Link from "next/link";
import GenreFeed from "./GenreFeed";

export default function BrowseGenre() {
    return(
        <>
            <div className="site--wrapper">
                <div className="event--section">
                    <div className="section--head">
                        <h3 className="title">Browse By Genre</h3>
                        <div className="event--action">
                            <Link href="#">View All</Link>
                        </div>
                    </div>

                    <div className="event--feeds--wrapper">
                        <GenreFeed />
                    </div>
                </div>
            </div>
        </>
    )
}