import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    const { colors } = useTheme();

    const homeStyles = createHomeStyles(colors)

    const todos = useQuery(api.todo.getTodos);

    const todoCompletos = todos ? todos.filter((todo) => todo.IsCompleted).length : 0;
    const todoTotal = todos ? todos.length : 0;
    const barraDeProgresso = todoTotal > 0 ? (todoCompletos / todoTotal) * 100 : 0;

  return (
    <View style={homeStyles.header}>
        
        {/* {ICONE} */}
        <View style={homeStyles.titleContainer}>
            <LinearGradient colors={["#0063f7", "#000000"]} style={homeStyles.iconContainer}>
                <Ionicons name='flash' size={30} color={'#ffffff'}/>
            </LinearGradient>
        </View>

        {/* {TEXTO} */}
        <View style={homeStyles.titleTextContainer}>
            <Text style={homeStyles.title}> Indiana </Text>
            <Text style={homeStyles.subtitle}> {todoCompletos} de {todoCompletos} </Text>
        </View>

        {/* {BARRA DE TAREFA} */}
        <View style={homeStyles.progressContainer}>
            <View style={homeStyles.progressBarContainer}>
                <View style={homeStyles.progressBar}>
                    <LinearGradient colors={["#000000", "#0063f7"]} style={[homeStyles.progressFill, {width : `${barraDeProgresso}%`}]} />
                </View>
            </View>
        </View>

    </View>

  )
}

export default Header