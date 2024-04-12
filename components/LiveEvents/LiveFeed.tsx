import Image from "next/image";
import { LiveFeedData } from "./LiveFeedData";

export default function LiveFeed() {
    return(
        <>
            {LiveFeedData.map((val) => {
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
                                <div className="badges live-badge red-badge">Live</div>
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
                                    <p>{val.feedDesc}&nbsp; - &nbsp;{val.feedViews}&nbsp; - &nbsp;{val.feedDays}</p>
                                </div>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}