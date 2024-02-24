const storage = {
  insertItem: function (isim, email, city, yas, rol) {
    let item = {
      name: isim,
      email,
      city,
      age: yas,
      rol,
    };

    if (localStorage.getItem("cust_" + email) === null) {
      // Create routine
      localStorage.setItem("cust_" + email, JSON.stringify(item));
    } else {
      // Update routine
      this.updateItem(email, item);
    }
  },

  updateItem: function (email, item) {
    // Update routine
    localStorage.setItem("cust_" + email, JSON.stringify(item));
  },

  deleteItem: function (email) {
    // Delete routine
    localStorage.removeItem("cust_" + email);
    //return localStorage.getItem("cust_" + email) === null
  },

  readItem: function (email) {
    // Read routine
    //return JSON.parse(localStorage.getItem("cust_" + email));

    const storage = localStorage.getItem("cust_" + email);
    if (storage) {
      const result = JSON.parse(storage);
      return result;
    } else {
      return null;
    }
  },

  readAllItems : function(){

    let custArr =[]
    for (let i=0; i<localStorage.length;i++){
        //console.log(i)
        let keyName = localStorage.key(i); // cust_ali@ali.com
        //console.log("keyName: ", keyName);
        if (keyName.startsWith('cust_')){
            custArr.push(JSON.parse(localStorage.getItem(keyName)));
        }
    }
    //console.log("custArr : ", custArr);
    return custArr;
  }
};

export default storage;
