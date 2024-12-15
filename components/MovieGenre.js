import { View, Text, StyleSheet, ScrollView } from 'react-native';

export function MovieGenre({ genreTitle, children }) {
    return (
        <View style={styles.genreContainer}>
            <Text style={styles.title}>{genreTitle}</Text>
            <ScrollView horizontal={true} style={styles.moviesContainer}>
                {
                    children
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    genreContainer: {
        marginTop: 25,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    moviesContainer: {

    },
});