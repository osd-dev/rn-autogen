import {sizeFont, sizeHeight, sizeScale, sizeWidth} from './Responsive';
import {Colors, colorOpacityMaker} from './Colors';

export default {
  sheimpro: {
    fontFamily: 'gtwalsheimpro',
  },
  sheimproMedium: {
    fontFamily: 'gtwalsheimpro-medium',
  },
  sheimproBold: {
    fontFamily: 'gtwalsheimpro-bold',
  },
  text: {
    color: Colors.textTepapa,
    fontFamily: 'gtwalsheimpro',
    fontSize: sizeFont(16),
  },
  textWhite: {
    color: Colors.white,
    fontFamily: 'gtwalsheimpro',
    fontSize: sizeFont(16),
  },
  button: {
    height: sizeScale(45),
    backgroundColor: Colors.cerulean,
    paddingHorizontal: sizeWidth(10),
    paddingVertical: sizeHeight(2),
    borderRadius: sizeScale(30),
    margin: sizeHeight(0.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  flexRow: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.bgAthensGray,
  },
};
