import Image from "next/image";
import { SimilarVideoData } from "./SimilarVideosData";

export default function SimilarVideos () {
    return(
        <>
            {SimilarVideoData.map((val) => {
                return(
                    <>
                        <div className="videos--detail">
                            <div className="video--item">
                                <Image 
                                    src={val.videoImage}
                                    sizes="100vw"
                                    alt={""}
                                    width={168}
                                    height={94}
                                />
                            </div>
                            <div className="video--desc">
                                {val.videoTitle &&
                                    <div className="video--title">{val.videoTitle}</div>
                                }
                                <div className="video--stats">
                                    {val.videoDesc &&
                                        <span className="location">{val.videoDesc}</span>
                                    }
                                    {val.videoviews &&
                                        <span className="video--views">{val.videoviews}</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
            
        </>
    )
}