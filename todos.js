/* global Vue */
/* global axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
