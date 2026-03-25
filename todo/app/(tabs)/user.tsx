import { createUserStyles } from '@/assets/styles/user.styles';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const user = () => {
  const { toggleDarkMode, colors } = useTheme();
  const userStyles = createUserStyles(colors)

  return (
    <View style={userStyles.container}>
      <View>
        <Ionicons style={userStyles.userIcon} name='person' />
        <Text style={userStyles.title}>user</Text>
        <TouchableOpacity style={userStyles.changeBtn} onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
      </View>
    </View>
  )
}

export default user