window.onload = function () {
   vm.getJson();
}

const vm = new Vue({
   el: '#app',
   data: {
      actions: {},
   },
   methods: {
      getJson() {
         fetch('./boticario.json')
            .then(response => response.json())
            .then(json => {
               this.actions = json;
               console.log(this.actions);
            })
      }
   }
});

let click = 0;
let precoTotal = 0;
let iconMarket = document.querySelector(".float > i");
let carrinho = document.querySelector(".totalMarket");

const clickONCard = (e) => {
   let clickCard = document.querySelector(".card > .value-product > span").innerText;
   click++;
   precoTotal = clickCard * click;
   iconMarket.classList.remove("fa-shopping-cart");
   iconMarket.classList.add("fa-trash");
   showValue();
}

const clearMarket = () => {
   precoTotal = 0;
   click = 0;
   console.log(precoTotal);
   iconMarket.classList.remove("fa-trash");
   iconMarket.classList.add("fa-shopping-cart");
   carrinho.innerHTML = "";
}

const showValue = () => {
   const toTalValue = 0;
   carrinho.innerHTML = "<span>" + "R$ " + precoTotal + "</span>";
}