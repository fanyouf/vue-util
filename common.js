export default {
  distinct(arr, prop){
    let obj = {},rs = []
    arr.forEach(item => {
      if(obj[item[prop+"Name"]]){

      }else{
        obj[item[prop+"Name"]] = 1
        rs.push({[item[prop+'Id']]:item[prop+'Name']})
      }
    })
    return rs;
  },
  per(val1,val2){

    if(isNaN(val1)){
        throw new Error(val1 + "不是数值")
    }
    if(isNaN(val2)){
        throw new Error(val2 + "不是数值")
    }
    return (val1*100/ val2).toFixed(1) + "%"
  },
  // per(val){
  //   if(!isNaN(val)){
  //     return (val*100).toFixed(1) + "%"
  //   }else{
  //     throw new Error(val + "不是数值")
  //   }
  // },
  cloneObj:function cloneObj(obj){
    let str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
      return;
    } else if(window.JSON){
      str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
      for(var i in obj){
        newobj[i] = typeof obj[i] === 'object' ?
          cloneObj(obj[i]) : obj[i];
      }
    }
    return newobj;
  }
}
