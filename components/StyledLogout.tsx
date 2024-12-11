import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
  } from "react-native";
  
  import globalStyles from "../styles/globalStyles";
  import { useState } from "react";
  
  type StyledButtonProps = {
    title: string;
  } & TouchableOpacityProps;
  
  export default function StyledButton({ title, ...props }: StyledButtonProps) {
    const [isActive, setIsActive] = useState(false);

    const handlePressIn = () => {
      setIsActive(true); // Ativa o estilo de pressionado
    };

    const handlePressOut = () => {
      setIsActive(false); // Desativa o estilo de pressionado
    };

    return (
      <TouchableOpacity {...props} style={[styles.button, props.style, isActive && styles.active]}
        onPressIn={handlePressIn} // Detecta quando o botão é pressionado
        onPressOut={handlePressOut}>
        <Text style={globalStyles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
      fontSize: 8,
      color: '#323232',
      marginLeft: 12,
      width: 'auto',
      boxShadow: '2px 2px #323232',
      paddingHorizontal: 5,
      borderRadius: 2,
      borderWidth: 1,
    },
    active: {
      boxShadow: "0px 0px #323232",
      transform: [{ translateX: 2 }, { translateY: 2 }],
      opacity: 1,
    },
  });
  