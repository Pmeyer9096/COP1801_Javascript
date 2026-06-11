// This function checks if the service quality is valid
function checkQuality(quality) {
  quality = quality.toLowerCase();

  if (quality === "great" || quality === "ok" || quality === "poor") {
    return quality;
  } else {
    alert("Please enter great, ok, or poor.");
    return null;
  }
}

// This function checks if the amount is between $5 and $500
function checkAmount(amount) {
  if (amount >= 5 && amount <= 500) {
    return amount;
  } else {
    alert("Amount must be between $5 and $500.");
    return null;
  }
}

// This function calculates the tip based on quality
function getTip(amount, quality) {
  let rate = 0;

  if (quality === "great") {
    rate = 0.20;
  } else if (quality === "ok") {
    rate = 0.15;
  } else if (quality === "poor") {
    rate = 0.10;
  }

  return amount * rate;
}

// --------------------
// Main Program
// --------------------

// Ask for service amount
let amount = parseFloat(prompt("Enter the service amount:"));
let validAmount = checkAmount(amount);

// Only continue if amount is valid
if (validAmount !== null) {
  // Ask for service quality
  let quality = prompt("Was the service great, ok, or poor?");
  let validQuality = checkQuality(quality);

  // Only continue if quality is valid
  if (validQuality !== null) {
    let tip = getTip(validAmount, validQuality);

    alert(
      "Service amount: $" + validAmount.toFixed(2) +
      "\nService quality: " + validQuality +
      "\nRecommended tip: $" + tip.toFixed(2)
    );
  }
}