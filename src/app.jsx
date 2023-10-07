import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from './screens';

const Stack = createNativeStackNavigator();

export default function App()
{
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Screens.Home} />
                <Stack.Screen name="Settings" component={Screens.Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}