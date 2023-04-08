var assert = require('chai').assert;
var { find_related_addresses} = require('./realtyads');

describe('Realtyads', function() {
  it('should create an address file', function() {
    let addresses = [  
      {
        "account_id": "39",
        "street_address": "216 N May St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60607"
      },
      {
        "account_id": "40",
        "street_address": "625 W Adams St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60661"
      },
      {
        "account_id": "41",
        "street_address": "151 N Franklin St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60606"
      },
      {
        "account_id": "42",
        "street_address": "216 N May St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60607"
      },
      {
        "account_id": "43",
        "street_address": "151 N Franklin St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60606"
      },
      {
        "account_id": "44",
        "street_address": "216 N May St",
        "city": "Chicago",
        "state": "IL",
        "postal_code": "60607"
      },
    ];

    let modified_addresses = find_related_addresses(addresses);
    let expected_output = {
      '216 N May St': [ '39', '42', '44' ],
      '151 N Franklin St': [ '41', '43' ]
    };

    assert.equal(modified_addresses['216 N May St'][0], 39);
  });


});