import { PasswordSecureLable } from "./PasswordSecureLable.styled";
import { useEffect, useState } from "react"; 
import { secureLabelCreator } from "helpers/secureLabelCreator";

export const PasswordSecureLableComponent = ({data}) => {

    const [secureLableProps, setSecureLableProps] = useState(
        {
            width: "0",
            color: null,
        }
    );
//1. Красный - меньше 6 символов - 25%
//2.Желтый - больше 6 символов - 50%
//3.Желто-Зеленый - больше 6 сиволов и буквы - 75%
//4.Зеленый - больше 6 сиволов, буквы, Большие буквы - 100%

    
    
    useEffect(() => {
        if(data === null) {
            return
        }
        setSecureLableProps(secureLabelCreator(data))
    },[data])


    

    return (
        <>
            {data !== null && <PasswordSecureLable secureLableProps={secureLableProps}/>}
        </>   
    )
}