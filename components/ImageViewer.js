import { Image, StyleSheet, View } from "react-native";

const PlaceholderImage = require('../assets/images/background-image.png');

export default function ImageViewer({selectedImage}) {
    const img = selectedImage ? { uri: selectedImage } : PlaceholderImage;
    return (
        <Image source={img} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});