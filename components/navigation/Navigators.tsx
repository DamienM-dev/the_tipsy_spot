// REACT NAVIGATION

import {createStackNavigator} from '@react-navigation/stack';

// COMPONENTS

import HomeScreen from '../home/Home';
import ListProducts from '../products/ListProducts';

const StackNavigatorContainer = createStackNavigator();

const StackNavigator = () => {
    return(
        <StackNavigatorContainer.Navigator>
            <StackNavigatorContainer.Screen name='Home' component={HomeScreen} />
            <StackNavigatorContainer.Screen name='ListProducts' component={ListProducts} />
        </StackNavigatorContainer.Navigator>
    )
}
export default StackNavigator;