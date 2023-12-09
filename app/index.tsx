import * as React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNavigationProp,
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

type RootStackParamList = {
  Details: {category: string};
  Posts: {post: number};
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Details' | 'Posts'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => (
  <View style={styles.box}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details', {category: 'one'})}
    />
    <Button
      title="Go to Posts"
      onPress={() => navigation.navigate('Posts', {post: 1})}
    />
  </View>
);

const DetailsScreen: React.FC<{route: {params: {category: string}}}> = ({
  route,
}) => {
  const {category} = route.params;

  return (
    <View style={styles.box}>
      <Text>Details {category}</Text>
    </View>
  );
};

const PostsScreen: React.FC<{route: {params: {post: number}}}> = ({route}) => {
  const {post} = route.params;

  return (
    <View style={styles.box}>
      <Text>Post Screen {post}</Text>
    </View>
  );
};

const CustomBackImage = () => (
  <Image
    style={{width: 30, height: 30}}
    source={{
      uri: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
    }}
  />
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
          opacity: 0.7,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitle: '',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitle: CustomBackImage}}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
