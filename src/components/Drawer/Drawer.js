import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from 'react-motion-drawer';
import { articles } from '../../constants/pages';
import { Menu, Icon } from 'antd';
import './Drawer.scss';

const pageMapper = {
    '/': '1',
    '/Policy': '2',
    '/Disclaimer': '3'
}

articles.forEach((page, i) => {
    pageMapper[page.link] = i + 4;
})

const findSelectionLink = () => {
    if (!window) return;
    return pageMapper[window.location.pathname];
};

const DrawerMenu = ({ isDrawerOpen }) => (
    <div className="drawer">
        <Drawer open={isDrawerOpen} 
                right={true}
                width={300}
                drawerStyle={{ background: '#fff' }}>
            <Menu defaultSelectedKeys={[findSelectionLink()]}
                mode="inline">
                <Menu.Item key="1">
                    <Link to="/">דף הבית</Link>
                </Menu.Item>
                <Menu.SubMenu key="sub1" title={<span><Icon type="file-text" /><span>מאמרים</span></span>}>
                    {articles.map((article, i) => (
                        <Menu.Item key={i}>
                            <Link to={article.link}>{article.title}</Link>
                        </Menu.Item>
                    ))}
                </Menu.SubMenu>
                <Menu.ItemGroup key="g1">
                    <Menu.Item key="2">
                        <Link to='/Policy'>פרטיות</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/Disclaimer'>תנאי שימוש</Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        </Drawer>
    </div>
);

export default DrawerMenu;