module.exports = {
  find_related_addresses
}

function find_related_addresses(addresses){
    
    object = {};
    for (const address of addresses){
        if(object.hasOwnProperty(address.street_address)){
            object[address.street_address].push(address.account_id);
        }else{
            object[address.street_address] = [address.account_id];
        }
    }
    
    for (const address in object){
        if (object[address].length == 1){
            delete object[address];
        }
    }
    
    return object;
    
}




addresses = [  
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
]

console.log(find_related_addresses(addresses))

