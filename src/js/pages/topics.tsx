
import React from 'react';
import BasePage from '../components/layout/base_page';
import TopicDashboard from '../components/topic_dashboard/dashboard';
import TopicDashboardRightToolbarItems from '../components/topic_dashboard/toolbar_items';

export default function TopicsPage() {

    return (
        <BasePage
            left_toolbar_items={<div></div>}
            right_toolbar_items={<TopicDashboardRightToolbarItems />}
            page_content={<TopicDashboard/>} 
        />
    );
}
