import { avatarsData } from "assets/avatar-set";

export const getAvatarLinkById = (querry) => {

    const { link } = avatarsData.find(item => item.id === querry);
    return link;
}
