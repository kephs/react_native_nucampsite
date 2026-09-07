import { useState } from 'react';
import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const DirectoryScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);

const renderDirectoryItem = ({ item: campsite }) => {
    return (
        <ListItem
            key={campsite.id}
            onPress={() =>
                navigation.navigate('CampsiteInfo', { campsite })
            }
        >
            <ListItem.Content>
                <Avatar source={campsite.image} rounded />

                <ListItem.Title>
                    {campsite.name}
                </ListItem.Title>

                <ListItem.Subtitle>
                    {campsite.description}
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    );
};

    return (
        <FlatList
            data={campsites}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
};

export default DirectoryScreen;