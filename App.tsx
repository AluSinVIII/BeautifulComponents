/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import BeautifulButton from '../BeautifulComponents/BComp/src/components/BeautifulButton'; 
import RoundedButton from '../BeautifulComponents/BComp/src/components/RoundedButton';
import OutlineButton from '../BeautifulComponents/BComp/src/components/OutlineButton';
import GradientButton from '../BeautifulComponents/BComp/src/components/GradientButton';
import BeautifulSearchBar from '../BeautifulComponents/BComp/src/components/BeautifulSearchBar';
import BeautifulForm from '../BeautifulComponents/BComp/src/components/BeautifulForm';
import BeautifulNavBar from '../BeautifulComponents/BComp/src/components/BeautifulNavBar';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
      
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>

      <Text style={styles.sectionTitle}>Les Beautifuls Composants</Text>
      <BeautifulButton onPress={() => console.log('BeautifulButton pressed')}>
        Press me!
      </BeautifulButton>

      <BeautifulSearchBar onSearch={() => console.log('Recherche:')} />

      <BeautifulForm onSubmit={() => console.log('Formulaire soumis:')} />

      <BeautifulNavBar
        title="Mon écran principal"
        onBackPress={() => console.log('Retour pressé')}
        onMenuPress={() => console.log('Menu pressé')}
      />

<Text style={styles.sectionTitle}>Les Composants de la Beautiful Community:</Text>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
