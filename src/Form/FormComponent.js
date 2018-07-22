import React, {Component} from 'react';
import  PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const FormItem = Form.Item;

/* 这里展示一个表单组件怎么实现
*  首先要明确的一点是：一个UI组件（通常命名为XXXComponent）应该专注于页面呈现，而不要
*  关心业务逻辑，业务逻辑应该交由容器组件（通常命名为XXXComponent）。进一步说，UI组件
*  内部不应该具有状态（state），应该是无状态的，状态应由容器组件维护。
*  但是，这里有两个问题：
*       1.UI组件显示的东西不是定死的，必须有一些参数属性。
*       2.UI组件上可能触发用户事件，比如点击按钮，要进行响应。
*  这两个问题都不是由UI组件具体解决，但是UI组件仍然要有响应的接口，使得容器组件能够介入，
*  完成具体的业务逻辑的实现。这里的接口就有两个方面：
*       1.UI组件的参数属性，通过props设置（props是不可变的，使得满足无状态的要求）。
*       2.UI组件上触发的事件的具体响应，应调用一个回调方法，这个回调方法是由容器组件
*        提供的，那么在哪里声明呢？同样在props中声明（注意，在js中，一个方法也是一个
*        对象，也是变量）。
*  具体的实现方式，请参阅下方代码。
*/
class FormComponent extends Component {

    /* 在这里，声明要接受的属性变量（props.xxx）及其类型要求
     * 建议方式为：
     *      1.values变量为表单的所有内容，它是一个object，例如一个表单内容对应的object
     *       可以是 {
     *        name: xxx,
     *        id: xxx,
     *        }，一个对象object是可以容纳所有表单内容的。
     *      2.其余变量都是func即方法变量，声明的是回调方法，也就是在某个事件发生时要进行的
     *       响应。
     */
    static propTypes = {
        values: PropTypes.object.isRequired,
        save: PropTypes.func.isRequired,
        // getDefault: PropTypes.func.isRequired,
    };

    // 为了方便自己测试，这里可以提供默认的属性参数
    static defaultProps = {
        values: {
            name: '小猪佩奇',
            id: '10086',
        },
        save: console.log,
        getDefault: () => {},
    };

    // 这个是react组件的声明周期方法，在这个组件被'挂载'之后会被调用，这里在里面调用'获取默认值'的
    // 方法，注意这个方法不是组件自己实现的，是一个回调方法。
    componentDidMount() {
        this.props.getDefault();
    }

    // 这是组件自己实现的响应"提交"按钮事件的方法，之所以不直接调用回调方法，是为了做一些处理，例如
    // 给回调方法准备好参数，这里就是要准备要values参数，即表单的所有内容
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // 这里调用了回调方法，具体如何进行save，这不是UI组件要关心的
                this.props.save(values);
            }
        });
    };

    // 这里函数在组件被渲染的时候被调用，因此这里面实现的就是页面要展现的内容，做这部分工作时
    // 应仔细参考ant design的中文官方文档，具体细节自己进了弄清楚，这部分是自己需要发挥的地方
    render() {
        const { getFieldDecorator } = this.props.form;
        const { name, id } = this.props.values;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                        initialValue: name,
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('id', {
                        rules: [{ required: true, message: 'Please input your id!' }],
                        initialValue: id,
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        save
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(FormComponent);
