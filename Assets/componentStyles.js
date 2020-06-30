import {StyleSheet} from 'react-native';

const constants = {
  backgroundColor: 'black',
  elementColor: '#e0090d',
  textColor: 'white',
  inputFieldWidth: 200,
  inputFieldHeight: 50,
};

const flexBoxes = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.backgroundColor,
    flex: 1,
  },
  topBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: constants.backgroundColor,
    backgroundColor: 'green',
  },
  midBox: {
    flex: 8,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: constants.backgroundColor,
    backgroundColor: 'blue',
  },
  bottomBox: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: constants.backgroundColor,
  },
});

const buttons = StyleSheet.create({
  submitButton: {
    backgroundColor: constants.elementColor,
    padding: 10,
    margin: 15,
    height: constants.inputFieldHeight,
    width: constants.inputFieldWidth,
  },
  roundButton: {
    justifyContent: 'center',
    backgroundColor: 'black',
    width: 70,
    height: 70,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
  },
  roundButtonBig: {
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    backgroundColor: 'black',
    borderRadius: 80,
    margin: 30,
  },
  rightBox: {
    alignSelf: 'flex-end',
    margin: 15,
  },
});

const texts = StyleSheet.create({
  button: {
    color: constants.textColor,
    textAlign: 'center',
    fontSize: 20,
  },
  label: {
    color: constants.textColor,
    textAlign: 'left',
    height: constants.inputFieldHeight,
    width: constants.inputFieldWidth,
    fontSize: 20,
  },
  basicText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});

const inputs = StyleSheet.create({
  basicField: {
    height: constants.inputFieldHeight,
    width: constants.inputFieldWidth,
    borderColor: constants.elementColor,
    borderWidth: 1,
    marginBottom: 35,
    color: constants.textColor,
  },
  inputSelector: {
    height: 50,
    width: 150,
    color: 'white',
  },
  picker: {
    width: 250,
    height: 75,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 3,
  },
});

export {flexBoxes, buttons, texts, inputs};
