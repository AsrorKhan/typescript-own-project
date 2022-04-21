import React, {FC} from "react";

import uz from './uz';
import ru from './ru';
import eng from './eng';
import {useAppSelector} from "../../hooks/redux";
import {languageKeys} from "../appConstants/languageKeys";

type translateProps = {
    label: keyof typeof ru | keyof typeof uz | keyof typeof eng;
}


export function Translate({label}: translateProps) {
    let value: string;
    const language = useAppSelector(state => state.changeLang.lang)

    switch (language) {
        case languageKeys.RU: {
            value = ru[label];
            break;
        }
        case languageKeys.UZ: {
            value = uz[label];
            break;
        }
        case languageKeys.ENG: {
            value = eng[label];
            break;
        }
        default: {
            value = ru[label];
            break;
        }
    }
    return (<>{value}</>);
}
