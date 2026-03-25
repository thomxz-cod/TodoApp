import { createHomeStyles } from '@/assets/styles/home.styles';
import { api } from '@/convex/_generated/api';
import useTheme from "@/hooks/useTheme";
import { Ionicons } from '@expo/vector-icons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, View } from 'react-native';

const AdicionarTodo = () => {
    const { colors } = useTheme();
    const homeStyles = createHomeStyles(colors);

    const [newTodo, setNewTodo] = useState("");
    const addTodo = useMutation(api.todo.addTodo);

    const handleAddTodo = async () => {
        if (newTodo.trim()){
            try {
                await addTodo({ text : newTodo.trim()})
            } catch (error) {
                console.log("Erro ao adicionar o todo ",error);
                Alert.alert("Error","Erro ao adicionar");
            }
        }
    }

    return (
        <View style={homeStyles.inputSection}>
            <View style={homeStyles.inputWrapper}>
                <TextInput style={homeStyles.input} placeholder='Digite uma tarefa' placeholderTextColor={colors.textMuted} multiline value={newTodo} onChangeText={setNewTodo} onSubmitEditing={handleAddTodo}/>
                <TouchableOpacity onPress={handleAddTodo} disabled={!newTodo.trim()}>
                    <LinearGradient style={homeStyles.addButton} colors={colors.gradients.primary}>
                        <Ionicons name='add' size={24} color={"#fff"}></Ionicons>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AdicionarTodo