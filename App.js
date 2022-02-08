import React from 'react';
import { View } from 'react-native';
import { AuthProvider } from './src/navigation/authProvider';
import Navigator from './src/navigation/navigator';


const App: () => Node = () => {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
};

export default App;
