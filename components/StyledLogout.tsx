import {
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableHighlightProps
  } from "react-native";
  
  import globalStyles from "../styles/globalStyles";
  import { useState } from "react";
  
  type StyledButtonProps = {
    title: string;
  } & TouchableHighlightProps;
  
  export default function StyledButton({ title, ...props }: StyledButtonProps) {
    return (
      <TouchableHighlight {...props} style={[styles.button, props.style]}>
        <Text style={globalStyles.buttonText}>{title}</Text>
      </TouchableHighlight>
    );
  }
  
  const styles = StyleSheet.create({
    button: {
        color: '#323232',
        backgroundColor: 'red',
    }
  });
  