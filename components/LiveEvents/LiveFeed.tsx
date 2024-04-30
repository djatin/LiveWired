'use client'
import Image from "next/image";
import { LiveFeedData } from "./LiveFeedData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LiveFeed() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return(
        <>
        <Slider {...settings}>
            {LiveFeedData.map((val) => {
                return(                    
                    <div className="" key={val.id}>
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
            </Slider>
        </>
    )
}