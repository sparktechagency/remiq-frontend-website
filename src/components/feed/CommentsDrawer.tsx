import { useState } from 'react';
import { Avatar, Button, Drawer, List, Space, message, Input } from 'antd';
import { HeartOutlined, HeartFilled, SendOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

const { Text } = Typography;
const { TextArea } = Input;

interface Comment {
    id: string;
    user: {
        username: string;
        avatar: string;
    };
    text: string;
    likes: number;
    timestamp: string;
    isLiked: boolean;
}

interface CommentsDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    postId: string;
    comments: Comment[];
}

export const CommentsDrawer = ({ isOpen, onClose, postId, comments }: CommentsDrawerProps) => {
    const [newComment, setNewComment] = useState('');
    const [commentsList, setCommentsList] = useState<Comment[]>(comments);

    const handleAddComment = () => {
        if (newComment.trim()) {
            const comment: Comment = {
                id: Date.now().toString(),
                user: {
                    username: "currentuser",
                    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                },
                text: newComment,
                likes: 0,
                timestamp: "now",
                isLiked: false,
            };
            setCommentsList([comment, ...commentsList]);
            setNewComment('');
            message.success('Comment added!');
        }
    };

    const toggleCommentLike = (commentId: string) => {
        setCommentsList(commentsList.map(comment =>
            comment.id === commentId
                ? { ...comment, isLiked: !comment.isLiked, likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1 }
                : comment
        ));
    };

    return (
        <Drawer
            title="Comments"
            placement="bottom"
            onClose={onClose}
            open={isOpen}
            height="70vh"
        >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16 }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={commentsList}
                        renderItem={(comment) => (
                            <List.Item
                                actions={[
                                    <Button
                                        type="text"
                                        icon={comment.isLiked ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
                                        onClick={() => toggleCommentLike(comment.id)}
                                    >
                                        {comment.likes}
                                    </Button>
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={comment.user.avatar} />}
                                    title={
                                        <Space>
                                            <Text strong>{comment.user.username}</Text>
                                            <Text type="secondary">{comment.timestamp}</Text>
                                        </Space>
                                    }
                                    description={comment.text}
                                />
                            </List.Item>
                        )}
                    />
                </div>

                <div style={{ borderTop: '1px solid #f0f0f0', paddingTop: 16 }}>
                    <Space.Compact style={{ width: '100%' }}>
                        <TextArea
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            rows={2}
                            onPressEnter={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                                if (e.shiftKey) return;
                                e.preventDefault();
                                handleAddComment();
                            }}
                        />
                        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            onClick={handleAddComment}
                        >
                            Post
                        </Button>
                    </Space.Compact>
                </div>
            </div>
        </Drawer>
    );
};