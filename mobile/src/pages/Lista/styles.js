import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bgDiv: {
    height: '100%', 
    backgroundColor: '#8867DD'
  },

  bgTitle: {
    paddingHorizontal: 32, 
    paddingVertical: 64, 
    color: 'white',
    fontSize: 24
  },

  frontDiv: {
    marginTop: '50%', 
    position: 'absolute',
    backgroundColor: '#F7FAFC',
    height: '100%',
    width: '100%'
  },

  inputDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    marginVertical: 24,
    paddingRight: 22
  },

  inputTitle: {
    fontSize: 18
  },

  buttons: {
    marginTop: 20,
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'center'
  },

  buttonProp: {
    margin: 5, 
    height: 50, 
    width: 100, 
    backgroundColor: 'white', 
    color: '#8867DD',
    fontSize: 12
  }
})