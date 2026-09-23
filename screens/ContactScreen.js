import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';

const ContactScreen = () => {
    const sendMail = () => {
        MailComposer.composeAsync({
            recipients: ['campsites@nucamp.co'],
            subject: 'Inquiry',
            body: 'To whom it may concern:'
        });
    };

    return (
        <ScrollView>
            <Animatable.View
                animation='fadeInDown'
                duration={2000}
                delay={1000}
            >
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

                    <Button
                        title='Send Email'
                        buttonStyle={{
                            backgroundColor: '#5637DD',
                            margin: 40
                        }}
                        icon={
                            <Icon
                                name='envelope-o'
                                type='font-awesome'
                                color='#fff'
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        onPress={() => sendMail()}
                    />
                </View>
            </Animatable.View>
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