
import Image from "next/image";

export default function Banner() {
    return(
        <>
            <div className="site--banner relative">
                <div className="banner--image">
                    <Image 
                        src="/images/banner-image.jpg"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        width={1440}
                        height={688}
                        alt={""}
                    />
                </div>
                <div className="banner--wrapper md:absolute md:inset-x-0 bottom-12">
                    <div className="site--wrapper">
                        <div className="badges pink-badge">Live</div>
                        <div className="banner--title">
                            <h3>Post Malone Live in New York</h3>
                        </div>
                        <div className="banner--text">Madison Square Garden - 9:46 p.m.</div>
                    </div>
                </div>
            </div>
        </>
    )
}