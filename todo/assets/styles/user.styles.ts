import { ColorScheme } from "@/hooks/useTheme";
import { StyleSheet } from "react-native";

export const createUserStyles = (colors: ColorScheme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bg,
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    }, title: {
      fontSize: 32,
      fontWeight: "700",
      letterSpacing: -1,
      color: colors.text,
      textAlign: "center"
    },
    section: {
      borderRadius: 20,
      padding: 24,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8, // elevation is used to create a shadow on the section, in android
    },
    changeBtn: {
      width: 150,
      flex: 1,
      justifyContent: "center",
      borderRadius: 20,
      padding: 24,
      shadowColor: "#000",
      backgroundColor:colors.success ,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8, // elevation is used to create a shadow on the section, in android
    },
    userIcon: {
      color: "white" ,
      textAlign: "center",
      fontSize: 80
    },
  });

  return styles;
};