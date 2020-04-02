import { StyleSheet } from 'react-native';
import Contants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: Contants.statusBarHeight + 20,      
    },

    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    headerText: {
      fontSize: 15,
      color:'#737380',
    },

    headerTextBold: {
      fontWeight: 'bold'
    },

    title: {
      fontSize: 30,
      marginTop: 48,
      marginBottom: 16,
      color: '#13131a',
      fontWeight: 'bold'
    },

    description: {
      fontSize: 16,
      lineHeight: 24,
      color: '#737380'
    },

    incidentList: {
      marginTop: 32,
    },

    incident: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
    },

    incidentProperty: {
      fontSize:14,
      color: '#41414D',
      fontWeight: 'bold',
    },

    incidentValue: {
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#737380'
    },

    detailsButoon: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    detailsButoonText: {
      color: '#E02041',
      fontSize: 15,
      fontWeight: 'bold',
    },
    
  });