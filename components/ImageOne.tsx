import Image from "next/image";
import { Parallax } from "react-parallax";
import Header from "./Header";
import ImageLogo from "../assets/images/logo.png";

const ImageOne = () => {
    return (
        <Parallax
            className="relative min-h-screen min-w-full"
            blur={{ min: -18, max: 16 }}
            bgImage="https://iili.io/HodBmtS.jpg"
            bgImageAlt="image one"
            strength={200}
        >
            <Header />
            <div className="flex justify-center p-2 bg-secondary-color">
                <Image
                    src={ImageLogo}
                    width={48}
                    height={48}
                    alt="peaky-logo"
                />
            </div>
            <div className="flex flex-col pt-8 md:pr-24">
                <p className="text-white text-xl py-2 hidden md:block">
                    تماس با ما
                </p>
                <p className="text-white text-4xl hidden md:block">
                    09217767345
                </p>
                <p className="text-white text-5xl font-bold py-10 text-brand-accent text hidden md:block">
                    بهترین ها را با ما تجربه کنید
                </p>
                <div className="flex flex-col items-center md:block">
                    <div className="bg-white w-96 text-center p-8 rounded-full m-8 block md:hidden">
                        <span className="text-2xl">بهترین ها را با ما تجربه کنید</span>
                    </div>
                    <button className="bg-primary-color hover:bg-primary-color transition p-8 w-96 text-white text-xl">
                        درخواست پشتیبانی
                    </button>
                </div>
            </div>
        </Parallax>
    );
};

export default ImageOne;
