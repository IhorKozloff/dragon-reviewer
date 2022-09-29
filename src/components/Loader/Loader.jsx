import { createPortal } from "react-dom";
import { RocketDetailsBackDrop } from "./Loader.styled";
import { Vortex } from 'react-loader-spinner';

export const Loader = () => {

    const loaderBackdropRoot = document.querySelector('#loader-backdrop-root');

    return createPortal(

        <RocketDetailsBackDrop className="rocket-details__wrapper">
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </RocketDetailsBackDrop>, loaderBackdropRoot
    )
}