import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

const ContactScreen = () => {
    return (
        <ScrollView>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>
                    Contact Information
                </Text>

                <View style={styles.divider} />

                <Text>1 Nucamp Way</Text>
                <Text>Seattle, WA 98001</Text>
                <Text style={{ marginBottom: 10 }}>
                    U.S.A.
                </Text>

                <Text>Phone: 1-206-555-1234</Text>
                <Text>Email: campsites@nucamp.co</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        margin: 20,
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
    }
});

export default ContactScreen;