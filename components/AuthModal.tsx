
import React, { useState } from 'react';
import { X, Lock, Smartphone, User as UserIcon, Users } from 'lucide-react';
import { STRINGS } from '../constants';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: User) => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [role, setRole] = useState('voter');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((mode === 'register' && !name) || !id) return;
    
    setLoading(true);
    setError('');

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));

      const deviceId = localStorage.getItem('jb_device_id') || `dev_${Math.random().toString(36).substr(2, 9)}`;
      if (!localStorage.getItem('jb_device_id')) {
        localStorage.setItem('jb_device_id', deviceId);
      }

      // LocalStorage based Mock Auth Logic
      const usersJson = localStorage.getItem('jb_users') || '[]';
      const users: any[] = JSON.parse(usersJson);

      if (mode === 'register') {
        // Check if user already exists
        const existingUser = users.find(u => u.phoneOrEmail === id);
        if (existingUser) {
          throw new Error('এই নম্বর বা ইমেইল দিয়ে ইতিপূর্বেই নিবন্ধন করা হয়েছে।');
        }

        const newUser: User = {
          id: `user_${Date.now()}`,
          name,
          phoneOrEmail: id,
          deviceId: deviceId
        };

        users.push({ ...newUser, role });
        localStorage.setItem('jb_users', JSON.stringify(users));
        localStorage.setItem('jb_current_user', JSON.stringify(newUser));
        
        onSuccess(newUser);
      } else {
        // Login Logic
        const user = users.find(u => u.phoneOrEmail === id);

        if (!user) {
          throw new Error('ইউজার খুঁজে পাওয়া যায়নি। অনুগ্রহ করে প্রথমে নিবন্ধন করুন।');
        }
        
        const loggedInUser: User = {
          id: user.id,
          name: user.name,
          phoneOrEmail: user.phoneOrEmail,
          deviceId: user.deviceId
        };

        localStorage.setItem('jb_current_user', JSON.stringify(loggedInUser));
        onSuccess(loggedInUser);
      }
    } catch (err: any) {
      setError(err.message || 'একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border dark:border-slate-700 animate-in fade-in zoom-in duration-300">
        <div className="p-8 text-center bg-blue-600 text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition">
            <X className="w-6 h-6" />
          </button>
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            {mode === 'register' ? <Users className="w-8 h-8" /> : <Lock className="w-8 h-8" />}
          </div>
          <h2 className="text-2xl font-bold">{mode === 'register' ? 'দলে যোগ দিন' : STRINGS.LOGIN_TITLE}</h2>
          <p className="text-blue-100 mt-1">{mode === 'register' ? 'ভোটবিক্রি পরিবারের সদস্য হোন' : STRINGS.LOGIN_SUBTITLE}</p>
        </div>

        <div className="flex border-b dark:border-slate-700">
          <button 
            onClick={() => { setMode('login'); setError(''); }}
            className={`flex-1 py-3 font-bold transition ${mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-400'}`}
          >
            লগইন
          </button>
          <button 
            onClick={() => { setMode('register'); setError(''); }}
            className={`flex-1 py-3 font-bold transition ${mode === 'register' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50 dark:bg-blue-900/10' : 'text-slate-400'}`}
          >
            নিবন্ধন
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {error && (
            <div className="text-red-500 text-sm text-center font-bold bg-red-50 dark:bg-red-900/20 p-3 rounded-xl border border-red-100 dark:border-red-900/30">
              {error}
            </div>
          )}
          
          <div className="space-y-4">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{STRINGS.NAME_LABEL}</label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="আপনার পুরো নাম"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">পদবী নির্বাচন করুন</label>
                  <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white transition-all cursor-pointer"
                  >
                    <option value="voter">ভোটার</option>
                    <option value="worker">কর্মি</option>
                    <option value="leader">নেতাকর্মী</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">{STRINGS.ID_LABEL}</label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  required
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="০১৭XXXXXXXX অথবা ইমেইল"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white transition-all"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-blue-600 text-white font-black text-xl rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all transform active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                প্রক্রিয়াধীন...
              </div>
            ) : (mode === 'register' ? 'নিবন্ধন সম্পন্ন করুন' : STRINGS.LOGIN_BUTTON)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
