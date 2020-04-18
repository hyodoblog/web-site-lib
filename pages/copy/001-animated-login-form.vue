<template lang="pug">
  .body
    form.box(action="" method="post")
      h1 Login
      input(type="text" name="" placeholder="Username")
      input(type="password" name="" placeholder="Password")
      input(type="submit" name="" value="Login")
</template>

<script>
export default {
  name: "animated-login-form",
  head: {
    titleTemplate: "001-animated-login-form"
  }
};
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #34495e;
}

.box {
  width: 400px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #191919;
  text-align: center;

  h1 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
  }

  input {
    border: 0;
    background: none;
    display: block;
    outline: none;
    color: white;
    border-radius: 24px;
    margin: 20px auto;
    text-align: center;
    transition: 0.25s;
  }

  input[type="text"],
  input[type="password"] {
    padding: 14px 10px;
    width: 200px;
    border: 2px solid #3498bd;

    &:focus {
      width: 280px;
      border-color: #2ecc71;
    }
  }

  input[type="submit"] {
    border: 2px solid hsl(196, 57%, 47%);
    padding: 14px 40px;
    cursor: pointer;

    &:hover {
      background: #2ecc71;
    }
  }
}
</style>