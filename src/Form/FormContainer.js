import {connect} from 'react-redux';
import FormComponent from "./FormComponent";
import {getDefaultAction, saveAction} from "./FormReducer";

/* 这里说明一个容器组件（一般是XXXContainer）是如何构造的。
 * 承接UI组件，容器组件是在它之上的一层封装，目的就是解决它
 * 没有完成的两个问题：
 *      1. UI组件需要参数，以决定要展示的具体内容
 *      2. UI组件的事件响应需要回调方法，容器组件要提供
 * 具体解决方案就是下面两个方法：
 */

/* 还需要说明的是，redux框架里面，所有组件的状态都在一个全局的
 * store里面，容器组件虽然管理状态，但本身并不维护一个状态。
 * store变量本身是不能被直接修改的，要变更状态，应该分发（dispatch)
 * 一个动作（Action），然后Action会发送到Reducer，Reducer再
 * 具体设置状态的转换（设置新的状态），然后状态就会更新。
 * store状态的更新如何反映到Component呢？就是通过Container的映射。
 */

/* 这个方法将state（store本身是一个可变对象，它在某一刻的一个快照
 * 就是一个状态state，这是一个不可变的对象）映射到Component的props
 * 中，当store改变，就会产生新的state，然后就会相应更新props，使
 * 状态变更反映到页面上。
 *
 */
const mapStateToProps = (state) => {
  const { values } = state.form;
  return {
      values: values,
  }
};

/* 这个方法用于将具体的Action分发的动作映射到UI组件的回调方法上，这样
 * UI组件调用了回调方法后，就会触发Action的分发（dispatch），进而
 * Reducer就可以接收到Action，然后进行相应的处理。
 */

const mapDispatchToProps = (dispatch) => {
  return {
      save: (value) => dispatch(saveAction(value)),
      getDefault: () => dispatch(getDefaultAction()),
  }
};

// 这里用connect方法将UI组件包装成一个容器组件，实际上理解一下connect这个
// 方法的命名，是将UI组件与state和reducer连接了起来。
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);