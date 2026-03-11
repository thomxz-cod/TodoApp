import { createHomeStyles } from "@/assets/styles/home.styles";
import AdicionarTodo from "@/components/AdicionarTodo";
import Header from "@/components/Header";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();
  const homeStyles = createHomeStyles(colors)

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>

      <SafeAreaView style={homeStyles.safeArea}>
        <Header />
        <Text style={homeStyles.title}>HOME</Text>
        <AdicionarTodo />
        <TouchableOpacity onPress={toggleDarkMode} style={homeStyles.title}>MUDA TEMA</TouchableOpacity>
      </SafeAreaView>

    </LinearGradient>

  )
}