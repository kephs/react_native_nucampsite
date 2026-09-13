import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import { baseUrl } from '../../shared/baseUrl';

const RenderCampsite = (props) => {
    const { campsite } = props;

    if (campsite) {
        return (
            <Card containerStyle={styles.cardContainer}>
                <Card.Image
                    source={{
                        uri: baseUrl + campsite.image
                    }}
                >
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

                <FontAwesome
                    name={
                        props.isFavorite
                            ? 'heart'
                            : 'heart-o'
                    }
                    size={30}
                    color='#f50'
                    style={styles.favoriteIcon}
                    onPress={() =>
                        props.isFavorite
                            ? console.log(
                                  'Already set as a favorite'
                              )
                            : props.markFavorite()
                    }
                />
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
    favoriteIcon: {
        margin: 15
    }
});

export default RenderCampsite;