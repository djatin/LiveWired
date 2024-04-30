"use client";

import Image from "next/image";
import { useEffect } from "react";
import MyLiveWiresDetails from "./MyLiveWiresDetails";
import Comments from "./LiveComments";
import SimilarVideos from "./SimilarVideos";

export default function MyLiveWires() {
    useEffect (() => {
        document.body.classList.add("gradiant--bg");
    }, []);
    return(
        <>
            <div className="site--wrapper">
                <div className="video--wrapper">
                    <div className="live--video--wrapper">
                        <div className="live--section">
                            <Image 
                                src="/images/live-video.jpg"
                                alt={""}
                                sizes="100vw"
                                width={995}
                                height={551}
                            />
                            <div className="cam--positions event--feeds--wrapper mt-6">
                                <div className="event--feed">
                                    <div className="feed--item">
                                        <Image 
                                            src="/images/video-bg.png"
                                            alt={""}
                                            sizes="100vw"
                                            width={234}
                                            height={130}
                                        />
                                    </div>
                                    <div className="feed--body">
                                        <div className="feed--title">
                                            <h3 className="title">Camera Location</h3>
                                        </div>
                                        <div className="feed--desc">
                                            <p>18 watched</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="event--feed">
                                    <div className="feed--item">
                                        <Image 
                                            src="/images/video-bg.png"
                                            alt={""}
                                            sizes="100vw"
                                            width={234}
                                            height={130}
                                        />
                                    </div>
                                    <div className="feed--body">
                                        <div className="feed--title">
                                            <h3 className="title">Camera Location</h3>
                                        </div>
                                        <div className="feed--desc">
                                            <p>18 watched</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="event--feed">
                                    <div className="feed--item">
                                        <Image 
                                            src="/images/video-bg.png"
                                            alt={""}
                                            sizes="100vw"
                                            width={234}
                                            height={130}
                                        />
                                    </div>
                                    <div className="feed--body">
                                        <div className="feed--title">
                                            <h3 className="title">Camera Location</h3>
                                        </div>
                                        <div className="feed--desc">
                                            <p>18 watched</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="event--feed">
                                    <div className="feed--item">
                                        <Image 
                                            src="/images/video-bg.png"
                                            alt={""}
                                            sizes="100vw"
                                            width={234}
                                            height={130}
                                        />
                                    </div>
                                    <div className="feed--body">
                                        <div className="feed--title">
                                            <h3 className="title">Camera Location</h3>
                                        </div>
                                        <div className="feed--desc">
                                            <p>18 watched</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MyLiveWiresDetails />

                        <Comments />
                    </div>

                    <div className="similar--videos">
                        <SimilarVideos />
                    </div>
                </div>
            </div>
        </>
    )
}