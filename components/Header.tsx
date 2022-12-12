import Image from "next/image";
import { useEffect, useState } from "react";
import ImageLogo from "../assets/images/logo.png";

const Header = () => {
    const [scrollbar, setScrollbar] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY >= window.innerHeight - 300) {
                setScrollbar(true);
            } else {
                setScrollbar(false);
            }
        });
    }, []);

    return (
        <div
            className={`${!scrollbar ? "hidden" : "fixed w-full"} top-0 z-30 ${
                !scrollbar
                    ? "bg-transparent transition"
                    : "bg-[#68686875] transition"
            }`}
        >
            <div className="container flex justify-between items-center">
                <ul className="flex p-8 gap-x-8">
                    <li className="menu">
                        <a className="p-1">صفحه اصلی</a>
                    </li>
                    <li className="menu">
                        <a className="p-1">پروژه ها</a>
                    </li>
                    <li className="menu">
                        <a className="p-1">درباره ما</a>
                    </li>
                    <li className="menu">
                        <a className="p-1">تماس با ما</a>
                    </li>
                </ul>
                <div className="pl-10">
                    {scrollbar ? (
                        <Image
                            src={ImageLogo}
                            width={36}
                            height={36}
                            alt="peaky-logo"
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Header;
