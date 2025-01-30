import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    titleContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2196F3",
      },
  title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2196F3",
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
    },
    sectionText: {
        fontSize: 20,
        color: "rgba(33, 33, 33, 0.9)",
      },
})