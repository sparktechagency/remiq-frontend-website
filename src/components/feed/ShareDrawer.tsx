import { Drawer, List, message } from 'antd';
import { CopyOutlined, WechatOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

interface ShareOption {
  icon: ReactNode;
  label: string;
  action: () => void;
}

interface ShareDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
  postTitle: string;
}

export const ShareDrawer: React.FC<ShareDrawerProps> = ({ isOpen, onClose, postId, postTitle }) => {
  const shareOptions: ShareOption[] = [
    {
      icon: <CopyOutlined />,
      label: 'Copy Link',
      action: () => {
        navigator.clipboard.writeText(`https://app.com/post/${postId}`);
        message.success('Link copied to clipboard!');
      }
    },
    {
      icon: <WechatOutlined />,
      label: 'WeChat',
      action: () => message.info('Share to WeChat')
    },
    {
      icon: <TwitterOutlined />,
      label: 'Twitter',
      action: () => message.info('Share to Twitter')
    },
    {
      icon: <FacebookOutlined />,
      label: 'Facebook',
      action: () => message.info('Share to Facebook')
    },
  ];

  return (
    <Drawer
      title="Share"
      placement="bottom"
      onClose={onClose}
      open={isOpen}
      height="40vh"
    >
      <List
        dataSource={shareOptions}
        renderItem={(option: ShareOption) => (
          <List.Item onClick={option.action} style={{ cursor: 'pointer' }}>
            <List.Item.Meta
              avatar={option.icon}
              title={option.label}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
};
