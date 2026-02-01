
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { STRINGS, PAGE_CONTENT, DARK_MESSAGES, LIGHT_MESSAGES } from './constants';
import AuthModal from './components/AuthModal';

const { 
  Vote, 
  Users, 
  LogIn, 
  Megaphone, 
  AlertTriangle,
  Home,
  Menu,
  X,
  Moon,
  Sun,
  Facebook,
  Twitter,
  Youtube,
  Send,
  ExternalLink,
  FileText,
  Info,
  Key,
  ShieldCheck,
  Star,
  ChevronRight,
  TrendingUp,
  Cpu,
  HandCoins,
  Utensils,
  Heart,
  ShoppingBag,
  Package,
  BadgeCheck,
  MapPin,
  UserCheck,
  Eye,
  MessageSquare,
  Share2,
  Flame,
  Ghost,
  Camera,
  Search,
  Zap,
  Building2,
  CreditCard,
  Landmark,
  PiggyBank,
  HardHat,
  Plane,
  Gift,
  Award,
  Smile,
  Frown,
  Upload,
  User,
  CheckCircle,
  Briefcase,
  Gavel,
  Skull,
  Hammer,
  ShieldAlert,
  Scale,
  HandMetal,
  Dna,
  Coffee,
  Beer,
  CloudRain
} = LucideIcons;

// Supabase Configuration
const supabaseUrl = 'https://isvwqysavgjefnluhhkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdndxeXNhdmdqZWZubHWhhkkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTc2OTkzNTk5NSwiZXhwIjoyMDg1NTExOTk1fQ.ogU9dNsh76AmrNhWO0YaQEtpED_t_Tvlyc7r9Oa-g38';
export const supabase = createClient(supabaseUrl, supabaseKey);

