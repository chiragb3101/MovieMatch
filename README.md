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
3. Open `http://YOUR_IP:8081` from your phone to verify the server is reachable.
4. Launch on Android
   ```bash
   npm run android
   ```
   Or on iOS (requires macOS):
   ```bash
   npm run ios
   ```

Configure `src/firebase.ts` with your Firebase credentials and add a TMDB API key
in `src/screens/MovieSwipeScreen.tsx` before running the app.

## Viewing on a Physical Device

You can run the application directly on your phone instead of an emulator.

### Android

1. Enable **Developer options** and **USB debugging** on your Android device.
2. Connect the phone with a USB cable and verify it appears via `adb devices`.
3. Start the Metro bundler in one terminal:
   ```bash
   npm start
   ```
   Confirm your phone can reach `http://YOUR_IP:8081` from a browser on the device.
4. In another terminal, build and deploy the app:
   ```bash
   npm run android
   ```
   If you encounter a connection error, run `adb reverse tcp:8081 tcp:8081` so your device can reach the bundler.

### iOS

1. Connect your iPhone via USB (macOS and Xcode are required).
2. Start the Metro bundler:
   ```bash
   npm start
   ```
   Visit `http://YOUR_IP:8081` in Safari on your phone to ensure the bundler is accessible.
3. Run the iOS project:
   ```bash
   npm run ios
   ```
   Make sure the phone and computer are on the same network so the bundle loads correctly.

After the app launches on your device, shake it to open the React Native development menu.
