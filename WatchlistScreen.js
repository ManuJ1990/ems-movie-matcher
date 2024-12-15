import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { MovieCard } from './components/MovieCard';
import { movieData, movieGenres } from './data/dummyData';
import { MovieGenre } from './components/MovieGenre';

export function WatchlistScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Watchlist</Text>
            <ScrollView>
                {
                    movieGenres.map((genre) => {
                        return (
                            <MovieGenre
                                genreTitle={genre}
                                key={genre}
                            >
                                {
                                    movieData.filter((movie) => {
                                        return movie.genre === genre;
                                    }).map((filteredMovie) => {
                                        return (
                                            <MovieCard
                                                key={filteredMovie.title}
                                                imageUri={filteredMovie.backdrop_path}
                                                title={filteredMovie.title}
                                                rating={filteredMovie.vote_average}
                                                year={filteredMovie.release_date}
                                                containerStyle={styles.movieContainer}
                                            />
                                        );
                                    })
                                }
                            </MovieGenre>
                        )
                    })
                }
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    header: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    movieContainer: {
        marginRight: 20,
    },
});