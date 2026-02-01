
import React, { useState } from 'react';
import { X, Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import { STRINGS } from '../constants';
import { Option, Poll } from '../types';

interface CreatePollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (poll: Omit<Poll, 'id' | 'createdAt' | 'voters' | 'authorId' | 'authorName'>) => void;
}

const CreatePollModal: React.FC<CreatePollModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [options, setOptions] = useState<{ text: string; imageUrl: string }[]>([
    { text: '', imageUrl: '' },
    { text: '', imageUrl: '' }
  ]);

  if (!isOpen) return null;

  const handleAddOption = () => {
    setOptions([...options, { text: '', imageUrl: '' }]);
  };

  const handleRemoveOption = (index: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== index));
    }
  };

  const handleOptionChange = (index: number, field: 'text' | 'imageUrl', value: string) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || options.some(o => !o.text)) return;

    const formattedOptions: Option[] = options.map((o, idx) => ({
      id: `opt-${idx}-${Date.now()}`,
      text: o.text,
      votes: 0,
      imageUrl: o.imageUrl || undefined
    }));

    onSubmit({
      title,
      description,
      options: formattedOptions
    });
    
    // Reset form
    setTitle('');
    setDescription('');
    setOptions([{ text: '', imageUrl: '' }, { text: '', imageUrl: '' }]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-800">{STRINGS.CREATE_POLL_TITLE}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition">
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">{STRINGS.POLL_TITLE_LABEL}</label>
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="যেমন: বাংলাদেশের প্রিয় খাবার কোনটি?"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">{STRINGS.POLL_DESC_LABEL}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="পোল সম্পর্কে কিছু তথ্য দিন..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-24"
            />
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold text-slate-700">{STRINGS.POLL_OPTION_LABEL}</label>
            {options.map((option, index) => (
              <div key={index} className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex gap-2">
                  <input
                    required
                    type="text"
                    value={option.text}
                    onChange={(e) => handleOptionChange(index, 'text', e.target.value)}
                    placeholder={`${STRINGS.POLL_OPTION_LABEL} ${index + 1}`}
                    className="flex-grow px-4 py-2 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {options.length > 2 && (
                    <button 
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={option.imageUrl}
                    onChange={(e) => handleOptionChange(index, 'imageUrl', e.target.value)}
                    placeholder={STRINGS.IMAGE_URL_LABEL}
                    className="flex-grow text-xs px-3 py-1.5 rounded-lg border border-slate-200 outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={handleAddOption}
              className="w-full py-3 border-2 border-dashed border-blue-200 text-blue-600 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-50 transition"
            >
              <Plus className="w-5 h-5" />
              {STRINGS.ADD_OPTION}
            </button>
          </div>
        </form>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 transition"
          >
            {STRINGS.CLOSE}
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-[2] py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200 transition"
          >
            {STRINGS.NAV_CREATE}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePollModal;
