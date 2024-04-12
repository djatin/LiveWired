import Image from "next/image";
import { WiresFeedData } from "./WiresFeedData";

export default function WiresFeed() {
    return(
        <>
            {WiresFeedData.map((val) => {
                return(                    
                    <div className="event--feed">
                        {val.feedImage &&
                            <div className="feed--item">
                                <Image 
                                    src={val.feedImage}
                                    sizes="100vw"
                                    width={226}
                                    height={380}
                                    alt={""}
                                />
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
                                </div>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}