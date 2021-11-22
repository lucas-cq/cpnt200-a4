<template>
  <div>
    <GlobalNav />
    <Content />
    <MyFooter />
  </div>
</template>

<script>
// This connects to netlify identity widget
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
};
</script>

<style>
header {
  background-color: #ff335f;
  margin: 0px auto;
}

body {
  margin: 0px auto;
}

footer {
  background-color: #ff335f;
  padding: 20px;
  color: white;
}

h1 {
  text-align: center;
}
</style>