import useTheme from "@/hooks/useTheme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  return (
    <View >
      <View >
        <Text >HOME</Text>
        <TouchableOpacity onPress={toggleDarkMode}>MUDA TEMA</TouchableOpacity>
      </View>
    </View>
  )
}