
const generateCustomerSalesMap = (sales, customers) => {
  let result = {};
  let newCustomers = {};
  let newSales = {};
  
  // Turn customers to newCustomers
    for (let i = 0; i < customers.length; i++){
      newCustomers[customers[i]["id"]] = customers[i]["name"];
    }
  
  // Turn sales to newSales
    for (let i = 0; i < sales.length; i++){
      if (newSales.hasOwnProperty(sales[i]["customerId"])){
        let temp = 0;
        temp = newSales[sales[i].customerId];
        newSales[sales[i]["customerId"]] = sales[i]["total"]+ temp
      } else {
      newSales[sales[i]["customerId"]] = sales[i]["total"];
      }
    }
  
  
  // This creates the result obj and adds totals together:
    for (key in newCustomers){
      for (key2 in newSales){
        if (key === key2 && !result.hasOwnProperty(newCustomers[key])){
          result[newCustomers[key]] = newSales[key];
        } else if (key === key2 && result.hasOwnProperty(newCustomers[key])){
          result[newCustomers[key]] = result[newCustomers[key]] + newSales[key];
        }
      }
    }
return result;
}


module.exports = generateCustomerSalesMap;