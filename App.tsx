import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import CreateRoomScreen from './src/screens/CreateRoomScreen';
import JoinRoomScreen from './src/screens/JoinRoomScreen';
import MovieSwipeScreen from './src/screens/MovieSwipeScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
  CreateRoom: undefined;
  JoinRoom: undefined;
  MovieSwipe: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const LoginWrapper = (props: NativeStackScreenProps<RootStackParamList, 'Login'>) => (
    <LoginScreen onSignup={() => props.navigation.navigate('Signup')} onLoggedIn={() => setLoggedIn(true)} />
  );

  const SignupWrapper = (props: NativeStackScreenProps<RootStackParamList, 'Signup'>) => (
    <SignupScreen onBack={() => props.navigation.goBack()} onSignedUp={() => setLoggedIn(true)} />
  );

  const HomeWrapper = (props: NativeStackScreenProps<RootStackParamList, 'Home'>) => (
    <HomeScreen onCreateRoom={() => props.navigation.navigate('CreateRoom')} onJoinRoom={() => props.navigation.navigate('JoinRoom')} />
  );

  const CreateRoomWrapper = (props: NativeStackScreenProps<RootStackParamList, 'CreateRoom'>) => (
    <CreateRoomScreen onRoomCreated={() => props.navigation.navigate('MovieSwipe')} />
  );

  const JoinRoomWrapper = (props: NativeStackScreenProps<RootStackParamList, 'JoinRoom'>) => (
    <JoinRoomScreen onJoined={() => props.navigation.navigate('MovieSwipe')} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginWrapper} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupWrapper} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeWrapper} options={{ headerShown: false }} />
            <Stack.Screen name="CreateRoom" component={CreateRoomWrapper} options={{ title: 'Create Room' }} />
            <Stack.Screen name="JoinRoom" component={JoinRoomWrapper} options={{ title: 'Join Room' }} />
            <Stack.Screen name="MovieSwipe" component={MovieSwipeScreen} options={{ title: 'Movies' }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
