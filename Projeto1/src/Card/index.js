import { View, Text } from "react-native"
import styles from './style';

const Card = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.children}>{children}</Text>
      </View>
    </View>
  )
};

export default Card;