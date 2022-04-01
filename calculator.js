/* global Vue */

var App = {
  data: function () {
    return {
      messageAddition: "Addition calculator",
      messageMultiplication: "Multiplication calculator",
      number1: 0,
      number2: 0,
      number3: 0,
      number4: 0,
      number5: 0,
      number6: 0,
      sum: 0,
      product: 0,
    };
  },
  methods: {
    computeSum: function () {
      this.sum = parseInt(this.number1) + parseInt(this.number2) + parseInt(this.number3);
    },
    computeProduct: function () {
      return (this.product = parseInt(this.number4) * parseInt(this.number5) * parseInt(this.number6));
    },
  },
};

Vue.createApp(App).mount("#app");
