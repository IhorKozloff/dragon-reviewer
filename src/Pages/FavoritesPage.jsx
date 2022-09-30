import { Section, Container } from "GlobalStyles";
import { FavoriteList } from "components";
import { useSelector } from "react-redux";

export const FavoritesPage = () => {
    const {moreRocketsData} = useSelector((state) => state.otherData);
    const {favIds} = useSelector((state) => state.favorites);

    const dataToRender = moreRocketsData.filter(item => favIds.includes(item.id));

    return (
        <Section className="favorites">
            <Container className="favorites__container">
                <h3 style={{textAlign: "center", margin: "20px 0"}}>Here you can view or delete your favorites.</h3>
                <FavoriteList data={dataToRender}/>
            </Container>
        </Section>
    )
}