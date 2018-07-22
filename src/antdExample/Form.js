import { Form, Input, Icon, Button, Tabs, Radio, Layout, Affix } from 'antd';
import React from "react";
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const {Header, Content, Footer, Sider} = Layout;

class DynamicFieldSet extends React.Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab Pane 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab Pane 2', key: '2' },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render() {
        return (
            <Layout>
                <Affix offsetTop={0}>
                    <Header style={{ background: '#fff', padding: 0 }}>
                    </Header>
                </Affix>
                <Content style={{ margin: '0px 16px', padding: 24, background: '#fff', minHeight: 800 }}>
                    <Tabs
                        className="contentTab"
                        type="editable-card"
                        hideAdd="true">
                        <TabPane tab={"meim"} key={"1"}>haha</TabPane>
                    </Tabs>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    出品：南京大学计算机系15级软工在线业务组
                </Footer>
            </Layout>
        );
    }
}

export const WrappedDynamicFieldSet = Form.create()(DynamicFieldSet);