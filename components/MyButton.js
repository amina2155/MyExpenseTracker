import {StyleSheet, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import {useState} from 'react'

const ClassButton = ({title,onPress,color,small,hovercolor}) => {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <TouchableHighlight
      style={[styles.button,{borderColor:color}, {backgroundColor: isHovered ? hovercolor : 'white'}]}
      onPress={onPress}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Text
        style = {[
          styles.buttonText,
          small ? styles.small : styles.large,
          {color}
        ]}
      >{title}</Text>
    </TouchableHighlight>
  )

}

export default ClassButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
})