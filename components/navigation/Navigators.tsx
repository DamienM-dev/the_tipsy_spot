// REACT NAVIGATION

import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS

import HomeScreen from '../home/Home';
import ListProducts from '../products/ListProducts';
import { Colors } from '@/constants/Colors';


// NAVIGATION
const StackNavigatorContainer = createStackNavigator();
const styleNavigation = {
    headerBackTitleStyle:{
        fontFamily:"textFonts"
},
    headerTintColor:Colors.textColor.black,
    headerStyle:{
        borderBottomColor: Colors.secondary.red,
        borderBottomWidth:1
    }
 
}

const StackNavigator = () => {
    return(
        <StackNavigatorContainer.Navigator>
            <StackNavigatorContainer.Screen name='Home' component={HomeScreen} options={
                {
                    title:"Accueil",
                    ...styleNavigation
                   
            }} />
            <StackNavigatorContainer.Screen name='ListProducts' component={ListProducts} options={{title:"Cocktails", ...styleNavigation}} />
        </StackNavigatorContainer.Navigator>
    )
}
export default StackNavigator;