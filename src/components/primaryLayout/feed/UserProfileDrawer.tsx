import { Avatar, Button, Drawer, Space, Typography } from 'antd';
import { UserRoundCheck, UserStar } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

interface User {
  avatar?: string;
  displayName: string;
  username: string;
  bio: string;
  followers: string;
  following: string;
  likes: string;
  isFollowing?: boolean;
}

interface UserProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
}

const UserProfileDrawer = ({ isOpen, onClose, user }: UserProfileDrawerProps) => {
    return (
        <Drawer
            title="Profile"
            placement="right"
            onClose={onClose}
            open={isOpen}
            width={400}
        >
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
                <Avatar size={80} src={user.avatar} />
                <Title level={4} style={{ marginTop: 16, marginBottom: 0 }}>{user.displayName}</Title>
                <Text type="secondary">@{user.username}</Text>

                <Paragraph style={{ marginTop: 16 }}>{user.bio}</Paragraph>

                <Space size="large" style={{ marginTop: 16 }}>
                    <div>
                        <Text strong>{user.followers}</Text>
                        <br />
                        <Text type="secondary">Followers</Text>
                    </div>
                    <div>
                        <Text strong>{user.following}</Text>
                        <br />
                        <Text type="secondary">Following</Text>
                    </div>
                    <div>
                        <Text strong>{user.likes}</Text>
                        <br />
                        <Text type="secondary">Likes</Text>
                    </div>
                </Space>

                <Button
                    type={user.isFollowing ? "default" : "primary"}
                    icon={user.isFollowing ? <UserRoundCheck /> : <UserStar />}
                    style={{ marginTop: 24, width: '100%' }}
                >
                    {user.isFollowing ? 'Unfollow' : 'Follow'}
                </Button>
                <button>
                </button>
            </div>
        </Drawer>
    );
};

export default UserProfileDrawer;