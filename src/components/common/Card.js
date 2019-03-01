import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  const { children } = props;

  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,

    // IOS Shadow Configuration
    shadowColor: '#000',
    shadowOffset: {
      width: 0, height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    // Android Shadow Configuration
    elevation: 1,

    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export { Card };
