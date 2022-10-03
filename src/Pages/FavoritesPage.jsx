import { Section, Container } from "GlobalStyles";
import { FavoriteList } from "components";
import { useSelector } from "react-redux";

export default function FavoritesPage () {
    const {moreRocketsData} = useSelector((state) => state.otherData);
    const {favIds} = useSelector((state) => state.favorites);

    const dataToRender = moreRocketsData.filter(item => favIds.includes(item.id));

    return (
        <Section className="favorites" style={{minHeight: "100vh"}}>
            <Container className="favorites__container" >
                <FavoriteList data={dataToRender}/>
            </Container>
        </Section>
    )
}