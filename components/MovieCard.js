import { View, Text, Image, StyleSheet } from 'react-native';

export function MovieCard(props) {
    return (
        <View style={[styles.movieContainer, props.containerStyle]}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{
                        uri:props.imageUri,
                    }} />
            </View>
            <View style={styles.textContainer}>
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>{props.rating}/10</Text>
                    <Text style={styles.subtitle}>{props.year}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    movieContainer: {
      width: 192,
      paddingVertical: 10,
    },
    imageContainer: {
      width: 192,
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
    },
    textContainer: {
      marginTop: 10,
    },
    title: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitleContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    subtitle: {
      color: '#ccc',
      fontSize: 14,
    },
  });