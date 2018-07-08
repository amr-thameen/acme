
const expect = require('chai').expect;
const generateCustomerSalesMap = require('../acme');

describe('generateCustomerSalesMap', ()=>{
    it('exists', () => {
        expect(generateCustomerSalesMap).to.be.ok;
    });
    it('converts two arrays to one object', ()=> {
        expect(generateCustomerSalesMap([],[])).to.eql({});
    });
    it('takes two arrays with one data point in common and creates a new object tying both data sets',()=>{
        expect(generateCustomerSalesMap([
            {customerId: 1, orderId: 1, total: 3},
            {customerId: 1, orderId: 1, total: 3},
            {customerId: 2, orderId: 1, total: 100},
            {customerId: 2, orderId: 1, total: 3}
            ],[
            {id: 1, name: 'moe'},
            {id: 2, name: 'larry'}
            ]
            )).to.eql({moe: 6, larry: 103})
    })
});


