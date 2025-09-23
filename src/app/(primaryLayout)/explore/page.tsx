"use client"
import React, { useState } from 'react';
import { 
  Card, 
  Typography, 
  Button, 
  Space, 
  Input, 
  Select, 
  Row, 
  Col, 
  Tag,
  Avatar,
  Tooltip,
  Modal,
  Slider,
  Rate
} from 'antd';
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  HeartOutlined,
  HeartFilled,
  DownloadOutlined,
  SearchOutlined,
  FilterOutlined,
  SoundOutlined,
  UserOutlined,
  FireOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

// Sample beat data
const sampleBeats = [
  {
    id: 1,
    title: "Urban Nights",
    artist: "BeatMaker Pro",
    genre: "Hip Hop",
    bpm: 140,
    duration: "3:24",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "2.3K",
    likes: "845",
    tags: ["Dark", "Urban", "Trap"],
    isFree: true,
    isHot: true
  },
  {
    id: 2,
    title: "Desert Vibes",
    artist: "SoundWave",
    genre: "Trap",
    bpm: 128,
    duration: "2:56",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "1.8K",
    likes: "623",
    tags: ["Chill", "Desert", "Atmospheric"],
    isFree: true,
    isHot: false
  },
  {
    id: 3,
    title: "Demon Mode",
    artist: "DarkBeats",
    genre: "Drill",
    bpm: 150,
    duration: "3:45",
    image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "5.1K",
    likes: "2.1K",
    tags: ["Dark", "Aggressive", "Heavy"],
    isFree: true,
    isHot: true
  },
  {
    id: 4,
    title: "Broken Dreams",
    artist: "MelodyMaker",
    genre: "R&B",
    bpm: 85,
    duration: "4:12",
    image: "https://images.unsplash.com/photo-1571974599782-87624638275d?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "934",
    likes: "456",
    tags: ["Emotional", "Slow", "Soulful"],
    isFree: true,
    isHot: false
  },
  {
    id: 5,
    title: "Broken Bones",
    artist: "HardHitter",
    genre: "Drill",
    bpm: 145,
    duration: "3:18",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "3.2K",
    likes: "1.5K",
    tags: ["Hard", "Drill", "Street"],
    isFree: true,
    isHot: true
  },
  {
    id: 6,
    title: "Neon Nights",
    artist: "SynthWave",
    genre: "Electronic",
    bpm: 120,
    duration: "3:56",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "1.2K",
    likes: "678",
    tags: ["Synth", "Retro", "Electronic"],
    isFree: true,
    isHot: false
  },
  {
    id: 7,
    title: "Street Soul",
    artist: "UrbanSound",
    genre: "Hip Hop",
    bpm: 95,
    duration: "4:23",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "2.8K",
    likes: "1.3K",
    tags: ["Soulful", "Jazz", "Street"],
    isFree: true,
    isHot: false
  },
  {
    id: 8,
    title: "Betty Boop",
    artist: "RetroBeats",
    genre: "Jazz Hip Hop",
    bpm: 110,
    duration: "3:34",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "1.6K",
    likes: "892",
    tags: ["Vintage", "Jazz", "Swing"],
    isFree: true,
    isHot: false
  },
  {
    id: 9,
    title: "Ocean Deep",
    artist: "AquaBeats",
    genre: "Ambient",
    bpm: 75,
    duration: "5:12",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&h=300&fit=crop",
    isPlaying: false,
    isLiked: false,
    downloads: "987",
    likes: "543",
    tags: ["Ambient", "Peaceful", "Water"],
    isFree: true,
    isHot: false
  }
];

