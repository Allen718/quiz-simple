// * 代码开发过程中有一个常见的技术需求，对简单的数据对象进行克隆
// * 那么你实际是怎么做的？

// * ---------------- 解决下文中缺少 clone 函数的问题……
// 在这里写代码……
//1.我常用的办法是
function clone(data){
return JSON.parse(JSON.stringfy(data))
}
// 2. 也可以使用递归的办法
function clone(data){
let newobj=data.constructor===Array?[]:{}
if(typeof data!=='object'){return}
  for( let i in data){
  newobj[i]=typeof data[i]==='object'?clone(data[i]):data[i]
  }
return newobj
}
// * ---------------- 实现的效果：

{
  const data = {
    person: [
      {
        id: 114514,
        age: 24,
        type: 'student',
      },
    ],
  };

  const mirrorData = clone(data);

  mirrorData.person[0].age = 19;

  console.log(mirrorData.person[0].age === 19);
  console.log(data.person[0].age === 24);
}
