fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (const index in collection){
        callback(collection[index])
      }
      return collection
    },

    map: function(collection, callback) {
      results = []
      for (const index in collection){
        results.push(callback(collection[index]))
      }
      return results
    },

    reduce: function(collection, reducer, startValue) {
      let acc = startValue
      const collectionCopy = [...collection]
      //janky way of reducing the first value correctly
      if (startValue === undefined){
        if (typeof collectionCopy[0] === "number"){
          acc = 0
        } else {
          acc = ""
        }
        acc = reducer(acc, collectionCopy.shift())
      } 
      for (const index in collectionCopy){
        const item = collectionCopy[index]
        acc = reducer(acc, item, index, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const index in collection){
        if (predicate(collection[index])){
          return collection[index]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const matches = []
      for (const index in collection) {
        if (predicate(collection[index])){
          matches.push(collection[index])
        }
      }
      return matches
    },

    size: function(collection){
      let size = 0
      for (const index in collection){
        size++
      }
      return size
    },
    //Array ONLY functions below
    first: function(array, n){
      if (n === undefined){
        return array[0]
      } else {
        const newArray = []
        for (const index in array){
          if (index < n){
            newArray.push(array[index])
          } else {
            return newArray
          }
        }
      }
    }, 

    last: function(array, n){
      if (n === undefined) {
        return array.slice(-1)[0]
      } else {
        return array.slice(-n)
      }
    },

    //go backwards to avoid index issues
    compact: function(array){
      const truthyArray = [...array]
      for (var i = truthyArray.length - 1; i >= 0; i--) {
        if (!truthyArray[i]) { 
          truthyArray.splice(i, 1)
        }
      }
      return truthyArray
    },

    sortBy: function(array, callback){
      const sortedArray = [...array]
      sortedArray.sort((a, b) => {
        return callback(a) - callback(b)
      })
      return sortedArray
    }
  }
})()

fi.libraryMethod()
