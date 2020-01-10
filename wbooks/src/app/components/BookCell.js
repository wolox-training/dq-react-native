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
            <View style={styles.subContainer}>
                <Image style={styles.image} source={{uri: 'http://www.reactnativeexpress.com/static/logo.png'}}></Image>
                <View style={styles.textsContainer}>
                    <Text numberOfLines={2} style={styles.title}>{this.props.title}</Text>
                    <Text numberOfLines={1} style={styles.subtitle}>{this.props.subtitle}</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        height: 90,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "white",
        paddingTop: 15
    },
    subContainer: {
        flex:1,
        flexDirection: "row",
    },
    image: {
        height: 60,
        width: 40,
        marginStart: 30,
        marginEnd: 30, 
        backgroundColor: "yellow"
    },
    textsContainer: {
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 17,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 15,
        fontWeight: "300",
        color: "#4A4A4A"
    }
  });