import Image from "next/image";
import { Parallax } from "react-parallax";
import Header from "./Header";
import ImageLogo from "../assets/images/logo.png";

const ImageOne = () => {
    return (
        <Parallax
            className="relative min-h-screen min-w-full"
            blur={{ min: -18, max: 18 }}
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
            <div className="flex flex-col pr-24 pt-8">
                <p className="text-white text-xl py-2">تماس با ما</p>
                <p className="text-white text-4xl">09217767345</p>
                <p className="text-white text-7xl font-bold py-10 text-brand-accent" >
                    بهترین ها را با ما تجربه کنید
                </p>
                <button className="bg-primary-color hover:bg-primary-color transition p-8 w-96 text-white text-xl ">
                    درخواست پشتیبانی
                </button>
            </div>
        </Parallax>
    );
};

export default ImageOne;
