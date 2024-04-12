import Image from "next/image";
import { LatestFeedData } from "./LatestFeedData";

export default function LatestFeed() {
    return(
        <>
            {LatestFeedData.map((val) => {
                return(                    
                    <div className="event--feed">
                        {val.feedImage &&
                            <div className="feed--item">
                                <Image 
                                    src={val.feedImage}
                                    sizes="100vw"
                                    width={345}
                                    height={186}
                                    alt={""}
                                />
                                <div className="badges new-badge dark-badge">New</div>
                            </div>
                        }
                        <div className="feed--body">
                            {val.feedTitle &&
                                <div className="feed--title">
                                    <h3 className="title">{val.feedTitle}</h3>
                                </div>
                            }
                            {val.feedDesc &&
                                <div className="feed--desc">
                                    <p>{val.feedDesc}</p>
                                    <p>{val.feedViews}&nbsp;-&nbsp;{val.feedDays}</p>
                                </div>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}