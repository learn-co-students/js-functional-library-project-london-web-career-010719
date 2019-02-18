fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      for (const key in collection) {
        cb(collection[key]);
      }
      return collection;
    },

    map: function(collection, cb) {
      const newArr = [];
      for (const key in collection) {
        newArr.push(cb(collection[key]));
      }
      return newArr;
    },

    reduce: function(collection, cb, acc=0) {
      for (const el of collection) {
        acc = cb(acc, el, collection);
      }
      return acc;
    },
    
    find: function(collection, cb) {
      for (const el of collection) {
        if (cb(el) === true) {
          return el;
        }
      }
    },

    filter: function(collection, cb) {
      const newArr = [];
      for (const el of collection) {
        if (cb(el) === true) {
          newArr.push(el);
        }
      }
      return newArr;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(collection, n=0) {
      if (n === 0) {
        return collection[0];
      } else {
        return collection.slice(0, n);
      }
    },

    last: function(collection, n=0) {
      if (n === 0) {
        return collection[collection.length-1];
      } else {
        return collection.slice(-n);
      }
    },

    compact: function(collection) {
      const newArr = [];
      for (const el of collection) {
        if (Boolean(el) === true) {
          newArr.push(el);
        }
      }
      return newArr;
    },

    sortBy: function(collection, cb) {
      const newArr = [...collection];
      return newArr.sort(function(el1, el2) {
        return cb(el1)-cb(el2);
      });
    },

    flatten: function(arr, b=false) {
      const newArr = [];
      if (b === true) {
        (function shallowIterator (target) {
          for (const key in target) {
            if (typeof target[key] === 'object') {
              for (const nestedKey in target[key]) {
                newArr.push(target[key][nestedKey]);
              }
            } else {
              newArr.push(target[key]);
            }
          }
        })(arr);
      } else {
        (function deepIterator (target) {
          if (typeof target === 'object') {
            for (const key in target) {
              deepIterator(target[key]);
            }
          } else {
            newArr.push(target);
          }
        })(arr);
      }
      return newArr;
    },

    uniq: function(collection, boolean, cb) {
      const newArr = [];
      const cbArr = [];
      if (boolean === false) {
        for (const el of collection){
          if (!cbArr.includes(cb(el))) {
            cbArr.push(cb(el))
            newArr.push(el)
          }
        }
      }
      else {
        for (const el of collection){
          if (!newArr.includes(el)) {
            newArr.push(el)
          }
        }
      }
      return newArr;
    },	

    keys: function(collection) {
      const newArr = [];
      for (const key in collection) {
        newArr.push(key);
      }
      return newArr;
    },

    values: function(collection) {
      const newArr = [];
      for (const key in collection) {
        newArr.push(collection[key]);
      }
      return newArr;
    },

    functions: function(obj) {
      const newArr = [];
      for (const key in obj) {
        if (typeof(obj[key])==="function") {
          newArr.push(key)
        }
      }
      return newArr.sort();
    },

    giveMeMore: function() {
      return true;
    },


  }
})()

fi.libraryMethod()