const BeatCard = ({ beat, onPlay, onLike, onDownload }) => {
  return (
    <Card
      hoverable
      style={{ 
        background: 'linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        overflow: 'hidden'
      }}
      bodyStyle={{ padding: 0 }}
    >
      <div style={{ position: 'relative' }}>
        {/* Beat Cover Image */}
        <div style={{ 
          position: 'relative',
          width: '100%',
          height: 200,
          backgroundImage: `url(${beat.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))'
          }} />
          
          {/* Hot Badge */}
          {beat.isHot && (
            <div style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'linear-gradient(45deg, #ff4757, #ff6b7a)',
              borderRadius: 12,
              padding: '4px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}>
              <FireOutlined style={{ color: 'white', fontSize: 12 }} />
              <Text style={{ color: 'white', fontSize: 11, fontWeight: 600 }}>HOT</Text>
            </div>
          )}
          
          {/* Play Button */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <Button
              type="text"
              size="large"
              icon={beat.isPlaying ? 
                <PauseCircleOutlined style={{ fontSize: 48, color: 'white' }} /> : 
                <PlayCircleOutlined style={{ fontSize: 48, color: 'white' }} />
              }
              onClick={() => onPlay(beat.id)}
              style={{
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </div>
          
          {/* Genre Tag */}
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: 8
          }}>
            <Tag color="purple" style={{ margin: 0, fontSize: 11 }}>
              {beat.genre}
            </Tag>
          </div>
        </div>
        
        {/* Beat Info */}
        <div style={{ padding: 16 }}>
          <div style={{ marginBottom: 12 }}>
            <Title level={5} style={{ color: 'white', margin: 0, fontSize: 16 }}>
              {beat.title}
            </Title>
            <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
              by {beat.artist}
            </Text>
          </div>
          
          {/* Beat Details */}
          <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>
              {beat.bpm} BPM
            </Text>
            <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>
              {beat.duration}
            </Text>
          </div>
          
          {/* Tags */}
          <div style={{ marginBottom: 16 }}>
            <Space wrap size={[4, 4]}>
              {beat.tags.map(tag => (
                <Tag key={tag} size="small" style={{ 
                  background: 'rgba(114,46,209,0.2)', 
                  border: '1px solid rgba(114,46,209,0.3)',
                  color: '#b37feb',
                  fontSize: 10
                }}>
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>
          
          {/* Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Space size={16}>
              <Tooltip title="Like">
                <Button
                  type="text"
                  size="small"
                  icon={beat.isLiked ? 
                    <HeartFilled style={{ color: '#ff4757' }} /> : 
                    <HeartOutlined style={{ color: 'rgba(255,255,255,0.7)' }} />
                  }
                  onClick={() => onLike(beat.id)}
                >
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                    {beat.likes}
                  </Text>
                </Button>
              </Tooltip>
              
              <Tooltip title="Downloads">
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <DownloadOutlined style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }} />
                  <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12 }}>
                    {beat.downloads}
                  </Text>
                </div>
              </Tooltip>
            </Space>
            
            <Button
              type="primary"
              size="small"
              icon={<DownloadOutlined />}
              onClick={() => onDownload(beat.id)}
              style={{
                background: 'linear-gradient(45deg, #722ed1, #eb2f96)',
                border: 'none',
                fontSize: 11
              }}
            >
              Free Download
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default function HomePage() {
  const [beats, setBeats] = useState(sampleBeats);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [bpmRange, setBpmRange] = useState([60, 180]);
  const [showFilters, setShowFilters] = useState(false);
  
  const genres = ['all', 'Hip Hop', 'Trap', 'Drill', 'R&B', 'Electronic', 'Jazz Hip Hop', 'Ambient'];
  
  const handlePlay = (beatId) => {
    setBeats(beats.map(beat => ({
      ...beat,
      isPlaying: beat.id === beatId ? !beat.isPlaying : false
    })));
  };
  
  const handleLike = (beatId) => {
    setBeats(beats.map(beat => 
      beat.id === beatId ? { ...beat, isLiked: !beat.isLiked } : beat
    ));
  };
  
  const handleDownload = (beatId) => {
    const beat = beats.find(b => b.id === beatId);
    Modal.success({
      title: 'Download Started',
      content: `"${beat.title}" by ${beat.artist} is now downloading...`,
    });
  };
  
  const filteredBeats = beats.filter(beat => {
    const matchesSearch = beat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         beat.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'all' || beat.genre === selectedGenre;
    const matchesBpm = beat.bpm >= bpmRange[0] && beat.bpm <= bpmRange[1];
    
    return matchesSearch && matchesGenre && matchesBpm;
  });

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0c0c1e 0%, #1a1a2e 50%, #16213e 100%)',
      padding: '24px'
    }}
      className=" overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent"
    >
    
      
      {/* Beats Grid */}
      <Row gutter={[24, 24]}>
        {filteredBeats.map(beat => (
          <Col key={beat.id} xs={24} sm={12} md={8} lg={6}>
            <BeatCard
              beat={beat}
              onPlay={handlePlay}
              onLike={handleLike}
              onDownload={handleDownload}
            />
          </Col>
        ))}
      </Row>
      
      {filteredBeats.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '64px 0',
          color: 'rgba(255,255,255,0.5)' 
        }}>
          <SoundOutlined style={{ fontSize: 48, marginBottom: 16 }} />
          <Title level={3} style={{ color: 'rgba(255,255,255,0.5)' }}>
            No beats found
          </Title>
          <Text style={{ color: 'rgba(255,255,255,0.4)' }}>
            Try adjusting your search or filter criteria
          </Text>
        </div>
      )}
      
      {/* Filter Modal */}
      <Modal
        title="Advanced Filters"
        open={showFilters}
        onCancel={() => setShowFilters(false)}
        onOk={() => setShowFilters(false)}
        width={400}
      >
        <div style={{ marginBottom: 24 }}>
          <Text strong style={{ display: 'block', marginBottom: 12 }}>BPM Range</Text>
          <Slider
            range
            min={60}
            max={200}
            value={bpmRange}
            onChange={setBpmRange}
            marks={{
              60: '60',
              100: '100',
              140: '140',
              180: '180',
              200: '200'
            }}
          />
        </div>
      </Modal>
    </div>
  );
}