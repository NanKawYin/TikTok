import React from 'react';
import { View, Text } from 'react-native';
import Post from '../../components/Post';

const post1 = {
    id:'p1',
    videoUri:'/Users/user/TikTok/src/assets/1.MP4',
    user:{
        id:'u1',
        username:'nankawyin',
        imageUri:'/Users/user/TikTok/src/assets/lisa.jpg',
    },
    description:'charlend tiktok',
    songName:'Nf - The secret',
    songImage:'/Users/user/TikTok/src/assets/lisa.jpg',
    likes:123,
    comments:12,
    share:44,
}

const Home = () => {
    return(
        <View>
            <Post post={post1}/>
        </View>
    );
}
export default Home;