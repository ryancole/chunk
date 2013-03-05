
module.exports = function chunk (collection, size) {
    
    var result = [];
    
    // default size to two item
    size = parseInt(size) || 2;
    
    // add each chunk to the result
    for (var x = 0; x < Math.ceil(collection.length / size); x++) {
        
        var start = x * size,
            end = start + size;
        
        result.push(collection.slice(start, end));
        
    }
    
    return result;
    
};
