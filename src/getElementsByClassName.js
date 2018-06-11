// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  let elements = [];
  var body = document.body;
  let childrenClass = body.classList;
    if(childrenClass !== undefined){
      let keys = Object.keys(childrenClass);
      for( let j = 0; j < keys.length; j++ ){
        if( childrenClass[keys[j]] === className ){
          elements.push(body);
        }
      }
    }
  helper(elements, body, className);
  //console.log(elements);
  return elements;
};

var helper = function(elements, newElement, className){
  var children = newElement.childNodes;
  for(var i = 0; i < children.length; i++){
    //console.log(children[i]);
    let childrenClass = children[i].classList;
    if(childrenClass !== undefined){
      let keys = Object.keys(childrenClass);
      for( let j = 0; j < keys.length; j++ ){
        if( childrenClass[keys[j]] === className ){
          elements.push(children[i]);
        }
      }
    }
    
    // if( children[i].classList.includes(className) ){
    //   elements.push(children[i]);
    // }
    helper(elements,children[i],className);
  }
}
