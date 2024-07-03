import { Image, Pressable } from 'react-native'

export default function EmojiImage({ src, onPress }) {

  return (
    <Pressable onPress={onPress}className="w-20 h-20 rounded">
        <Image
          className="w-20 h-20 rounded-full"
          source={src}	
        />
    </Pressable>
  )
}
