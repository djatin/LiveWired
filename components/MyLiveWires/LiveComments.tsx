import Image from "next/image";
import { BsEmojiSmile } from "react-icons/bs";

export default function Comments () {
    return(
        <>
            <div className="comment--sections mt-6">
                <div className="comment--form user--logged--in">
                    <form action="" className="relative pl-12">
                        <div className="user--pic absolute left-0 top-3">
                            <Image 
                                src="/images/avatar.png"
                                sizes="100vw"
                                alt={""}
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="flex items-center border-b border-white-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 leading-tight focus:outline-none placeholder-white" type="text" placeholder="Add a comment (User is Logged In)..." />
                        </div>
                        <div className="comment--actions mt-3">
                            <BsEmojiSmile />
                            <div className="action--btns">
                                <button type="reset">Cancel</button>
                                <button type="submit">Comment</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="comment--form opacity-50 mt-4">
                    <form action="" className="relative pl-12">
                        <div className="user--pic absolute left-0 top-3">
                            <Image 
                                src="/images/avatar.png"
                                sizes="100vw"
                                alt={""}
                                width={24}
                                height={24}
                            />
                        </div>
                        <div className="flex items-center border-b border-white-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 leading-tight focus:outline-none placeholder-white" disabled type="text" placeholder="Add a comment (User is Logged In)..." />
                        </div>
                        <div className="comment--actions mt-3">
                            <BsEmojiSmile />
                            <div className="action--btns">
                                <button disabled type="reset">Cancel</button>
                                <button disabled type="submit">Comment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}