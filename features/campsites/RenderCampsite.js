import { View, StyleSheet, Text } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (campsite) {
        return (
            <Animatable.View
                animation='fadeInDownBig'
                duration={2000}
                delay={1000}
            >
                <Card containerStyle={{ padding: 0 }}>
                    <Card.Image source={campsite.image}>
                        <Text style={styles.cardText}>
                            {campsite.name}
                        </Text>
                    </Card.Image>

                    <View style={styles.cardRow}>
                        <Icon
                            name={
                                props.isFavorite
                                    ? 'heart'
                                    : 'heart-o'
                            }
                            type='font-awesome'
                            color='#f50'
                            raised
                            reverse
                            onPress={() =>
                                props.markFavorite()
                            }
                        />

                        <Icon
                            name='pencil'
                            type='font-awesome'
                            color='#5637DD'
                            raised
                            reverse
                            onPress={() =>
                                props.onShowModal()
                            }
                        />
                    </View>
                </Card>
            </Animatable.View>
        );
    }

    return <View />;
};

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    cardText: {
        textShadowColor: 'rgba(0, 0, 0, 1)',
        textShadowOffset: {
            width: -1,
            height: 1
        },
        textShadowRadius: 20,
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    }
});

export default RenderCampsite;