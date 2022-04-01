/* global Vue */

var App = {
  data: function () {
    return {
      newMessage: "hello",
      message: "You loaded this page on " + new Date().toLocaleString(),
      name: "Eliot",
      count: 0,
      number1: 0,
      number2: 0,
      number3: 0,
      sum: 0,
      showInfo: true,
      makeDark: true,
      numbers: [1, 2, 3, 4, 5],
      newNumber: " ",
    };
  },
  methods: {
    changeMessage: function () {
      this.newMessage = "goodbye";
    },
    changeHeader: function () {
      this.message = "test";
    },
    computeSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    addNumber: function () {
      this.numbers.push(this.newNumber);
      this.newNumber = " ";
    },
  },
};

Vue.createApp(App).mount("#app");
