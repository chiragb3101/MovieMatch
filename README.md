# MovieMatch

This React Native app demonstrates a basic flow for a movie matching application.
It uses Firebase for authentication and Firestore for storing room data. Movies
are fetched from the TMDB API and presented with simple like/dislike buttons.

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the Metro bundler
   ```bash
   npm start
   ```
3. Launch on Android
   ```bash
   npm run android
   ```
   Or on iOS (requires macOS):
   ```bash
   npm run ios
   ```

Configure `src/firebase.ts` with your Firebase credentials and add a TMDB API key
in `src/screens/MovieSwipeScreen.tsx` before running the app.
