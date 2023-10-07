import React from 'react';
import { InputField, View, Input, ButtonText } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { setName as UserSetName, setLastName as UserSetLastName } from '../store/userSlice';


function SettingsScreen({
    navigation
}) {
    const user = useSelector(state => state.user.value);
    const dispatch = useDispatch();

    const [name, setName] = React.useState(user.name.trim());
    const [lastName, setLastName] = React.useState(user.lastName.trim());

    function save() {
        dispatch(UserSetName(name));
        dispatch(UserSetLastName(lastName));
        navigation.goBack();
    }

    return (
        <View>
            <Input>
                <InputField value={name} placeholder='Nombre' onChangeText={setName}/>
            </Input>
            <Input>
                <InputField value={lastName} placeholder='Apellido' onChangeText={setLastName}/>
            </Input>
            <Button onPress={() => save()}>
                <ButtonText>
                    Guardar
                </ButtonText>
            </Button>
        </View>
    );
};

export default SettingsScreen;
