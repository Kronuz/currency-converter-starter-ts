import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeImageSize: imageWidth,
  $smallImageSize: imageWidth / 2,
  container: {
    alignItems: 'center',
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeImageSize',
    height: '$largeImageSize',
  },
  text: {
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
