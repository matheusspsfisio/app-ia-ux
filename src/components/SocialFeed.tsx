'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import { mockSocialPosts } from '@/lib/mockData';
import { formatDate } from '@/lib/utils-workout';

export default function SocialFeed() {
  const [posts, setPosts] = useState(mockSocialPosts);
  const [commentText, setCommentText] = useState<{ [key: string]: string }>({});

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleComment = (postId: string) => {
    const text = commentText[postId];
    if (!text?.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `comment-${Date.now()}`,
              userId: 'current-user',
              userName: 'Você',
              text,
              date: new Date().toISOString(),
            }
          ]
        };
      }
      return post;
    }));

    setCommentText({ ...commentText, [postId]: '' });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Feed Social</h2>
        <p className="text-gray-400">Veja os resultados da comunidade</p>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-2xl overflow-hidden"
          >
            {/* Post Header */}
            <div className="p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#00BFFF]/20">
                {post.userAvatar ? (
                  <img
                    src={post.userAvatar}
                    alt={post.userName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#00BFFF] font-bold">
                    {post.userName[0]}
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h4 className="font-bold">{post.userName}</h4>
                <p className="text-sm text-gray-400">{formatDate(post.date)}</p>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-4">
              <div className="bg-gradient-to-br from-[#00BFFF]/10 to-[#005B94]/10 border border-[#00BFFF]/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-[#00BFFF]" />
                  <span className="font-bold text-[#00BFFF]">Novo Recorde!</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{post.exerciseName}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#00BFFF]">{post.weight}kg</span>
                  <span className="text-gray-400">× {post.reps} reps</span>
                </div>
              </div>
            </div>

            {/* Post Actions */}
            <div className="px-4 pb-4 flex items-center gap-6">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center gap-2 text-gray-400 hover:text-[#00BFFF] transition-all"
              >
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-[#00BFFF] transition-all">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments.length}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-[#00BFFF] transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Comments */}
            {post.comments.length > 0 && (
              <div className="px-4 pb-4 space-y-3">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-[#0D0D0D] rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-sm">{comment.userName}</span>
                      <span className="text-xs text-gray-500">{formatDate(comment.date)}</span>
                    </div>
                    <p className="text-sm text-gray-300">{comment.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Comment Input */}
            <div className="px-4 pb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Adicionar comentário..."
                  value={commentText[post.id] || ''}
                  onChange={(e) => setCommentText({ ...commentText, [post.id]: e.target.value })}
                  onKeyPress={(e) => e.key === 'Enter' && handleComment(post.id)}
                  className="flex-1 bg-[#0D0D0D] border border-[#00BFFF]/20 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00BFFF]/50 transition-all"
                />
                <button
                  onClick={() => handleComment(post.id)}
                  className="px-4 py-2 bg-[#00BFFF] text-white rounded-lg hover:bg-[#005B94] transition-all text-sm font-semibold"
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-6 py-3 bg-[#1A1A1A] border border-[#00BFFF]/20 rounded-xl text-gray-400 hover:text-white hover:border-[#00BFFF]/50 transition-all">
          Carregar mais posts
        </button>
      </div>
    </div>
  );
}
