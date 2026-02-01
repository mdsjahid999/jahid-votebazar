
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { Eye, Clock, CheckCircle } from 'lucide-react';
import { Poll } from '../types';
import { STRINGS } from '../constants';

interface PollCardProps {
  poll: Poll;
  onVote: (pollId: string, optionId: string) => void;
  hasVoted: boolean;
}

const PollCard: React.FC<PollCardProps> = ({ poll, onVote, hasVoted }) => {
  const [showResults, setShowResults] = useState(hasVoted);
  
  const totalVotes = poll.options.reduce((sum, opt) => sum + opt.votes, 0);

  const formatData = poll.options.map(opt => ({
    name: opt.text,
    votes: opt.votes,
    percentage: totalVotes > 0 ? ((opt.votes / totalVotes) * 100).toFixed(1) : 0
  }));

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-slate-100 flex flex-col">
      <div className="p-5 flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-blue-50 text-blue-600 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            ভোট পোল
          </span>
          <span className="text-slate-400 text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {new Date(poll.createdAt).toLocaleDateString('bn-BD')}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">
          {poll.title}
        </h3>
        
        <p className="text-slate-500 text-sm mb-6">
          {poll.description}
        </p>

        {showResults || hasVoted ? (
          <div className="space-y-4">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={formatData} layout="vertical" margin={{ left: 0, right: 30 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    cursor={{ fill: 'transparent' }}
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white p-2 shadow-lg border rounded text-xs">
                            <p className="font-bold">{payload[0].payload.name}</p>
                            <p>{payload[0].value} {STRINGS.TOTAL_VOTES}</p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar dataKey="votes" radius={[0, 4, 4, 0]}>
                    {formatData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={['#2563eb', '#3b82f6', '#60a5fa'][index % 3]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {formatData.map((opt, i) => (
                <div key={i} className="flex justify-between items-center text-sm p-2 bg-slate-50 rounded">
                  <span className="font-medium text-slate-700">{opt.name}</span>
                  <span className="text-blue-600 font-bold">{opt.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {poll.options.map((option) => (
              <button
                key={option.id}
                onClick={() => onVote(poll.id, option.id)}
                className="w-full group relative flex items-center p-3 border-2 border-slate-100 rounded-xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 text-left"
              >
                {option.imageUrl && (
                  <img 
                    src={option.imageUrl} 
                    alt={option.text} 
                    className="w-12 h-12 rounded-lg object-cover mr-3 group-hover:scale-105 transition"
                  />
                )}
                <span className="flex-grow font-semibold text-slate-700 group-hover:text-blue-700">
                  {option.text}
                </span>
                <div className="w-6 h-6 rounded-full border-2 border-slate-200 group-hover:border-blue-500 flex items-center justify-center transition">
                  <div className="w-3 h-3 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <div className="text-xs text-slate-500 flex items-center gap-1">
          <Eye className="w-4 h-4" />
          {totalVotes} {STRINGS.TOTAL_VOTES}
        </div>
        
        <div className="flex gap-2">
          {!hasVoted && (
            <button 
              onClick={() => setShowResults(!showResults)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              {showResults ? "ভোট দিতে ফিরে যান" : STRINGS.RESULTS_TITLE}
            </button>
          )}
          {hasVoted && (
            <span className="text-xs font-bold text-green-600 flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              ভোট সম্পন্ন
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PollCard;
