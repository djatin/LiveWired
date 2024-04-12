import Image from "next/image";
import { ArtistData } from "./ArtistData";

export default function ArtistFeed() {
    return(
        <>
            {ArtistData.map((val) => {
                return(                    
                    <div className="event--feed">
                        {val.artistImage &&
                            <div className="feed--item">
                                <Image 
                                    src={val.artistImage}
                                    sizes="100vw"
                                    width={136}
                                    height={136}
                                    alt={""}
                                />
                            </div>
                        }
                        <div className="feed--body">
                            {val.artistTitle &&
                                <div className="feed--title">
                                    <h3 className="title">{val.artistTitle}</h3>
                                </div>
                            }
                        </div>
                    </div>
                );
            })}
        </>
    )
}