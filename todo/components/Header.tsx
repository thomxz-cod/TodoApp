import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todo.getTodos);

  const todoCompletos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const todoTotal = todos ? todos.length : 0;
  const barraDeProgresso = todoTotal > 0 ? (todoCompletos / todoTotal) * 100 : 0;


  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>

        <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
          <FontAwesome5 name="spider" size={24} color="#fff" />
        </LinearGradient>
      </View>

      <View style={homeStyles.titleTextContainer}>
        <Text style={homeStyles.title}>TAREFAS DE HOJE </Text>
        <Text style={homeStyles.subtitle}> {todoCompletos} de {todoTotal} </Text>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient colors={["#172e6b","#581fca"]} style={[homeStyles.progressFill, {width : `${barraDeProgresso}%`}]}/>
          </View>
        </View>
      </View>
    </View>  
  )
}

export default Header