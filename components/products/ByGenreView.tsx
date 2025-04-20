import { Text, View } from "react-native"
import ByGenre from "./ByGenre"

// type

const title:string= "Par genre"

const ByGenreView = () => {
    return(
        <View>
            <Text>{title}</Text>
            <ByGenre />
        </View>
    )
}

export default ByGenreView