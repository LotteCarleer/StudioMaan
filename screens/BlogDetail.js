import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from "react-native";


const BlogDetail = ({ route }) => {
  const { title, subtitle, image, } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.image} />
      <Text style={styles.subtitle}>{subtitle}</Text>
      

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4edda",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  Text: {
    textAlign: "center",
    fontSize: 16,
  
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  subtitle:{
   textAlign: "center",
   fontSize: 16,
   marginTop: 20,
   marginBottom: 20,
   marginLeft: 20,
   marginRight: 20,

  },
 
});

export default BlogDetail;