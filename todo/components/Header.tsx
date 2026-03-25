import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
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
  // ternario         variavel = condicao ? se verdadeiro : se falso

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        {/* ICONE */}
        <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
          <Ionicons name='calendar' size={30} color={"#fff"} />
        </LinearGradient>
      </View>

      {/* TEXTO */}
      <View style={homeStyles.titleTextContainer}>
        <Text style={homeStyles.title}>TAREFAS DE HOJE 🆗</Text>
        <Text style={homeStyles.subtitle}> {todoCompletos} de {todoTotal} </Text>
      </View>

      {/* BARRA DE TAREFA */}
      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient colors={["#3265f1","#6c3ad0"]} style={[homeStyles.progressFill, {width : `${barraDeProgresso}%`}]}/>
          </View>
        </View>
      </View>
    </View>  
  )
}

export default Header