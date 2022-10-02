import { avatarsData } from "assets/avatar-set";
import { ModalWindowBackdrop } from "components";
import { AvatarList, AvatarListItem, AvatarImgThumb, CloseButton } from "./AvatarSet.styled"
import { GrClose } from "react-icons/gr"

export const AvatarSet = ({actionOnClick, onCloseClick}) => {

    const onItemClick = (event) => {
        const data = event.currentTarget.dataset.avatarid
        actionOnClick(data);
    }

    return (
        <ModalWindowBackdrop theme='dark'>

        <AvatarList>
            {avatarsData && avatarsData.map(({name, link, id}) => {
                return (
                    <AvatarListItem key={id} data-avatarid={`${id}`} onClick={(e) => {
                        onItemClick(e)
                    }}>
                        <AvatarImgThumb>
                            <img src={link} alt='marvel avengers avatar'/>
                        </AvatarImgThumb>
                    </AvatarListItem>
                    
                )
            })}
            <CloseButton onClick={onCloseClick}>
                <GrClose/>
            </CloseButton>
        </AvatarList>
        </ModalWindowBackdrop>
    )
}