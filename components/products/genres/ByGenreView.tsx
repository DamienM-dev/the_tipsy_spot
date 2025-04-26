import { Text, View } from "react-native"

import { StylesSame } from "@/constants/StyleSame"
import ByGenre from "./ByGenre"

// type

const title:string= "Par genre"

const ByGenreView = () => {
    return(
        <View >
            <Text style={StylesSame.titleSubCategory}>{title}</Text>
            <ByGenre />
        </View>
    )
}

export default ByGenreView