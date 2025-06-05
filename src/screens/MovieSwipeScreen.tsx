import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';

const API_KEY = 'YOUR_TMDB_API_KEY';

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

export default function MovieSwipeScreen() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`);
        const data = await res.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  const movie = movies[index];
  const like = () => setIndex((i) => Math.min(i + 1, movies.length - 1));
  const dislike = () => setIndex((i) => Math.min(i + 1, movies.length - 1));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      {movie.poster_path ? (
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }} style={styles.poster} />
      ) : null}
      <Text style={styles.overview}>{movie.overview}</Text>
      <View style={styles.buttons}>
        <Button title="Dislike" onPress={dislike} />
        <Button title="Like" onPress={like} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  overview: {
    marginVertical: 20,
  },
  poster: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
