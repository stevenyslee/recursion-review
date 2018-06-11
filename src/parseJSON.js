// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  for(var i = 0; i < json.length; i++ ){
    if( json[i] === '[' ){
      let array = [];
      var newStr = json.slice(1,json.length-1);
      
      var arrayElem = newStr.split(",");
      for(var i = 0; i < arrayElem.length;i++){
        array.push(parseJSON(arrayElem[i]));
      }
      return array;
    } if(json[i] === '"'){
      return json.slice(1).slice(0,s.length-1);
    } if(json[i] === 'n'){
      return null;
    } if(json[i] === 't'){
      return true;
    } if(json[i] === 'f'){
      return false;
    } if( /[0-9]/.test(json[i]) || json[i] === '-'){
      return parseFloat(json);
    } if(json[i] === '{'){
      let obj = {};
      var newStr = json.slice(1,json.length-1);
      var arrayElem = newStr.split(",");
      for(var i = 0; i < arrayElem.length;i++){
        var keyValue = arrayElem[i].split(':');
        let key = parseJSON(keyValue[0]);
        let value = parseJSON(keyValue[1]);
        obj[key] = value;
      }
      return obj;
    }
    
    
  }
};

