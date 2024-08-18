import { Tabs } from "expo-router";
import { Image, View, Text } from "react-native";
import { trip, hstry, report, savings, dash } from "@/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const TabIcon: React.FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <>
      <View className="items-center justify-center gap-1">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text className={`${focused ? "font-bold" : ""} text-xs`}>{name}</Text>
      </View>
    </>
  );
};

const TabLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            title: "Dashboard",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={dash}
                color={color}
                name="Dashboard"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="trips"
          options={{
            title: "Trip table",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={trip}
                color={color}
                name="Trips"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={hstry}
                color={color}
                name="History"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="report"
          options={{
            title: "Report",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={report}
                color={color}
                name="Report"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="savings"
          options={{
            title: "Saving stats",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={savings}
                color={color}
                name="Savings"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </GestureHandlerRootView>
  );
};

export default TabLayout;
