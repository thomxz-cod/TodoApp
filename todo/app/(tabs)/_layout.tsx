import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    const { colors } = useTheme()
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor : colors.text,
            tabBarInactiveTintColor : colors.textMuted,
            tabBarStyle: {
                paddingBottom : 30,
                paddingTop: 10,
                backgroundColor : colors.bg
            },
            headerShown: false
        }}>
            <Tabs.Screen name='index' options={
                { title: "Home",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='home' color={color} size={size}/>
                  ) 
            }} />
           <Tabs.Screen name='settings' options={
                { title: "Settings",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='settings' color={color} size={size}/>
                  ) 
            }} />
             <Tabs.Screen name='user' options={
                { title: "User",
                  tabBarIcon : ({color, size}) => (
                    <Ionicons name='person' color={color} size={size}/>
                  ) 
            }} />
        </Tabs>
    )
}

export default TabsLayout