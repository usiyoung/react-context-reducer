import { Tabs as AntdTabs } from 'antd';
import { TabsProps } from 'antd/es/tabs';

export const Tabs = ({ items }: TabsProps) => {
    return <AntdTabs className="w-full" items={items} />;
};
