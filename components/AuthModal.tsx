
import React, { useState } from 'react';
import { X, Lock, Smartphone, User as UserIcon, Users } from 'lucide-react';
import { STRINGS } from '../constants';
import { User } from '../types';
import { supabase } from '../App';

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
      const deviceId = localStorage.getItem('jb_device_id') || 'dev_unknown';

      if (mode === 'register') {
        // Registration Logic
        const { data, error: regError } = await supabase
          .from('profiles')
          .insert([
            { name, phone_or_email: id, role, device_id: deviceId }
          ])
          .select()
          .single();

        if (regError) throw regError;
        onSuccess({
          id: data.id,
          name: data.name,
          phoneOrEmail: data.phone_or_email,
          deviceId: data.device_id
        });
      } else {
        // Login Logic
        const { data, error: loginError } = await supabase
          .from('profiles')
          .select('*')
          .eq('phone_or_email', id)
          .single();

        if (loginError) throw new Error('ইউজার খুঁজে পাওয়া যায়নি। অনুগ্রহ করে নিবন্ধন করুন।');
        
        onSuccess({
          id: data.id,
          name: data.name,
          phoneOrEmail: data.phone_or_email,
          deviceId: data.device_id
        });
      }
    } catch (err: any) {
      setError(err.message || 'একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-800 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border dark:border-slate-700">
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
            onClick={() => setMode('login')}
            className={`flex-1 py-3 font-bold transition ${mode === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
          >
            লগইন
          </button>
          <button 
            onClick={() => setMode('register')}
            className={`flex-1 py-3 font-bold transition ${mode === 'register' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}
          >
            নিবন্ধন
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          {error && <p className="text-red-500 text-sm text-center font-bold bg-red-50 dark:bg-red-900/20 p-2 rounded-lg">{error}</p>}
          
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">পদবী নির্বাচন করুন</label>
                  <select 
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
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
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900 outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-white"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 bg-blue-600 text-white font-black text-xl rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition transform hover:-translate-y-0.5 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'প্রক্রিয়াধীন...' : (mode === 'register' ? 'নিবন্ধন করুন' : STRINGS.LOGIN_BUTTON)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
