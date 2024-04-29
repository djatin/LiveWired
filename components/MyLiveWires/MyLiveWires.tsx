import Image from "next/image";

export default function MyLiveWires() {
    return(
        <>
            <div className="site--wrapper">
                <div className="video--wrapper">
                    <div className="live--video--wrapper">
                        <Image 
                            src="/images/live-video.jpg"
                            alt={""}
                            sizes="100vw"
                            width={995}
                            height={551}
                        />
                        <div className="cam--positions event--feeds--wrapper">
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
                </div>
            </div>
        </>
    )
}