// Scroll to Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Breaking News Component
const BreakingNews = () => (
  <div className="bg-red-600 text-white py-2.5 overflow-hidden sticky top-0 z-[100] border-b border-red-700 shadow-lg group">
    <div className="flex animate-marquee group-hover:pause-marquee">
      <div className="flex shrink-0 gap-16 px-4">
        {STRINGS.BREAKING_NEWS.map((news, i) => (
          <span key={i} className="font-bold flex items-center whitespace-nowrap">
            {news}
          </span>
        ))}
      </div>
      <div className="flex shrink-0 gap-16 px-4">
        {STRINGS.BREAKING_NEWS.map((news, i) => (
          <span key={`dup-${i}`} className="font-bold flex items-center whitespace-nowrap">
            {news}
          </span>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 40s linear infinite;
        display: flex;
        width: max-content;
      }
      .group:hover .animate-marquee {
        animation-play-state: paused !important;
      }
    `}</style>
  </div>
);

// Satirical Worker Registration Component
const WorkerRegistration = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("নিবন্ধন সফল! জাহিদুল ইসলাম আপনাকে 'পাবলিকের পকেটমার' হিসেবে কবুল করেছেন। কাল থেকে সকাল ৯টায় বড় ভাইয়ের চায়ের দোকানে রিপোর্ট করবেন।");
      setLoading(false);
    }, 2000);
  };

  const benefits = [
    { title: "ফ্রি চা-বিড়ি", desc: "বড় ভাইয়ের ডেরায় সারাদিন আনলিমিটেড চা আর বিড়ি ফ্রি!", icon: Coffee, color: "amber" },
    { title: "খাম্বা পাহারা", desc: "রাতের বেলা এলাকায় খাম্বা পাহারা দেওয়ার দায়িত্ব আপনার!", icon: ShieldAlert, color: "blue" },
    { title: "প্যাকেট বিরিয়ানি", desc: "স্লোগান দিলে প্যাকেট পাবেন, না দিলে হুদাই চিল্লাবেন!", icon: Utensils, color: "rose" },
    { title: "জাহিদুল ভাই ব্যাকআপ", desc: "কোনো ঝামেলা হলে ফোন করবেন, (যদি রিসিভ করে আরকি!)", icon: Heart, color: "indigo" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-24 h-24 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 mb-6 shadow-2xl border-4 border-violet-400 rotate-6">
           <Users size={48} />
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white">কর্মি <span className="text-violet-600">নিবন্ধন</span></h1>
        <p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl">নেতা হতে চান? আগে কর্মি হয়ে জাহিদুল ভাইয়ের পা চাটতে শিখুন। নিবন্ধন আজই!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-[3.5rem] p-12 border-4 border-violet-50 dark:border-violet-900 shadow-3xl">
          <h2 className="text-4xl font-black mb-10 text-slate-800 dark:text-white flex items-center gap-4">
            <UserCheck className="text-violet-600" size={40} /> ফিউচার লিডার ফরম
          </h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">আপনার নাম (ভবিষ্যৎ এম.পি)</label>
                <input required type="text" placeholder="যেমন: মাস্তান মকবুল" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-violet-500 outline-none font-bold" />
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">এলাকার নাম (যেখানে মাস্তানি করবেন)</label>
                <input required type="text" placeholder="যেমন: খাম্বাপাড়া ইউনিয়ন" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-violet-500 outline-none font-bold" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">কর্মি বা নেতাকর্মীর ধরন</label>
                <select required className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-violet-500 outline-none font-bold">
                  <option value="tea">চাখোর কর্মি (শুধু চা খাই আর বসে থাকি)</option>
                  <option value="slogan">স্লোগান মাস্টার (গলা ফাটানো বিশেষজ্ঞ)</option>
                  <option value="pocket">পকেট মার কর্মি (সুযোগ পেলেই জনগণের পকেট সাফ)</option>
                  <option value="khamba">খাম্বা পাহারা (রাতের অন্ধকারে খাম্বা পাহারা দেই)</option>
                  <option value="biryani">বিরিয়ানি লাভার (প্যাকেট না পাইলে স্লোগান দিই না)</option>
                  <option value="sakshi">সাক্ষী গোপাল (সব দেখি কিন্তু কিছু বলি না)</option>
                  <option value="digital">ডিজিটাল দালাল (ফেসবুকে হুদাই কমেন্ট করি)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">আপনার বিশেষ দক্ষতা</label>
                <input required type="text" placeholder="যেমন: ১ স্লোগানে ১০ জন ফিট" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-violet-500 outline-none font-bold" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-black text-red-500 mb-2 uppercase tracking-widest">কার তেল মেখে আসলেন? (রেফারেন্স)</label>
              <input required type="text" placeholder="যেমন: এলাকার বড় ভাইয়ের তেল চপচপে রেফারেন্স..." className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-red-500 outline-none font-bold italic" />
            </div>
            <button disabled={loading} className="w-full py-6 bg-violet-600 text-white rounded-[2rem] font-black text-3xl hover:bg-violet-700 transition shadow-2xl shadow-violet-500/30 flex items-center justify-center gap-4 active:scale-95">
              {loading ? "নিবন্ধন হচ্ছে..." : <><BadgeCheck size={36} /> নেতা হিসেবে কবুল করুন</>}
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-violet-600 to-indigo-700 p-10 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 opacity-10"><Dna size={200} /></div>
             <h3 className="text-3xl font-black mb-6">কর্মি হওয়ার সুবিধা</h3>
             <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/40 transition">
                       <b.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-black">{b.title}</h4>
                       <p className="text-white/70 font-bold text-sm leading-tight">{b.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
          <div className="p-10 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border-4 border-dashed border-violet-200 dark:border-violet-800">
             <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-red-600 text-white rounded-2xl flex items-center justify-center rotate-3"><AlertTriangle size={32} /></div>
                <h4 className="text-xl font-black text-slate-800 dark:text-white">শর্তাবলী:</h4>
             </div>
             <p className="text-slate-600 dark:text-slate-400 font-bold leading-relaxed italic">
                "নিবন্ধন করার পর কোনো প্রকার দাবি দাওয়া করা যাবে না। বিরিয়ানি না পেলে মাথা গরম করা যাবে না। সব সময় জাহিদুল ভাইয়ের প্রশংসা করতে হবে।"
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Satirical Gavel/Case Component
const GavelSection = () => {
  const [loading, setLoading] = useState(false);

  const handleCaseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("মামলা দায়ের করা হয়েছে! আসামি কে ৫ মিনিটের মধ্যে আন্দার ঘুচা দিয়া হচ্ছে। মামা চাচার ফোনে কাজ হবে না (তবে টাকার গরম থাকলে ভিন্ন কথা)!");
      setLoading(false);
    }, 2000);
  };

  const bailOffers = [
    { title: "ঝটপট জামিন (সিলভার)", desc: "ছোটখাটো মামলার জন্য ১ কেজি জিলাপি আর ওসি সাহেবের চা-নাস্তা খরচ দিলেই জামিন কনফার্ম।", price: "৫০০ টাকা + ১ কেজি জিলাপি", icon: Smile, color: "slate" },
    { title: "ভিআইপি খালাস (গোল্ড)", desc: "থানায় বসে এসি বাতাসের সাথে চা খাবেন, আর পিছনের দরজা দিয়ে আপনাকে বাসায় পৌঁছে দেওয়া হবে।", price: "৫,০০০ টাকা (ফিক্সড)", icon: ShieldCheck, color: "amber" },
    { title: "গায়েবি জামিন (ডায়মন্ড)", desc: "আপনি থানায় যাবেনই না, কোর্টেও যাবেন না—কিন্তু ফাইলে থাকবে আপনি একদম নির্দোষ। ম্যাজিক!", price: "৫০,০০০ টাকা (জাহিদুল ভাই স্পেশাল)", icon: Zap, color: "indigo" },
    { title: "মামলা নাই করে দেওয়া (প্লাটিনাম)", desc: "অরিজিনাল ফাইলটাই ইঁদুরে খেয়ে ফেলবে! কোনো রেকর্ড থাকবে না। আপনি সাফ সাদা মানুষ।", price: "১টি কচি পাঠা + নগদ ১ লাখ", icon: Star, color: "emerald" }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-24 h-24 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-600 mb-6 shadow-2xl border-4 border-rose-400 rotate-12"><Gavel size={48} /></div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white">মামলা <span className="text-rose-600">ডায়েরি</span></h1>
        <p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl">প্রতিপক্ষকে সাইজ করতে চান? আজই গায়েবি মামলা ঠুকে দিন। ৫ মিনিটের মধ্যে কেল্লা ফতে!</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="bg-white dark:bg-slate-800 rounded-[3.5rem] p-12 border-4 border-rose-100 dark:border-rose-900 shadow-3xl">
          <div className="flex items-center gap-4 mb-10"><div className="p-4 bg-rose-600 rounded-3xl text-white"><ShieldAlert size={32} /></div><div><h2 className="text-3xl font-black text-slate-800 dark:text-white">গায়েবি মামলা ফরম</h2><p className="text-rose-500 font-bold">আসামিকে সাইজ করার সহজ উপায়</p></div></div>
          <form onSubmit={handleCaseSubmit} className="space-y-6">
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">আসামির নাম</label><input required type="text" placeholder="যেমন: বাটপার বশির" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-rose-500 outline-none font-bold" /></div>
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">মামলার ধারা (ড্রপডাউন)</label><select required className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border-2 border-transparent focus:border-rose-500 outline-none font-bold"><option value="420">৪২০ (পুরান বাটপার / মান হানি)</option><option value="332">৩৩২ (ইজ্জতের উপরে ট্রাক্টর তোলা)</option><option value="506">৫০৬ (হুদাই চিল্লাপাল্লা করা)</option><option value="999">৯৯৯ (বেহুদা ডিস্টার্ব করার অপরাধ)</option><option value="007">০০৭ (মন ভাঙ্গার গুরুতর অপরাধ)</option><option value="144">১৪৪ (এলাকায় ভাব নেওয়া নিষিদ্ধ)</option></select></div>
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">আসামির ছবি (যদি থাকে)</label><div className="relative group"><label className="flex flex-col items-center justify-center w-full h-32 border-4 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition"><Camera className="text-slate-400 group-hover:text-rose-500 transition mb-2" /><p className="text-xs font-black text-slate-400 uppercase">ছবি আপলোড করুন</p><input type="file" className="hidden" /></label></div></div>
            <div className="bg-rose-50 dark:bg-rose-900/20 p-6 rounded-3xl border-2 border-rose-100 dark:border-rose-900/50"><p className="text-rose-600 dark:text-rose-400 font-black text-lg italic leading-relaxed">"আসামি কে ৫ মি. মে আন্দার ঘুচা দিয়া হবে। মামা চাচার ফোনে খানা নাই, (টাকা হলে আলাদো বিষয়)!"</p></div>
            <button disabled={loading} className="w-full py-6 bg-rose-600 text-white rounded-[2rem] font-black text-2xl hover:bg-rose-700 transition shadow-2xl shadow-rose-500/30 flex items-center justify-center gap-4 active:scale-95">{loading ? "দায়ের হচ্ছে..." : <><Gavel size={28} /> মামলা দায়ের করুন</>}</button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4"><div className="p-4 bg-emerald-600 rounded-3xl text-white"><Scale size={32} /></div><div><h2 className="text-3xl font-black text-slate-800 dark:text-white">জামিন ও ঘুষ প্যাকেজ</h2><p className="text-emerald-500 font-bold">টাকা থাকলে জেলখানাও রিসোর্ট!</p></div></div>
          <div className="grid grid-cols-1 gap-6">
            {bailOffers.map((offer, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 border-slate-100 dark:border-slate-700 shadow-xl hover:translate-x-2 transition group flex items-center gap-6">
                <div className={`shrink-0 w-20 h-20 bg-${offer.color}-100 dark:bg-${offer.color}-900/40 rounded-2xl flex items-center justify-center text-${offer.color}-600 group-hover:rotate-12 transition`}><offer.icon size={36} /></div>
                <div className="flex-grow"><h3 className="text-2xl font-black text-slate-800 dark:text-white mb-2">{offer.title}</h3><p className="text-slate-500 dark:text-slate-400 font-bold text-sm mb-4 leading-relaxed italic">"{offer.desc}"</p><div className="inline-flex px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-emerald-600 font-black text-lg">মূল্য: {offer.price}</div></div>
                <button className="p-4 bg-emerald-600 text-white rounded-2xl hover:bg-emerald-700 transition shadow-lg"><HandMetal size={24} /></button>
              </div>
            ))}
          </div>
          <div className="p-8 bg-blue-50 dark:bg-blue-900/20 rounded-[3rem] border-2 border-dashed border-blue-200 dark:border-blue-800 flex items-center gap-6"><div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center shrink-0"><Info size={32} /></div><p className="text-blue-700 dark:text-blue-300 font-black text-xl italic">"বিনা ঘষে জামিন চাইলে ৫ বছর অপেক্ষা করুন, আর জাহিদুল ভাইকে খুশি করলে ৫ মিনিট!"</p></div>
        </div>
      </div>
    </div>
  );
};

// Satirical Form Modal for Family Card
const FamilyCardForm = ({ isOpen, onClose, cardTitle }: { isOpen: boolean, onClose: () => void, cardTitle: string }) => {
  const [loading, setLoading] = useState(false);
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("আবেদন সফল হয়েছে! আপনার ৫০০০ টাকা কেটে নেওয়া হয়েছে (জাহিদুল ভাইয়ের চা-নাস্তা খরচ)।");
      setLoading(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-4 border-orange-500 overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-orange-600 p-8 text-white relative">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition"><X size={32} /></button>
          <div className="flex items-center gap-4 mb-2"><FileText size={40} /><h2 className="text-3xl font-black">কার্ড আবেদন ফর্ম</h2></div>
          <p className="text-orange-100 font-bold text-lg">আবেদন করছেন: <span className="underline decoration-2">{cardTitle}</span></p>
        </div>
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">আপনার নাম</label><input required type="text" placeholder="যেমন: কদু মিয়া" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 outline-none font-bold" /></div>
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">ঠিকানা</label><input required type="text" placeholder="গ্রাম: খাম্বাপাড়া" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 outline-none font-bold" /></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">দলের নাম নির্বাচন করুন</label><select required className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 outline-none font-bold"><option value="amlig">আমলিগ (ডিজিটাল চোর)</option><option value="bimpi">বিম্পি (খাম্বা লাভার)</option><option value="jamat">জামাত (বিস্কুট পার্টি)</option><option value="insaf">ইনসাপ (ধোয়া তুলসি পাতা)</option><option value="vua">হুদাই পার্টি (শুধু কাচ্চি খাবো)</option></select></div>
            <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest">এনআইডি নং (১০ ডিজিট)</label><input required type="text" pattern="\d{10}" placeholder="XXXXXXXXXX" className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-orange-500 outline-none font-bold" /></div>
          </div>
          <div><label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-widest text-red-600">কার পা চেটে আবেদন হচ্ছে?</label><input required type="text" placeholder="যেমন: বড় ভাইয়ের পা চেটে আবেদন করছি..." className="w-full px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-transparent focus:border-red-500 outline-none font-bold italic" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
             <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-800 text-center"><span className="text-xs font-black text-amber-600 block mb-1">আবেদনের খরচ</span><span className="text-3xl font-black text-slate-800 dark:text-white">৳ ৫,০০০</span><span className="text-[10px] text-amber-500 block mt-1">(জাহিদুল ভাইয়ের চা-নাস্তা খরচ বাবদ)</span></div>
             <div className="relative group"><label className="flex flex-col items-center justify-center w-full h-24 border-4 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition"><div className="flex flex-col items-center justify-center pt-2"><Upload className="text-slate-400 group-hover:text-orange-500 transition" /><p className="text-xs font-black text-slate-400 mt-2">এনআইডি ছবি আপলোড</p></div><input type="file" className="hidden" /></label></div>
          </div>
          <button disabled={loading} className="w-full py-6 bg-orange-600 text-white rounded-[2rem] font-black text-2xl hover:bg-orange-700 transition shadow-xl shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-4">{loading ? "জমা হচ্ছে..." : <><CheckCircle size={32} /> আবেদন সাবমিট করুন</>}</button>
        </form>
      </div>
    </div>
  );
};

// FamilyCard Component (Satirical)
const FamilyCard = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("");
  const cards = [
    { id: 3, title: "৪ বিয়ে ডায়মন্ড প্যাকেজ", desc: "সাহস করে ৪টি বিয়ে করে ফেলুন এবং লুফে নিন ৪টি প্রিমিয়াম ফ্যামিলি কার্ড। এই প্যাকেজটি নিলে আপনার এলাকায় আলাদা ইজ্জত এবং ৩টি মেজবান একদম ফ্রি!", offer: "ফ্রি কাচ্চি উৎসব", icon: Award, color: "indigo", badge: "বীর পুরুষ" },
    { id: 2, title: "নবদম্পতি গোল্ড কার্ড", desc: "বিয়ে করেছেন মানে একটি ফ্যামিলি কার্ড কনফার্ম! অভিনন্দন। কার্ডটি রেডি আছে, ভোটার আইডি কার্ড এবং কাবিননামা নিয়ে জাহিদুল ভাইয়ের ডেরায় চলে আসুন।", offer: "১ কেজি বাসি রসগোল্লা ফ্রি", icon: Heart, color: "pink", badge: "শুভকামনা" },
    { id: 1, title: "ব্যাচেলর স্পেশাল (তিরস্কার)", desc: "বিয়ে যেহেতু করেন নি, কার্ড আপনার পিছন দিয়ে দেওয়া হবে! (বিনা মূলে)। কার্ড নেওয়ার জন্য কোনো লাইনে দাঁড়াতে হবে না, সরাসরি ধাক্কা খেয়ে নিয়ে যান।", offer: "সার্টিফিকেট: 'আজীবন অবিবাহিত'", icon: Frown, color: "red", badge: "লজ্জাজনক অফার" },
    { id: 4, title: "শাশুড়ি দমন প্লাটিনাম কার্ড", desc: "পারিবারিক ঝগড়া থেকে মুক্তি পেতে এই কার্ডটি ব্যবহার করুন। এই কার্ড দেখালে আপনার শাশুড়ি অন্তত ৩ দিন কথা বলা বন্ধ রাখবে। ১০০% জাহিদুল ভাই গ্যারান্টি।", offer: "শান্তিপূর্ণ ৩ দিন", icon: ShieldCheck, color: "emerald", badge: "বেস্ট সেলার" }
  ];
  const handleApply = (title: string) => { setSelectedCard(title); setIsFormOpen(true); };
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <FamilyCardForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} cardTitle={selectedCard} />
      <div className="flex flex-col items-center text-center mb-16"><div className="w-24 h-24 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-600 mb-6 shadow-2xl border-4 border-orange-400 rotate-12"><FileText size={48} /></div><h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white">ফ্যামিলি <span className="text-orange-600">কার্ড</span> অফার</h1><p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl">বিয়ে হোক বা না হোক, জাহিদুল ভাইয়ের কার্ড সবার জন্য রেডি। নিজের স্ট্যাটাস অনুযায়ী কার্ড বেছে নিন।</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {cards.map((card) => (
          <div key={card.id} className="bg-white dark:bg-slate-800 rounded-[3.5rem] border-4 border-slate-50 dark:border-slate-700 overflow-hidden shadow-3xl hover:-translate-y-4 transition duration-500 group relative">
            <div className="p-12 relative z-10">
              <div className="flex justify-between items-start mb-8"><div className={`w-20 h-20 bg-${card.color}-100 dark:bg-${card.color}-900/30 rounded-3xl flex items-center justify-center text-${card.color}-600 group-hover:scale-110 transition`}><card.icon size={42} /></div><span className="px-6 py-2 bg-slate-900 text-white rounded-full text-xs font-black uppercase tracking-widest animate-bounce">{card.badge}</span></div>
              <h2 className="text-4xl font-black mb-6 leading-tight text-slate-800 dark:text-white group-hover:text-orange-600 transition">{card.title}</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10 italic">"{card.desc}"</p>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-orange-200 dark:border-orange-900/50 flex items-center justify-between"><span className="text-slate-400 font-black uppercase tracking-tighter">বিশেষ বোনাস:</span><span className="text-2xl font-black text-orange-600">{card.offer}</span></div>
              <button onClick={() => handleApply(card.title)} className="w-full mt-10 py-6 bg-orange-600 text-white rounded-[2rem] font-black text-2xl hover:bg-orange-700 transition shadow-xl shadow-orange-500/20 active:scale-95">কার্ড সংগ্রহ করুন</button>
            </div>
            <div className={`absolute top-0 right-0 w-64 h-64 bg-${card.color}-500/5 blur-[100px] -z-10 rounded-full`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Satirical Tender Component
const TenderSection = () => {
  const tenders = [
    { id: 1, title: "টেন্ডার চুরি প্যাকেজ (প্রো)", desc: "অন্য কারো টেন্ডার সরাসরি হাইজ্যাক করতে চান? আমাদের বিশেষ মাস্তান বাহিনী আপনার টেন্ডার নিশ্চিত করবে। আবেদনের দরকার নেই, সরাসরি কব্জা করুন।", cost: "টেন্ডার মূল্যের ২০%", icon: Skull, color: "red", status: "লাইভ হাইজ্যাকিং" },
    { id: 2, title: "পুকুর চুরি মেগা প্রজেক্ট", desc: "নামে মাত্র পুকুর খনন হবে, কিন্তু বিল হবে সমুদ্র খননের সমতুল্য। কোনো মাটি কাটা লাগবে না, শুধু ফাইলের কাজ করলেই কোটিপতি!", cost: "জাহিদুল ভাইয়ের ৫% কমিশন", icon: Search, color: "emerald", status: "টাকা ভ্যানিশ" },
    { id: 3, title: "ডিজিটাল খাম্বা প্রো (বিদ্যুৎহীন)", desc: "পুরো এলাকায় ১০০০ খাম্বা বসানো হবে কিন্তু কোনো তার বা বিদ্যুৎ থাকবে না। খাম্বাগুলো মূলত সেলফি তোলার জন্য ব্যবহার করা হবে।", cost: "৫০০ কোটি টাকা", icon: Zap, color: "amber", status: "আঁধারে বসবাস" },
    { id: 4, title: "রাস্তার রড বনাম বাঁশ প্রজেক্ট", desc: "পরিবেশবান্ধব উন্নয়ন! লোহার রডের বদলে আমরা দিচ্ছি মজবুত বাঁশ। এই রাস্তা অন্তত এক সপ্তাহ টিকবে (জাহিদুল ভাই গ্যারান্টি)।", cost: "৫০ কোটি টাকা (লোকাল বাঁশ)", icon: Hammer, color: "indigo", status: "পরিবেশবান্ধব চুরি" },
    { id: 5, title: "বালিশ উত্তোলন প্রকল্প (ভিআইপি)", desc: "বালিশ দোতলায় উঠাতে ৫০০০ টাকা বিল করার সুবর্ণ সুযোগ। আপনার যদি একটি বালিশ থাকে, তবে আপনিও হতে পারেন কোটিপতি।", cost: "প্রতি বালিশ ১০০০ টাকা কমিশন", icon: Utensils, color: "rose", status: "আরামদায়ক দুর্নীতি" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16"><div className="w-24 h-24 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 mb-6 shadow-2xl border-4 border-cyan-400 -rotate-6"><Briefcase size={48} /></div><h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white">টেন্ডারবাজি <span className="text-cyan-600">কর্নার</span></h1><p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl italic">"আপনার টেন্ডার, আমাদের কব্জা। উন্নয়নের টাকা পকেটে ভরার সেরা ঠিকানা।"</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tenders.map((tender) => (
          <div key={tender.id} className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 border-4 border-slate-50 dark:border-slate-700 shadow-3xl hover:scale-105 transition duration-500 group flex flex-col relative overflow-hidden">
            <div className={`absolute top-0 right-0 px-6 py-2 bg-${tender.color}-600 text-white text-[10px] font-black uppercase tracking-tighter rounded-bl-2xl`}>{tender.status}</div>
            <div className={`w-20 h-20 bg-${tender.color}-100 dark:bg-${tender.color}-900/40 rounded-2xl flex items-center justify-center text-${tender.color}-600 mb-8 group-hover:rotate-12 transition`}><tender.icon size={40} /></div>
            <h3 className="text-3xl font-black mb-4 leading-tight text-slate-800 dark:text-white">{tender.title}</h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-bold mb-8 flex-grow">{tender.desc}</p>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-600 mb-8"><span className="text-xs uppercase font-black text-slate-400 block mb-1">প্রজেক্ট বাজেট/কমিশন</span><span className={`text-xl font-black text-${tender.color}-600`}>{tender.cost}</span></div>
            <button className={`w-full py-5 bg-${tender.color}-600 text-white rounded-2xl font-black text-xl hover:opacity-90 transition shadow-xl`}>টেন্ডার মারুন</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Marketplace Component
const Marketplace = () => {
  const items = [
    { id: 1, title: "১০০০ ভোট কিনুন (স্পেশাল)", desc: "জাহিদুল ভাইয়ের কড়া নির্দেশে ধামাকা ডিসকাউন্ট! ১০০০ ভোট কিনলে ১টি বড় টেন্ডার একদম ফ্রি. দেরি করলে খাম্বা খুঁজে পাবেন না!", price: "৫০০ টাকা (স্পেশাল)", seller: "জাহিদুল ইসলাম (জাহিদ)", icon: Package, badge: "সেরা ডিল" },
    { id: 2, title: "যৌবনের প্রথম ভোট", desc: "আপনার পবিত্র প্রথম ভোটটি অবহেলায় নষ্ট করবেন না। আমাদের কাছে বিক্রি করে সেই টাকা দিয়ে আজই বন্ধুসহ কাচ্চি খেয়ে নিন।", price: "১ প্লেট কাচ্চি + কোল্ড ড্রিংকস", seller: "পুরাতন ভোটার আব্বাস ভাই", icon: Heart, badge: "ইমোশনাল অফার" },
    { id: 3, title: "নতুন এনআইডি কার্ড স্পেশাল", desc: "এইমাত্র এনআইডি কার্ড হাতে পেয়েছেন? অভিনন্দন! আপনার ফ্রেশ ভোটটি আমরাই দিচ্ছি সর্বোচ্চ মূল্যে। ভেরিফাইড দালাল গ্যারান্টি।", price: "২৫০ টাকা (বোনাস সহ)", seller: "ডিজিটাল দালাল সাদ্দাম", icon: UserCheck, badge: "নতুনদের জন্য" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16"><h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white">ভোটের <span className="text-blue-600">মার্কেটপ্লেস</span></h1><p className="text-xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl mx-auto">সেরা দামে ভোট কিনুন এবং এলাকা শাসন করুন। জাহিদুল ইসলামের বিশেষ তদারকিতে এখানে প্রতারণার কোনো সুযোগ নেই।</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white dark:bg-slate-800 rounded-[3rem] border-2 border-slate-100 dark:border-slate-700 overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-500 group flex flex-col">
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-start mb-6"><div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition"><item.icon size={32} /></div><span className="px-4 py-1.5 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 rounded-full text-sm font-black uppercase tracking-wider border border-amber-200 dark:border-amber-800">{item.badge}</span></div>
              <h3 className="text-3xl font-black mb-4 leading-tight group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-bold mb-6 leading-relaxed italic">"{item.desc}"</p>
              <div className="flex flex-col gap-2 mt-auto"><div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-sm font-black"><Users size={16} /> বিক্রেতা: <span className="text-blue-600 dark:text-blue-400">{item.seller}</span></div><div className="text-2xl font-black text-slate-800 dark:text-white mt-2">মূল্য: <span className="text-green-600 dark:text-green-400">{item.price}</span></div></div>
            </div>
            <div className="p-8 bg-slate-50 dark:bg-slate-900/50 border-t dark:border-slate-700"><button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 active:scale-95"><ShoppingBag size={24} /> এখনই কিনুন</button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// RumorCenter Component
const RumorCenter = () => {
  const rumors = [
    { id: 0, tag: "ভ্যালেন্টাইন স্পেশাল", title: "১৪ই ফেব্রুয়ারি: প্রেমিকার সাথে ভোট দিলে কাচ্চি ফ্রি!", desc: "ভোট বাজার ডট কমের বিশেষ ঘোষণা (গুজব), যারা আগামী ১৪ই ফেব্রুয়ারি জোড়ায় জোড়ায় ভোট দিতে আসবেন, তাদের লাইনে দাঁড়াতে হবে না। শুধু তাই নয়, ভোট দেওয়ার পর প্রার্থীর পক্ষ থেকে থাকছে একটি ফ্যামিলি সাইজ রোমান্টিক কাচ্চি বক্স!", likes: "৫০২কে", views: "১০এম", icon: Heart, color: "red" },
    { id: 1, tag: "ব্রেকিং নিউজ", title: "কবর থেকে উঠে ভোট দিতে আসলেন কদু মিয়া!", desc: "প্রত্যক্ষদর্শীরা জানান, কদু মিয়া কবরে শুয়ে ভোটের শব্দ শুনে সহ্য করতে না পেরে উঠে আসেন। তিনি বলেন, 'ভোট না দিলে আমার আত্মা শান্তি পাচ্ছিল না'। তবে ভোট দেওয়ার পর তিনি ২ প্লেট কাচ্চি চেয়েছেন।", likes: "১০৫কে", views: "১.২এম", icon: Ghost, color: "red" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16"><div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-600 mb-6 shadow-xl animate-pulse"><AlertTriangle size={48} /></div><h1 className="text-6xl md:text-8xl font-black mb-6 text-slate-900 dark:text-white">গরম <span className="text-red-600">গুজব</span> নিউজ</h1><p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-3xl">এলাকার সব হট খবর এবং ভেরিফাইড গুজব এখানে। বিশ্বাস করলে আপনার রিস্ক!</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {rumors.map((rumor) => (
          <div key={rumor.id} className="bg-white dark:bg-slate-800 rounded-[3.5rem] border-4 border-slate-50 dark:border-slate-700 overflow-hidden shadow-2xl hover:-translate-y-2 transition duration-500 group">
            <div className="p-10">
              <div className="flex justify-between items-center mb-6"><span className={`px-5 py-2 bg-${rumor.color}-100 dark:bg-${rumor.color}-900/40 text-${rumor.color}-600 dark:text-${rumor.color}-400 rounded-full text-sm font-black uppercase tracking-widest border-2 border-${rumor.color}-200 dark:border-${rumor.color}-800`}>{rumor.tag}</span><div className="flex gap-4"><div className="flex items-center gap-1.5 text-slate-400 font-black"><Eye size={18} /> {rumor.views}</div></div></div>
              <h2 className="text-4xl font-black mb-6 leading-tight text-slate-800 dark:text-white group-hover:text-blue-600 transition">{rumor.title}</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10">{rumor.desc}</p>
              <div className="flex items-center justify-between pt-8 border-t dark:border-slate-700"><div className="flex gap-4"><button className="flex items-center gap-2 px-6 py-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl font-black hover:scale-110 transition active:scale-95"><Heart size={20} /> {rumor.likes}</button><button className="p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl text-slate-400 hover:text-blue-600 transition"><Share2 size={20} /></button></div><button className="px-8 py-3 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">বিস্তারিত পড়ুন</button></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const GenericPage = () => {
  const { pageId } = useParams();
  const info = PAGE_CONTENT[pageId || ""];
  if (pageId === 'market') return <Marketplace />;
  if (pageId === 'rumor') return <RumorCenter />;
  if (pageId === 'bank-loan') return <BankLoan />;
  if (pageId === 'family-card') return <FamilyCard />;
  if (pageId === 'tender') return <TenderSection />;
  if (pageId === 'case') return <GavelSection />;
  if (pageId === 'worker-reg' || pageId === 'leader-reg') return <WorkerRegistration />;
  if (!info) return (<div className="py-20 text-center"><h1 className="text-4xl font-bold">পেইজটি পাওয়া যায়নি</h1><Link to="/" className="text-blue-600 mt-4 inline-block underline">হোমপেজে ফিরে যান</Link></div>);
  const DynamicIcon = (LucideIcons as any)[info.iconName] || Info;
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="flex items-center gap-2 text-slate-400 mb-8 font-bold text-sm"><Link to="/" className="hover:text-blue-600 transition">হোম</Link><ChevronRight size={14} /><span className="text-slate-600 dark:text-slate-300">{info.title}</span></div>
      <div className="bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className={`bg-gradient-to-br from-${info.accentColor}-600 to-${info.accentColor}-800 p-12 text-white relative`}><div className="absolute top-0 right-0 p-8 opacity-10"><DynamicIcon size={160} /></div><div className="relative z-10 flex flex-col md:flex-row items-center gap-8"><div className="bg-white/20 p-6 rounded-[2rem] backdrop-blur-md"><DynamicIcon size={64} /></div><div className="text-center md:text-left"><h1 className="text-4xl md:text-6xl font-black mb-2">{info.title}</h1><p className="text-xl text-white/80 font-bold">{info.subtitle}</p></div></div></div>
        <div className="p-12"><div className="prose prose-slate dark:prose-invert max-w-none"><p className="text-2xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">{info.content}</p></div><div className="mt-16 pt-8 border-t dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-6"><div className="flex items-center gap-4"><div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center"><ShieldCheck className="text-blue-600 dark:text-blue-400" /></div><p className="text-slate-500 dark:text-slate-400 font-bold">জাহিদুল ইসলাম কর্তৃক ভেরিফাইড তথ্য</p></div><div className="flex gap-4 w-full sm:w-auto"><Link to="/" className="flex-1 sm:flex-none text-center bg-slate-100 dark:bg-slate-700 px-8 py-4 rounded-2xl text-slate-600 dark:text-slate-300 font-black hover:bg-slate-200 transition">পিছনে যান</Link><button className="flex-1 sm:flex-none bg-blue-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-700 transition shadow-xl shadow-blue-200 dark:shadow-none">{STRINGS.JOIN_BUTTON}</button></div></div></div>
      </div>
    </div>
  );
};

// BankLoan Component (Satirical)
const BankLoan = () => {
  const packages = [
    { id: 1, title: "জনগণের টাকা আপনার পকেটে", desc: "নামে মাত্র লোন, ফেরত দেওয়ার কোনো চিন্তা নেই। জনগণের ট্যাক্সের টাকা সরাসরি আপনার পার্সোনাল একাউন্টে ট্রান্সফার করা হবে।", benefit: "১০০% ভ্যানিশিং গ্যারান্টি", icon: PiggyBank, color: "emerald" },
    { id: 2, title: "রডের বদলে বাঁশ প্যাকেজ", desc: "রাস্তা বা ব্রিজ তৈরিতে লোহার বদলে জাহিদুল ভাইয়ের বাগান থেকে বাঁশ কিনুন। বাকি টাকা নিজের পকেটে ভরে দুবাই ট্যুর দিন।", benefit: "উন্নয়ন চোখের পলকে", icon: HardHat, color: "amber" }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center mb-16"><div className="mb-8 relative group"><div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full group-hover:bg-emerald-500/40 transition"></div><div className="w-32 h-32 bg-emerald-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-2xl relative z-10 border-4 border-emerald-400 rotate-3 group-hover:rotate-0 transition duration-500"><Building2 size={50} /><span className="text-[10px] font-black mt-1">পকেটমার ব্যাংক</span></div></div><h1 className="text-5xl md:text-7xl font-black mb-6 text-slate-900 dark:text-white leading-tight">পকেটমার <span className="text-emerald-600">ব্যাংক লোন</span></h1><p className="text-2xl text-slate-500 dark:text-slate-400 font-bold max-w-2xl italic">"জনগণের টাকা আপনার পকেটে, আমাদের লোগোই যার প্রমাণ।"</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-slate-800 rounded-[3rem] p-10 border-2 border-slate-50 dark:border-slate-700 shadow-2xl hover:scale-105 transition duration-500 group flex flex-col"><div className={`w-20 h-20 bg-${pkg.color}-100 dark:bg-${pkg.color}-900/40 rounded-2xl flex items-center justify-center text-${pkg.color}-600 mb-8 group-hover:rotate-12 transition`}><pkg.icon size={40} /></div><h3 className="text-3xl font-black mb-4 leading-tight text-slate-800 dark:text-white">{pkg.title}</h3><p className="text-lg text-slate-500 dark:text-slate-400 font-bold mb-8 flex-grow">{pkg.desc}</p><div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-dashed border-slate-200 dark:border-slate-600 mb-8"><span className="text-xs uppercase font-black text-slate-400 block mb-1">স্পেশাল সুবিধা</span><span className={`text-xl font-black text-${pkg.color}-600`}>{pkg.benefit}</span></div><button className={`w-full py-5 bg-${pkg.color}-600 text-white rounded-2xl font-black text-xl hover:opacity-90 transition shadow-xl`}>লোন নিন</button></div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [themeMsg, setThemeMsg] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
    const hasSeenWelcome = sessionStorage.getItem('jb_welcome_seen');
    if (!hasSeenWelcome) { setTimeout(() => setShowWelcome(true), 1500); }
  }, []);

  // Close mobile menu when a navigation link is clicked
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const closeWelcome = () => { setShowWelcome(false); sessionStorage.setItem('jb_welcome_seen', 'true'); };
  const openRegister = () => { closeWelcome(); setAuthMode('register'); setIsAuthOpen(true); };
  
  const toggleTheme = () => { 
    const newTheme = theme === 'light' ? 'dark' : 'light'; 
    setTheme(newTheme); 
    document.documentElement.classList.toggle('dark'); 
    const messages = newTheme === 'dark' ? DARK_MESSAGES : LIGHT_MESSAGES; 
    const randomMsg = messages[Math.floor(Math.random() * messages.length)]; 
    setThemeMsg(randomMsg); 
    setTimeout(() => setThemeMsg(''), 5000); 
  };

  const navLinks = [
    { label: STRINGS.NAV_HOME, path: "/", iconName: "Home" },
    { label: STRINGS.NAV_MARKET, path: "/page/market", iconName: "ShoppingBag" },
    { label: STRINGS.NAV_RUMOR, path: "/page/rumor", iconName: "AlertTriangle" },
    { label: STRINGS.NAV_BANK_LOAN, path: "/page/bank-loan", iconName: "Building2" },
    { label: STRINGS.NAV_CARD, path: "/page/family-card", iconName: "FileText" },
    { label: STRINGS.NAV_TENDER, path: "/page/tender", iconName: "Briefcase" },
    { label: STRINGS.NAV_CASE, path: "/page/case", iconName: "Gavel" },
    { label: STRINGS.NAV_WORKER_REG, path: "/page/worker-reg", iconName: "Users" },
  ];

  return (
    <Router>
      <ScrollToTop />
      <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <BreakingNews />
        
        {themeMsg && (<div className="fixed inset-0 pointer-events-none z-[200] flex items-center justify-center p-6 backdrop-blur-[2px]"><div className={`animate-in zoom-in slide-in-from-bottom-10 duration-500 flex flex-col items-center text-center p-10 rounded-[3rem] shadow-2xl border-4 ${theme === 'dark' ? 'bg-red-600 border-red-400 shadow-red-500/40' : 'bg-blue-600 border-blue-400 shadow-blue-500/40'} text-white max-w-lg`}><div className="mb-6 bg-white/20 p-5 rounded-full ring-8 ring-white/10 animate-pulse">{theme === 'dark' ? <AlertTriangle size={64} /> : <Star size={64} />}</div><h3 className="text-3xl font-black mb-2 leading-tight">{themeMsg}</h3><div className="w-16 h-1.5 bg-white/50 rounded-full mt-4"></div></div></div>)}
        
        {showWelcome && (<div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"><div className="bg-white dark:bg-slate-800 rounded-[3rem] w-full max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden animate-in fade-in zoom-in duration-500 border border-white/10 relative"><div className="p-12 text-center"><div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-blue-200 dark:shadow-none"><ShieldCheck size={50} /></div><h2 className="text-3xl font-black mb-4 dark:text-white">আপনি কি এলাকায় নতুন?</h2><p className="text-slate-600 dark:text-slate-300 text-xl font-medium leading-relaxed mb-10">নতুন হলে এখুনি রেজিষ্ট্রেশন করুন, নহলে আপনার ভোট অন্যকেউ বিক্রি করে ফেলবে।</p><div className="space-y-4"><button onClick={openRegister} className="w-full py-5 bg-blue-600 text-white font-black text-2xl rounded-2xl hover:bg-blue-700 hover:scale-[1.02] active:scale-95 transition shadow-2xl shadow-blue-400/30">নিবন্ধন করুন</button><button onClick={closeWelcome} className="w-full py-4 text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-100 dark:hover:bg-slate-700 rounded-2xl transition">পরে</button></div></div></div></div>)}
        
        <nav className="sticky top-[45px] z-50 bg-white dark:bg-slate-800 shadow-md border-b dark:border-slate-700">
          <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center group shrink-0" onClick={handleNavLinkClick}>
                <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition">
                  <Vote className="w-8 h-8 text-white" />
                </div>
                <div className="flex items-center ml-2">
                  <span className="text-3xl font-black text-blue-700 dark:text-blue-400 tracking-tighter">ভোটবিক্রি</span>
                  <span className="text-3xl font-black text-amber-500 dark:text-amber-400 tracking-tighter">.com</span>
                </div>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center flex-wrap justify-center gap-1 mx-4">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path} className="px-3 py-1.5 text-[13px] font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-lg transition">
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                <button onClick={toggleTheme} className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                
                <div className="hidden md:flex items-center space-x-2">
                  <button onClick={() => { setAuthMode('login'); setIsAuthOpen(true); }} className="px-4 py-2 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition flex items-center gap-2">
                    <LogIn size={18} /> {STRINGS.LOGIN_BUTTON}
                  </button>
                  <button onClick={() => { setAuthMode('register'); setIsAuthOpen(true); }} className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
                    {STRINGS.JOIN_BUTTON}
                  </button>
                </div>
                
                {/* Mobile Toggle Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition">
                  {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Dropdown UI */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-slate-800 border-t dark:border-slate-700 animate-in slide-in-from-top duration-300 overflow-hidden shadow-2xl">
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => {
                  const Icon = (LucideIcons as any)[link.iconName] || Home;
                  return (
                    <Link 
                      key={link.path} 
                      to={link.path} 
                      onClick={handleNavLinkClick}
                      className="flex items-center gap-4 px-4 py-4 text-lg font-black text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-2xl transition"
                    >
                      <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded-xl"><Icon size={24} className="text-blue-600" /></div>
                      {link.label}
                    </Link>
                  );
                })}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t dark:border-slate-700">
                  <button onClick={() => { setIsMenuOpen(false); setAuthMode('login'); setIsAuthOpen(true); }} className="w-full py-4 text-blue-600 dark:text-blue-400 font-black border-2 border-blue-100 dark:border-blue-900/50 rounded-2xl flex items-center justify-center gap-2">
                    <LogIn size={20} /> {STRINGS.LOGIN_BUTTON}
                  </button>
                  <button onClick={() => { setIsMenuOpen(false); setAuthMode('register'); setIsAuthOpen(true); }} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20">
                    {STRINGS.JOIN_BUTTON}
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-24 relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500 blur-[140px] opacity-20 rounded-full"></div>
                  <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 rounded-full mb-8 font-black text-sm uppercase tracking-[0.2em] border border-blue-200 dark:border-blue-800">
                    <TrendingUp size={16} /> ডিজিটাল নির্বাচনী বিপ্লব
                  </div>
                  <h1 className="text-6xl lg:text-9xl font-black mb-8 leading-[1.1] tracking-tight text-slate-900 dark:text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-5 duration-700">
                    টাকা নিন <span className="text-blue-600">বিকাশে-🕊️,</span> <br/> 
                    ভোট দিন <span className="text-indigo-600">হেসে হেসে।</span>
                  </h1>
                  <p className="text-2xl text-slate-700 dark:text-slate-400 max-w-4xl mx-auto font-bold leading-relaxed mb-12">
                    "ভোট যখন বিক্রয় হয়, উন্নয়ন তখন আকাশ ছোঁয়!"
                  </p>
                  <div className="flex flex-wrap justify-center gap-6">
                    <button onClick={() => { setAuthMode('register'); setIsAuthOpen(true); }} className="bg-blue-600 text-white px-14 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition shadow-2xl active:scale-95">যাত্রা শুরু করুন</button>
                    <button className="bg-white dark:bg-slate-800 text-slate-700 dark:text-white border-4 border-slate-100 dark:border-slate-700 px-12 py-6 rounded-[2.5rem] font-black text-2xl hover:bg-slate-50 transition flex items-center gap-3 shadow-xl"><Cpu size={24} /> ডেমো দেখুন</button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
                   {[ { title: "ভোট কেনা বেচার বিশ্বস্ত প্লাটফর্ম", desc: "জাহিদুল ইসলামের ভেরিফাইড সিস্টেমে আপনার ভোটের সঠিক মূল্য নিশ্চিত করুন।", icon: HandCoins, color: "blue" }, { title: "১ প্লেট কাচ্চিতেই ভোট নিশ্চিত", desc: "সেরা ডিল এবং খাবারের অফার সরাসরি আপনার দোরগোড়ায়।", icon: Utensils, color: "red" }, { title: "বিপদে পড়লে জাহিদুল ভাই আছে", desc: "যেকোনো আইনি বা রাজনৈতিক ঝামেলায় আপনার পাশে ২৪/৭ আছি আমরা।", icon: Heart, color: "indigo" } ].map((feature, i) => (
                     <div key={i} className="bg-white dark:bg-slate-800 p-12 rounded-[3rem] border border-slate-200 dark:border-slate-700 shadow-2xl hover:-translate-y-3 transition duration-500 group"><div className={`w-20 h-20 bg-${feature.color}-100 dark:bg-${feature.color}-900/30 rounded-3xl flex items-center justify-center mb-8 text-${feature.color}-600 dark:text-${feature.color}-400 group-hover:scale-110 transition duration-500`}><feature.icon size={40} /></div><h3 className="text-3xl font-black mb-4 leading-tight text-slate-800 dark:text-white">{feature.title}</h3><p className="text-slate-500 dark:text-slate-400 font-bold text-lg leading-relaxed">{feature.desc}</p></div>
                   ))}
                </div>
                <div className="flex flex-col items-center justify-center p-20 bg-white dark:bg-slate-800 rounded-[4rem] border border-slate-200 dark:border-slate-700 shadow-3xl mb-24 relative overflow-hidden text-center"><div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-100/30 rounded-full blur-3xl"></div><div className="w-28 h-28 bg-blue-600 rounded-[2rem] flex items-center justify-center mb-8 rotate-6 shadow-2xl shadow-blue-500/50"><Users className="w-14 h-14 text-white" /></div><p className="text-blue-600 text-base font-black uppercase tracking-[0.4em] mb-4">প্রকল্প প্রধান ও ডেভেলপার</p><h3 className="text-6xl font-black text-slate-800 dark:text-slate-200 tracking-tighter">জাহিদুল ইসলাম</h3></div>
                <div className="relative pt-12"><div className="absolute inset-0 bg-amber-500 blur-[140px] opacity-15 rounded-full"></div><div className="relative bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 dark:from-slate-800 dark:to-slate-900 p-1.5 rounded-[4.5rem] shadow-2xl border-4 border-white/30"><div className="bg-white dark:bg-slate-800 rounded-[4.2rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16"><div className="shrink-0 relative"><div className="w-40 h-40 md:w-56 md:h-56 bg-amber-50 dark:bg-amber-900/20 rounded-[3rem] flex items-center justify-center shadow-inner group overflow-hidden border-4 border-amber-100 dark:border-amber-900/50"><Key size={100} className="text-amber-500 group-hover:scale-125 transition duration-700" /><div className="absolute -top-6 -right-6 bg-red-600 text-white p-4 rounded-full animate-bounce shadow-2xl"><Star size={32} fill="currentColor" /></div></div></div><div className="text-center md:text-left flex-grow"><div className="inline-flex items-center gap-2 px-8 py-2.5 bg-red-600 text-white text-lg font-black rounded-full mb-8 tracking-widest uppercase shadow-xl"><Info size={20} /> {STRINGS.TRUTH_HEADER}</div><h2 className="text-4xl md:text-7xl font-black text-slate-800 dark:text-white leading-[1.1] mb-10 tracking-tight">{STRINGS.TRUTH_CONTENT}</h2><div className="flex flex-wrap justify-center md:justify-start gap-8"><button className="px-12 py-6 bg-green-600 text-white rounded-[2.5rem] font-black text-3xl hover:bg-green-700 hover:scale-110 transition shadow-2xl active:scale-95">হ্যাঁ ভোট</button><button className="px-12 py-6 bg-red-600 text-white rounded-[2.5rem] font-black text-3xl hover:bg-red-700 hover:scale-110 transition shadow-2xl active:scale-95">না ভোট</button></div></div></div></div></div>
              </div>
            } />
            <Route path="/page/:pageId" element={<GenericPage />} />
          </Routes>
        </main>
        
        <footer className="bg-white dark:bg-slate-900 border-t-2 dark:border-slate-800 pt-20 pb-12"><div className="max-w-7xl mx-auto px-4"><div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16"><div className="col-span-1 md:col-span-1"><div className="flex items-center mb-8 group"><div className="bg-blue-600 p-2 rounded-xl mr-2"><Vote className="w-7 h-7 text-white" /></div><span className="text-3xl font-black text-blue-700 dark:text-blue-400 tracking-tighter">ভোটবিক্রি</span><span className="text-3xl font-black text-amber-500 dark:text-amber-400 tracking-tighter">.com</span></div><p className="text-slate-500 dark:text-slate-400 leading-relaxed font-bold text-lg">আমরা ডিজিটাল পদ্ধতিতে ভোটারদের তথ্য ব্যবস্থাপনা এবং রাজনৈতিক প্রচারণা সহজ করতে বদ্ধপরিকর। জাহিদুল ইসলামের হাত ধরে আগামীর রাজনীতি হবে প্রযুক্তিনির্ভর।</p><div className="flex gap-4 mt-10"><a href="#" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-blue-600 hover:text-white transition shadow-sm"><Facebook size={24} /></a><a href="#" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-blue-600 hover:text-white transition shadow-sm"><Twitter size={24} /></a><a href="#" className="p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl hover:bg-blue-600 hover:text-white transition shadow-sm"><Youtube size={24} /></a></div></div><div><h4 className="text-xl font-black mb-8 flex items-center gap-2 text-slate-800 dark:text-white">কুইক লিঙ্কস</h4><ul className="space-y-5 font-bold text-lg text-slate-500 dark:text-slate-400"><li><Link to="/page/market" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> মার্কেটপ্লেস</Link></li><li><Link to="/page/rumor" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> গুজব</Link></li><li><Link to="/page/bank-loan" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> ব্যাংক লোন</Link></li><li><Link to="/page/family-card" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> ফ্যামিলি কার্ড</Link></li></ul></div><div><h4 className="text-xl font-black mb-8 text-slate-800 dark:text-white">আইনি তথ্য</h4><ul className="space-y-5 font-bold text-lg text-slate-500 dark:text-slate-400"><li><a href="#" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> প্রাইভেসি পলিসি</a></li><li><a href="#" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> ব্যবহারের শর্তাবলী</a></li><li><a href="#" className="hover:text-blue-600 transition flex items-center gap-2"><ChevronRight size={16}/> রিফান্ড পলিসি</a></li></ul></div><div className="bg-blue-50 dark:bg-blue-900/20 p-10 rounded-[3rem] border border-blue-100 dark:border-blue-800/50 shadow-inner"><h4 className="text-xl font-black mb-4 text-blue-700 dark:text-blue-400">সদস্যতা নিন</h4><p className="text-base text-blue-600 dark:text-blue-300 mb-8 font-bold leading-relaxed">নতুন খবর এবং গোপন অফার সরাসরি ইমেইলে পেতে সাবস্ক্রাইব করুন।</p><div className="flex flex-col gap-3"><input type="email" placeholder="আপনার ইমেইল..." className="bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl border-2 border-blue-100 dark:border-blue-900 outline-none focus:ring-4 focus:ring-blue-500/20 transition font-bold" /><button className="bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"><Send size={20} /> সাবস্ক্রাইব</button></div></div></div><div className="mb-16 bg-slate-50 dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 rounded-[3rem] p-10 shadow-inner relative overflow-hidden group"><div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-12 transition duration-700"><AlertTriangle size={120} /></div><div className="flex flex-col md:flex-row items-center gap-8 relative z-10"><div className="bg-blue-600 p-6 rounded-[2rem] text-white shadow-xl"><Info size={40} /></div><div className="flex-grow text-center md:text-left"><h5 className="text-2xl font-black text-slate-700 dark:text-slate-200 mb-3 uppercase tracking-widest">{STRINGS.FOOTER_NOTE_HEADER}</h5><p className="text-slate-600 dark:text-slate-400 text-xl font-bold leading-relaxed italic">{STRINGS.FOOTER_NOTE_CONTENT}</p></div></div></div><div className="pt-12 border-t-2 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8"><p className="text-slate-500 dark:text-slate-400 font-bold text-lg tracking-tight">{STRINGS.COPYRIGHT}</p><div className="flex items-center gap-6"><div className="h-1.5 w-16 bg-gradient-to-r from-transparent to-blue-600 rounded-full"></div><p className="text-blue-600 dark:text-blue-400 font-black text-3xl tracking-tighter">{STRINGS.FOOTER_TEXT}</p><div className="h-1.5 w-16 bg-gradient-to-l from-transparent to-blue-600 rounded-full"></div></div></div></div></footer>
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onSuccess={(u) => { setUser(u); setIsAuthOpen(false); }} initialMode={authMode} />
      </div>
    </Router>
  );
}
