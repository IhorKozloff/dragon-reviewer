import { ModalWindowBackdrop } from "components";
import { Vortex } from 'react-loader-spinner';

export const Loader = ({theme}) => {



    return (

        <ModalWindowBackdrop theme={theme}>
            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </ModalWindowBackdrop>
    )
}