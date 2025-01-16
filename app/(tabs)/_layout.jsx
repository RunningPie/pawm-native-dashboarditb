import React from "react";
import { Tabs } from "expo-router";
import {
  HomeIcon,
  StarIcon,
  ClockIcon,
  UserIcon,
} from "react-native-heroicons/outline";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F18912",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="level"
        options={{
          title: "Level",
          tabBarIcon: ({ color, size }) => (
            <StarIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <ClockIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <UserIcon color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="(details)/quiz"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(details)/course"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(details)/test"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="(course)/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
