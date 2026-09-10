import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image source={campsite.image}>
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 20
                        }}
                    >
                        {campsite.name}
                    </Text>
                </Card.Image>

                <Text style={{ margin: 20 }}>
                    {campsite.description}
                </Text>

                <TouchableOpacity
                    style={styles.favoriteButton}
                    onPress={() =>
                        props.isFavorite
                            ? console.log('Already set as a favorite')
                            : props.markFavorite()
                    }
                >
                    <FontAwesome
                        name={props.isFavorite ? 'heart' : 'heart-o'}
                        size={24}
                        color='#fff'
                    />
                </TouchableOpacity>
            </Card>
        );
    }

    return <></>;
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 20
    },
    favoriteButton: {
        backgroundColor: '#f50',
        width: 52,
        height: 52,
        borderRadius: 26,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        elevation: 4
    }
});

export default RenderCampsite;