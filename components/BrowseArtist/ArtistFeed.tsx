'use client';

import Image from "next/image";
import { ArtistData } from "./ArtistData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ArtistFeed() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 2
    };
    return(
        <>
        <Slider {...settings}>
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
        </Slider>
        </>
    )
}