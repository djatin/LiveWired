import Image from "next/image";
import { GenreFeedData } from "./GenreFeedData";

export default function GenreFeed() {
    return(
        <>
            {GenreFeedData.map((val) => {
                return(                    
                    <div className="event--feed">
                        {val.feedImage &&
                            <div className="feed--item">
                                <Image 
                                    src={val.feedImage}
                                    sizes="100vw"
                                    width={192}
                                    height={93}
                                    alt={""}
                                />
                            </div>
                        }
                        {/* <div className="feed--body">
                            {val.feedTitle &&
                                <div className="feed--title">
                                    <h3 className="title">{val.feedTitle}</h3>
                                </div>
                            }
                        </div> */}
                    </div>
                );
            })}
        </>
    )
}