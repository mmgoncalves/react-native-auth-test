import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAGIb6B9AWkS9nzG6qkuFIBfBfwOHNOz1Q",
            authDomain: "authentication-4a569.firebaseapp.com",
            databaseURL: "https://authentication-4a569.firebaseio.com",
            storageBucket: "authentication-4a569.appspot.com",
            messagingSenderId: "954684654249"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button onPress={() => console.log("Log Out")}>
                    Log Out
                </Button>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    };
}

export default App;
