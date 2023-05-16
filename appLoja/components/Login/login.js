import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { TextInput } from "react-native-paper";
import firebase from "../../services/connectionFirebase";

export default function Login({ changeStatus }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("login");

  //metodo handleLogin para verificar se é Login ou cadastrar
  function handleLogin() {
    if (type === "login") {
      // Aqui fazemos o login
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid);
        })
        .catch((err) => {
          console.log(err);
          alert("Email ou senha não cadastrados!");
          return;
        });
    } else {
      // Aqui cadastramos o usuario
      const user = firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          changeStatus(user.user.uid);
        })
        .catch((err) => {
          console.log(err);
          alert("Erro ao Cadastrar!");
          return;
        });
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/user.PNG")}
        style={{ width: 330, height: 300, marginLeft: 48 }}
      ></Image>
      <SafeAreaView>
        <TextInput
          label="E-mail"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          right={<TextInput.Icon icon="email" />}
        />
        <TextInput
          label="Senha"
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
      </SafeAreaView>
      <TouchableOpacity
        style={[
          styles.handleLogin,
          { backgroundColor: type === "login" ? "#87CEFA" : "blue" },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          {type === "login" ? "Acessar" : "Cadastrar"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType((type) => (type === "login" ? "cadastrar" : "login"))
        }
      >
        <Text style={{ textAlign: "center" }}>
          {type === "login" ? "Criar uma conta" : "Já possuo uma conta"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    marginLeft: 40,
    backgroundColor: "#FFF",
    borderRadius: 4,
    height: 45,
    width: 320,
    padding: 10,
    borderWidth: 1,
    borderColor: "#87CEFA",
  },
  handleLogin: {
    alignItems: "center",

    justifyContent: "center",

    height: 45,

    marginTop: 30,
  },

  loginText: {
    color: "#FFF",

    fontSize: 24,
  },
});
