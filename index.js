fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callbackF) {
      for (const key in collection) {
        callbackF(collection[key]);
      }
      return collection;
    },

    map: function(collection,callbackF) {
      const newCollection = [];
      for (const key in collection) {
        newCollection.push(callbackF(collection[key]));
      }
      return newCollection;
    },

    reduce: function(collection, callbackF, initialValue) {
      let acc = 0;
      if (initialValue) {
        acc = initialValue;
      }
      for (const element of collection){
        acc = callbackF(acc,element,collection);
      }
      return acc;
    },

    find: function(collection,callbackF) {
      for (const key in collection){
        let currEl = collection[key];
        if (callbackF(currEl)) {
          return currEl;
        }
      }
    },

    filter: function(collection,callbackF) {
      newCollection = [];
      for (const key in collection){
        let currEl = collection[key];
        if (callbackF(currEl)) {
          newCollection.push(currEl);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let counter = 0;
      for (const key in collection){
        counter += 1;
      }
      return counter;
    },

    first: function(collection,n) {
      if (typeof n === 'undefined') {return collection[0];}

      newCollection = [];
      let endpoint = n;
      counter = 0;
      while (counter < endpoint){
        newCollection.push(collection[counter])
        counter += 1;
      }
      return newCollection;
    },

    last: function(collection,n) {
      if (typeof n === 'undefined') {return collection[collection.length-1];}

      let newCollection = [];
      let endpoint = collection.length;
      counter = collection.length - 3;
      while (counter < endpoint){
        newCollection.push(collection[counter])
        counter += 1;
      }
      return newCollection;
    },

    compact: function(collection) {
      let newCollection = [];
      for (const element of collection){
        if (element) {newCollection.push(element)}
      }
      return newCollection;
    },

    sortBy: function(collection, callbackF) {
      let newCollection = [];
      for (const element of collection){
        newCollection.push(element)
      }
      return newCollection.sort(
        function(el,nextel) {
          return callbackF(el) - callbackF(nextel);
        }
      );
    },

    flatten: function(collection, single) {
      let newCollection = [];

      if (single === true) {
        shallowIterator(collection);
      }
      else {
        deepIterator(collection);
      }

      function deepIterator (target){
        if (typeof target === 'object'){
          for (const key in target){
            deepIterator(target[key]);
          }
        }
        else {
          newCollection.push(target);
        }
      }

      function shallowIterator (target){
        for (const key in target){
          if (typeof target[key]==='object'){
            for (const key2 in target[key]) {
              newCollection.push(target[key][key2]);
            }
          }
          else {
            newCollection.push(target[key]);
          }
        }
      }

      return newCollection;
    },

    uniq: function(collection,indicator,callbackF) {
      let newCollection = [];

      if (indicator===false) {
        let iterateeCollection = [];
        for (const element of collection){
          if (!iterateeCollection.includes(callbackF(element))) {
            newCollection.push(element);
            iterateeCollection.push(callbackF(element));
          }
        }
      }
      else {
        for (const element of collection){
          if (!newCollection.includes(element)) {newCollection.push(element)}
        }
      }
      return newCollection;
    },

    keys: function(collection) {
      let newCollection = [];
      for (const key in collection){
        newCollection.push(key);
      }
      return newCollection;
    },

    values: function(collection) {
      let newCollection = [];
      for (const key in collection){
        newCollection.push(collection[key]);
      }
      return newCollection;
    },

    functions: function(collection) {
      let newCollection = [];
      for (const key in collection){
        if (typeof collection[key] === 'function') {
          newCollection.push(key);
        }
      }
      return newCollection;
    },

    giveMeMore: function() {
      let newCollection = [];
      return true;
    },




  }
})()

fi.libraryMethod()
