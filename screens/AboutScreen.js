import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const Mission = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>Our Mission</Text>

            <View style={styles.divider} />

            <Text style={styles.missionText}>
                We present a curated database of the best campsites in the vast
                woods and backcountry of the World Wide Web Wilderness. We
                increase access to adventure for the public while promoting safe
                and respectful use of resources. The expert wilderness trekkers
                on our staff personally verify each campsite to make sure that
                they are up to our standards. We also present a platform for
                campers to share reviews on campsites they have visited with
                each other.
            </Text>
        </View>
    );
};

const AboutScreen = () => {
    const partners = useSelector((state) => state.partners);

    return (
        <ScrollView>
            <Mission />

            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Community Partners
                </Text>

                <View style={styles.divider} />

                {partners.partnersArray.map((partner) => (
                    <View
                        key={partner.id}
                        style={styles.partnerItem}
                    >
                        <Image
                            source={{
                                uri: baseUrl + partner.image
                            }}
                            style={styles.partnerImage}
                        />

                        <View style={styles.partnerContent}>
                            <Text style={styles.partnerName}>
                                {partner.name}
                            </Text>

                            <Text style={styles.partnerDescription}>
                                {partner.description}
                            </Text>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4
    },
    cardTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#43484d',
        marginBottom: 10
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginBottom: 10
    },
    missionText: {
        margin: 10,
        fontSize: 14,
        color: '#43484d'
    },
    partnerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    partnerImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12
    },
    partnerContent: {
        flex: 1
    },
    partnerName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#43484d',
        marginBottom: 4
    },
    partnerDescription: {
        fontSize: 14,
        color: '#666'
    }
});

export default AboutScreen;