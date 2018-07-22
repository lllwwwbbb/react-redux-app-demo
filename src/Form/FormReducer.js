/*
 * 这是一个reducer方法，接收两个参数：
 *  1. state，是当前store的快照，即状态
 *  2. action，是dispatch分发的动作
 * 在reducer中，根据action.type判断要进行的操作，结合当前
 * 的state进行计算，然后return一个新的state，作为store的
 * 下一个值，也就是改变了store，修改了状态。
 */
export const FormReducer = (state = {}, action) => {
  switch (action.type) {
      case 'getDefault':
          return {
              values: {
                  name: 'default小猪佩奇',
                  id: 'default10086',
              }
          };
      default:
          return state;
  }
};

// 以下两个方法都是actionCreator，它们返回值都是一个
// Action，Action是一个object，必须有type属性，其余
// 属性可以自己定义，一般可以设置为payload。这个没有硬性
// 规定

export const saveAction = (value) => {
    console.log('save', value);
    return {
        type: 'save',
    };
};

export const getDefaultAction = () => {
    return {
        type: 'getDefault',
    }
};