import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class BookCell extends Component {
  render() {
    return (
        /*<View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>*/
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}></Image>
            <View style={styles.textsContainer}>
                <Text>some title</Text>
                <Text>some subtitle</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: "row",
        height: 90,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "white",
        paddingTop: 15
    },
    image: {
        height: 60,
        width: 40,
        marginStart: 30,
        marginEnd: 30, 
        backgroundColor: "yellow"
    },
    textsContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "green"
    },
    title: {

    },
    subtitle: {

    }
  });