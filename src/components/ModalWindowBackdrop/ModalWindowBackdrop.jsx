import { createPortal } from "react-dom";
import { ModalWindowBackdropWrapper } from "./ModalWindowBackdrop.styled";

export const ModalWindowBackdrop = ({children, theme = 'light'}) => {

    const modalBackdropRoot = document.querySelector('#modal-backdrop-root');

    return createPortal (
        <ModalWindowBackdropWrapper theme={theme} className="rocket-details__wrapper">
            {children}
        </ModalWindowBackdropWrapper>, modalBackdropRoot
    )
}