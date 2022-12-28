const priceInput = document.querySelector("#price");
const discountInput = document.querySelector("#discount");
const calculateButton = document.querySelector("#calculate");

let discountedPrice = 0;

document.querySelector("#result").innerHTML = `The discounted price is $${discountedPrice.toFixed(2)}`

calculateButton.addEventListener("click", function() {
    const price = parseInt(priceInput.value);
    const discount = parseInt(discountInput.value);
    const discountedPrice = price - (price * (discount / 100));
    document.querySelector("#result").innerHTML = `The discounted price is $${discountedPrice.toFixed(2)}`
    
  })

  