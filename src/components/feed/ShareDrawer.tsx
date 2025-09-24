import { Modal, List, message } from 'antd';
import { CopyOutlined, WechatOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

interface ShareOption {
  icon: ReactNode;
  label: string;
  action: () => void;
}

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  postId: string;
  postTitle: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, postId }) => {
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
    <Modal
      title={<span style={{ color: '#ffffff' }}>Share</span>}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      mask
      width={400}
      centered
      styles={{
        body: {
          background: '#07121A',
          padding: '24px'
        },
        header: {
          background: '#07121A',
          color: '#ffffff'
        },
        content: {
          background: '#07121A'
        },
        mask: {
          background: 'rgba(0, 0, 0, 0.85)'
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
    </Modal>
  );
};
