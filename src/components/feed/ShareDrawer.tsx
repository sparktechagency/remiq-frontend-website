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

export const ShareDrawer: React.FC<ShareDrawerProps> = ({ isOpen, onClose, postId }) => {
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
      styles={{
        header: {
          background: '#07121A',
          color: '#ffffff'
        },
        body: {
          background: '#07121A',
        },
        wrapper: {
          background: '#000000',
        },
        mask: {
          color: '#ffffff'
        }
      }}
    >
      <List
        dataSource={shareOptions}
        style={{ background: '#000000' }}
        renderItem={(option: ShareOption) => (
          <List.Item 
            onClick={option.action} 
            style={{ 
              cursor: 'pointer',
              background: '#07121A',
              color: '#ffffff'
            }}
          >
            <List.Item.Meta
              avatar={option.icon}
              title={<span style={{ color: '#ffffff' }}>{option.label}</span>}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
};
