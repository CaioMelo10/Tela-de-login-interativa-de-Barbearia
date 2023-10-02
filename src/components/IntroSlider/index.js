import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: '1',
    title: 'Estilo',
    text: 'ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.',
    image: require('../../assets/estilo.jpg'),
  },
  {
    key: '2',
    title: 'Ambiente',
    text: 'Nosso espaço é um escape da correria da vida, onde você pode se desligar e desfrutar de momentos de cuidado pessoal.',
    image: require('../../assets/barbearia.jpg'),
  },
  {
    key: '3',
    title: 'Cortes',
    text: 'Na nossa barbearia, não apenas cortamos cabelos, esculpimos estilos e transformamos confiança',
    image: require('../../assets/corte.png'),
  },
];

export default function IntroSlider({ onDone }) {
  function renderSlides({ item }) {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  return (
    <AppIntroSlider
      renderItem={renderSlides}
      data={slides}
      activeDotStyle={{
        backgroundColor: '#009CFF',
        width: 30,
      }}
      renderNextButton={() => {}}
      renderDoneButton={() => (
        <Text style={{ fontSize: 20 }} onPress={onDone}>
          Acessar!
        </Text>
      )}
      onDone={onDone}
    />
  );
}

const styles = StyleSheet.create({
  slideContainer: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    height: '73%',
    width: '100%',
  },
  title: {
    paddingTop: 25,
    paddingBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#009CFF',
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#b5b5b5',
    paddingHorizontal: 25,
    fontSize: 15,
  },
});
