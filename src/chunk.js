
module.exports = function chunk (collection, size) {
    
    var result = [],
        chunky = [];
    
    // default size to two item
    size = parseInt(size) || 2;
    
    // step over the input collection
    for (var x = 0; x < collection.length; x += size) {
        
        // add this item to the chunk
        chunky.push(collection[x]);
        
        if (chunky.length === size) {
            
            // push the chunk to the result if needed
            result.push(chunky);
            
            // reset the chunk
            chunky = [];
            
        }
        
    }
    
    return result;
    
};
