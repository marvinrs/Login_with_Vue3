<template>
  <div class="login-container">
    <h2>Login</h2>

    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required style="width: 95%;">
      </div>

      <div class="form-group">
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required style="width: 95%;">
      </div>

      <button type="submit">Entrar</button>
    </form>

    <div class="additional-links">
      <router-link to="/register">Registrar-se</router-link>
      <span class="link-separator"></span>
      <router-link to="/forgot-password">Esqueci a senha</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Implementar lógica de login com JWT aqui
      console.log('Usuário:', this.username);
      console.log('Senha:', this.password);
      // Exemplo: Chamada a serviço de autenticação, obtenção de token JWT, etc.
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"],
button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.additional-links {
  display: flex;
  justify-content: center; /* Centraliza os links horizontalmente */
  margin-top: 10px;
}

.additional-links router-link {
  /* Estilização dos links */
  text-decoration: none; /* Remove o sublinhado padrão */
  color: #333; /* Cor do texto dos links */
}

.link-separator {
  margin: 0 10px; /* Espaço entre os links */
}
</style>
