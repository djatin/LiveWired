'use client';

import Image from "next/image";
import { WiresFeedData } from "./WiresFeedData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WiresFeed() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return(
        <>
        <Slider {...settings}>
            {WiresFeedData.map((val) => {
                return(                    
                    <div className="event--feed" key={val.id}>
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
        </Slider>
        </>
    )
}