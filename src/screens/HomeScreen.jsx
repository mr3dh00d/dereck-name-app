import { Button, ButtonText } from '@gluestack-ui/themed';
import { View, Text} from 'react-native';
import { useSelector } from 'react-redux';

function HomeScreen({navigation }) {
    const user = useSelector(state => state.user.value);
    return (
        <View>
            <Text>Hola {user.name} {user.lastName}</Text>
            <Button style={{width: 200}} onPress={() => navigation.navigate('Settings')}>
                <ButtonText>ir a Configuración</ButtonText>
            </Button>
        </View>
    );
};

export default HomeScreen;
