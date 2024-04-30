'use client';

import Image from "next/image";
import { GenreFeedData } from "./GenreFeedData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GenreFeed() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 2
    };
    return(
        <>
        <Slider {...settings}>
            {GenreFeedData.map((val) => {
                return(                    
                    <div className="event--feed" key={val.id}>
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
                    </div>
                );
            })}
        </Slider>
        </>
    )
}