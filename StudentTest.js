//student is object of Student.json file
import student from "./Student.json" with {type:"json"}
const jsObj=JSON.parse(JSON.stringify(student)) //stringify convert json object to string that converted to javascript object
console.log(jsObj.name);
console.log(jsObj);