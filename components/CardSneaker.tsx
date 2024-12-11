import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import Sneaker from '@/types/Sneaker'

interface CardSneakerProps {
    sneaker: Sneaker;
    children: ReactNode;
}

export default function CardSneaker({ sneaker, children }: CardSneakerProps) {
  return (
    <View style={styles.button}>
      <Text style={styles.title}>ID: 
        <Text style={styles.info}> {sneaker.id}</Text>
      </Text>
      <Text style={styles.title}>Nome: 
        <Text style={styles.info}> {sneaker.brand} {sneaker.name}</Text>
      </Text>
      <Text style={styles.title}>Preço: 
        <Text style={styles.info}> {sneaker.price}</Text>    
      </Text>

      <View style={styles.actions}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      width: '90%',
      display: 'flex',
      marginTop: 20,
      padding: 30,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "323232",
      backgroundColor: "#f6f6f6",
      boxShadow: "4px 4px #323232",
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: "900",
    },
    info: {
        fontWeight: "500",
        fontSize: 13,
    },
    actions: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
  });