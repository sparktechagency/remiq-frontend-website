import React, { useState, useRef, useEffect } from 'react';
import {
    Button,
    Avatar,
    Typography,
    Space,
    Card,
    Badge,
    message,
    Tooltip
} from 'antd';
import {
    HeartOutlined,
    HeartFilled,
    MessageOutlined,
    BookFilled,
    ShareAltOutlined,
    ThunderboltOutlined,
    PlayCircleOutlined,
    SoundOutlined,
    SoundFilled,
} from '@ant-design/icons';
import { BookmarkCheck } from 'lucide-react';
import UserProfileDrawer from './UserProfileDrawer';
import { CommentsDrawer } from './CommentsDrawer';
import { ShareDrawer } from './ShareDrawer';
import Image from 'next/image';

const { Text, Title, Paragraph } = Typography;


const sampleComments = [
    {
        id: "1",
        user: { username: "musiclover", avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c83c?w=100&h=100&fit=crop&crop=face" },
        text: "This beat is absolutely fire! 🔥",
        likes: 12,
        timestamp: "Just now",
        isLiked: false,
        viewers: 245,
        isLive: true
    },
    {
        id: "2",
        user: { username: "producer_pro", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
        text: "The atmospheric vibes are incredible. What DAW did you use?",
        likes: 8,
        timestamp: "Live",
        isLiked: true,
        viewers: 245,
        isLive: true
    },
    {
        id: "3",
        user: { username: "beathead", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face" },
        text: "Need this on Spotify ASAP! 🎵",
        likes: 5,
        timestamp: "Live",
        isLiked: false,
        viewers: 245,
        isLive: true
    },
    {
        id: "4",
        user: { username: "dj_fresh", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face" },
        text: "Watching live! Keep the beats coming! 🎧",
        likes: 3,
        timestamp: "Live",
        isLiked: false,
        viewers: 245,
        isLive: true
    }
];



interface VideoPostProps {
    id: string;
    user: {
        username: string;
        avatar: string;  // Made required
        displayName?: string;
        bio?: string;
        followers?: string;
        following?: string;
        likes?: string;
        isFollowing: boolean;  // Made required
    };
    content: {
        title: string;
        description: string;
        video?: string;  
        image?: string;
        hashtags: string[];
        videoUrl?:string;
    };
    stats: {
        likes: string;  
        comments: string;
        bookmarks: string;
        shares: string;
    };
    isActive: boolean;  
}

export default function VideoPost({ id, user, content, stats, isActive = false }: VideoPostProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [isFollowing, setIsFollowing] = useState(user.isFollowing);
    const [showComments, setShowComments] = useState(false);
    const [showShare, setShowShare] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isActive && isPlaying) {
                (videoRef.current as HTMLVideoElement).play();
            } else {
                (videoRef.current as HTMLVideoElement).pause();
            }
        }
    }, [isActive, isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (videoRef.current) {
            (videoRef.current as HTMLVideoElement).muted = !isMuted;
        }
    };

    const toggleLike = () => {
        setIsLiked(!isLiked);
        message.success(isLiked ? 'Removed from likes' : 'Added to likes');
    };

    const toggleBookmark = () => {
        setIsBookmarked(!isBookmarked);
        message.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
    };

    const toggleFollow = () => {
        setIsFollowing(!isFollowing);
        message.success(isFollowing ? 'Unfollowed user' : 'Following user');
    };

    const userProfileData = {
        username: user.username,
        avatar: user.avatar,
        displayName: user.displayName || user.username,
        bio: user.bio || "Music producer and beat maker. Creating atmospheric sounds that tell stories.",
        followers: user.followers || "12.5K",
        following: user.following || "234",
        likes: user.likes || "45.2K",
        isFollowing: isFollowing,
    };

    return (
        <>
            <Card
                styles={{ body: { padding: 0 } }}
                style={{
                    width: 350,
                    margin: '0 auto',
                    borderRadius: 12,
                    overflow: 'hidden',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                }}
            >
                {/* Main Video/Image Container */}
                <div style={{
                    position: 'relative',
                    aspectRatio: '9/16',
                    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))'
                }}>
                    {content.videoUrl ? (
                        <video
                            ref={videoRef}
                            src={content.videoUrl}
                            className="w-full h-full object-cover cursor-pointer"
                            loop
                            muted={isMuted}
                            playsInline
                            onClick={togglePlay}
                        />
                    ) : (
                        <Image
                            src={content.image || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=350&h=600&fit=crop"}
                            alt={content.title}
                            width={350}
                            height={600}
                            className="w-full h-full object-contain cursor-pointer"
                            onClick={togglePlay}
                        />
                    )}

                    {/* Play/Pause Overlay */}
                    {!isPlaying && (
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}>
                            <Button
                                type="text"
                                size="large"
                                icon={<PlayCircleOutlined style={{ fontSize: 48, color: 'rgba(255,255,255,0.9)' }} />}
                                onClick={togglePlay}
                                style={{
                                    background: 'rgba(0,0,0,0.4)',
                                    backdropFilter: 'blur(10px)',
                                    border: 'none'
                                }}
                            />
                        </div>
                    )}

                    {/* Volume Control */}
                    <Button
                        type="text"
                        size="small"
                        icon={isMuted ? <SoundFilled /> : <SoundOutlined />}
                        onClick={toggleMute}
                        style={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            background: 'rgba(0,0,0,0.4)',
                            backdropFilter: 'blur(10px)',
                            color: 'white',
                            border: 'none'
                        }}
                    />

                    {/* Right Side Actions */}
                    <div style={{
                        position: 'absolute',
                        right: 12,
                        bottom: 80,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16
                    }}>
                        <Tooltip title="Like" placement="left">
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    type="text"
                                    shape="circle"
                                    size="large"
                                    icon={isLiked ? <HeartFilled style={{ color: '#ff4d4f' }} /> : <HeartOutlined />}
                                    onClick={toggleLike}
                                    style={{
                                        background: isLiked ? 'rgba(255,77,79,0.2)' : 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(10px)',
                                        color: isLiked ? '#ff4d4f' : 'white',
                                        border: 'none'
                                    }}
                                />
                                <div style={{ color: 'white', fontSize: 12, marginTop: 4 }}>{stats.likes}</div>
                            </div>
                        </Tooltip>

                        <Tooltip title="Comments" placement="left">
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    type="text"
                                    shape="circle"
                                    size="large"
                                    icon={<MessageOutlined />}
                                    onClick={() => setShowComments(true)}
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(10px)',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                />
                                <div style={{ color: 'white', fontSize: 12, marginTop: 4 }}>{stats.comments}</div>
                            </div>
                        </Tooltip>

                        <Tooltip title="Bookmark" placement="left">
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    type="text"
                                    shape="circle"
                                    size="large"
                                    icon={isBookmarked ? <BookFilled style={{ color: '#faad14' }} /> : <BookmarkCheck />}
                                    onClick={toggleBookmark}
                                    style={{
                                        background: isBookmarked ? 'rgba(250,173,20,0.2)' : 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(10px)',
                                        color: isBookmarked ? '#faad14' : 'white',
                                        border: 'none'
                                    }}
                                />
                                <div style={{ color: 'white', fontSize: 12, marginTop: 4 }}>{stats.bookmarks}</div>
                            </div>
                        </Tooltip>

                        <Tooltip title="Share" placement="left">
                            <div style={{ textAlign: 'center' }}>
                                <Button
                                    type="text"
                                    shape="circle"
                                    size="large"
                                    icon={<ShareAltOutlined />}
                                    onClick={() => setShowShare(true)}
                                    style={{
                                        background: 'rgba(0,0,0,0.4)',
                                        backdropFilter: 'blur(10px)',
                                        color: 'white',
                                        border: 'none'
                                    }}
                                />
                                <div style={{ color: 'white', fontSize: 12, marginTop: 4 }}>{stats.shares}</div>
                            </div>
                        </Tooltip>

                        <Badge dot>
                            <Button
                                type="primary"
                                shape="circle"
                                size="large"
                                icon={<ThunderboltOutlined />}
                                style={{
                                    background: 'linear-gradient(45deg, #722ed1, #eb2f96)',
                                    border: 'none',
                                    animation: 'pulse 2s infinite'
                                }}
                            />
                        </Badge>
                    </div>
                </div>

                {/* Bottom Info */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 16,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                        <Avatar
                            size="small"
                            src={user.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"}
                            style={{ cursor: 'pointer', border: '2px solid rgba(114,46,209,0.5)' }}
                            onClick={() => setShowProfile(true)}
                        />
                        <Text
                            strong
                            style={{ color: 'white', cursor: 'pointer' }}
                            onClick={() => setShowProfile(true)}
                        >
                            {user.username}
                        </Text>
                        <Button
                            type={isFollowing ? "default" : "primary"}
                            size="small"
                            onClick={toggleFollow}
                            style={{
                                fontSize: 11,
                                height: 24,
                                background: isFollowing ? 'rgba(255,255,255,0.2)' : undefined,
                                color: isFollowing ? 'white' : undefined,
                                border: isFollowing ? '1px solid rgba(255,255,255,0.3)' : undefined
                            }}
                        >
                            {isFollowing ? 'Following' : 'Follow'}
                        </Button>
                    </div>

                    <Title level={5} style={{ color: 'white', margin: '0 0 4px 0' }}>
                        {content.title}
                    </Title>

                    <Paragraph
                        style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, margin: '0 0 8px 0' }}
                        ellipsis={{ rows: 2 }}
                    >
                        {content.description}
                    </Paragraph>

                    <Space wrap size={[4, 4]}>
                        {content.hashtags.map((tag, index) => (
                            <Text
                                key={index}
                                style={{ color: '#722ed1', fontSize: 13, cursor: 'pointer' }}
                            >
                                #{tag}
                            </Text>
                        ))}
                    </Space>
                </div>
            </Card>

            {/* Social Drawers */}
            <CommentsDrawer
                isOpen={showComments}
                onClose={() => setShowComments(false)}
                postId={id}
                comments={sampleComments}
            />

            <ShareDrawer
                isOpen={showShare}
                onClose={() => setShowShare(false)}
                postId={id}
                postTitle={content.title}
            />

            <UserProfileDrawer
                isOpen={showProfile}
                onClose={() => setShowProfile(false)}
                user={userProfileData}
            />

            <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
        </>
    );
}