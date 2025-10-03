import {View} from 'react-native'

const Bolinha = (props) => {
    return (
    <View style = {{
        width: props.lado || 50,
        height: props.altura || 50,
        backgroundColor: props.cor || "black",
        borderRadius: 100,
    }}>
    </View>
)
}

export default Bolinha