import { Parallax } from "react-parallax";
import Header from "./Header";

const ImageOne = () => {
    return (
        <Parallax
            className="relative min-h-screen min-w-full"
            blur={{ min: -18, max: 18 }}
            bgImage='https://iili.io/HodBmtS.jpg'
            bgImageAlt="image one"
            strength={200}
        >
            <div>
                <Header />
            </div>
        </Parallax>
    );
};

export default ImageOne;
