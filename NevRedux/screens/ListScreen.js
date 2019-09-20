import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ListScreen = props => {
      return (
            <View style={styles.container}>
                  <Button title='Back' onPress={() => {
                        props.navigation.navigate({
                              routeName: 'First'
                        });
                  }}>
                  </Button>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            paddingBottom: 10,
            flex: 1,
            backgroundColor: 'cornsilk',
            alignItems: 'center',
            justifyContent: 'center',
      },

      title: {
		flex: 1,
		fontSize: 46,
		color: 'white',
		textAlign: 'center',
	}
});

export default ListScreen;