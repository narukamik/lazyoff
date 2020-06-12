import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bgDiv: {
    height: '100%', 
    backgroundColor: 'grey'
  },

  bgTitle: {
    paddingHorizontal: 32, 
    paddingVertical: '20%', 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 24
  },

  frontDiv: {
    marginTop: '50%', 
    position: 'absolute',
    backgroundColor: 'white',
    height: '100%',
    width: '100%', 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20
  },

  frontTitle: {
    marginHorizontal: 32, 
    marginVertical: 24, 
    color: 'gray', 
    fontSize: 16
  },

  inputDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },

  inputTitle: {
    height: 40,
    fontSize: 16
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
    backgroundColor: 'black', 
    color: 'white',
    fontSize: 12
  }
})