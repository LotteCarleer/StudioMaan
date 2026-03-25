import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";


const BlogDetail = ({ route }) => {
  const { title, description, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
      <Text>{description}</Text>
      <Text>{content}</Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
 
});

export default BlogDetail;