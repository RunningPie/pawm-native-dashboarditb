import { View, TextInput } from 'react-native'
import { MagnifyingGlassIcon } from "react-native-heroicons/outline"

interface SearchBarProps {
  placeholder?: string
  onChangeText?: (text: string) => void
  value?: string
  containerStyle?: string
}

export const SearchBar = ({ 
  placeholder = "Search for...",
  onChangeText,
  value,
  containerStyle
}: SearchBarProps) => {
  return (
    <View className={`flex-row items-center bg-gray-100 rounded-lg  px-4 py-1 shadow-2xl ${containerStyle}`}>
      <MagnifyingGlassIcon size={25} color="black" className="mr-2" />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#000000"
        className="flex-1 ml-2 font-karla-regular text-base text-black"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}