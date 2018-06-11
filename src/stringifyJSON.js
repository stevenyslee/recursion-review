// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    if( typeof obj === "number" || obj === null || typeof obj === "boolean" ){
        return obj+"";
    }else if( typeof obj === "string"){
        return '"' + obj + '"';
    }
    if( obj instanceof Array ){
        var s = "[";
        for(var i = 0; i < obj.length; i++){
            s += stringifyJSON(obj[i]);
            if(i !== obj.length-1){
                s += ",";
            }
        }
        s += "]";
        return s;
    }
    if( obj instanceof Object){
        var s = "{";
        let keys = Object.keys(obj);
        for( let i = 0; i < keys.length; i++ ){
            s += stringifyJSON(keys[i]) + ":" +stringifyJSON(obj[keys[i]]);
            if(i !== keys.length-1){
                s += ",";
            }
            
        }
        return s + "}";
        // for(var i in obj){
        //     s += stringifyJSON(i) + ":" + stringifyJSON(obj[i]);
        //     console.log(Object.keys(obj));
        //     if(i !== Object.keys(obj)[obj.length-1]){
        //         s += ", ";
        //     }
        // }
        // s += "}";
        // return s;
    }
};
