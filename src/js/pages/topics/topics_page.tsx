
import React from 'react';
import TopicDashboard from '../../components/topics/dashboard';
import TopicDashboardRightToolbarItems from '../../components/topics/right_toolbar_items';
import ToolbarNavItems from '../../components/navbar/toolbar_nav_items';
import BasePage from '../base_page';

export default function TopicsPage() {

    return (
        <BasePage
            left_toolbar_items={<ToolbarNavItems />}
            right_toolbar_items={<TopicDashboardRightToolbarItems />}
            page_content={<TopicDashboard/>} 
        />
    );
}
