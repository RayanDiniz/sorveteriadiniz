import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Inicio: {
            screens: {
              Inicio: 'one',
            },
          },
          Cardapio: {
            screens: {
              Cardapio: 'two',
            },
          },
          User: {
            screens: {
              Inicio: 'three',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
