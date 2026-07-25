import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Backend endpoint might not exist in MVP, handle error state gracefully
        setStatus('error');
      }
    } catch (err) {
      // Gracefully capture endpoint failure
      setStatus('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
      
      <div className="text-center space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-accentMagenta bg-accentMagenta/15 border border-accentMagenta/30">
          <Mail className="w-3.5 h-3.5" />
          <span>Support & Communication</span>
        </span>
        <h1 className="font-headline font-extrabold text-3xl sm:text-5xl text-textHeading">
          {t('contact.title')}
        </h1>
        <p className="text-xs sm:text-sm text-textMuted max-w-lg mx-auto">
          {t('contact.subtitle')}
        </p>
      </div>

      <div className="glow-card p-6 sm:p-10 glass-panel space-y-6">
        
        {status === 'success' && (
          <div className="p-4 rounded-xl bg-accentGreen/15 border border-accentGreen text-accentGreen text-xs flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{t('contact.success')}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 rounded-xl bg-accentMagenta/15 border border-accentMagenta text-accentMagenta text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{t('contact.error')}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-textHeading block">
              {t('contact.name')}
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-xl bg-bgBase border border-border-subtle text-xs text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-accentCyan"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-textHeading block">
              {t('contact.email')}
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-bgBase border border-border-subtle text-xs text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-accentCyan"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-semibold text-textHeading block">
              {t('contact.message')}
            </label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your question, idea, or feedback..."
              className="w-full px-4 py-3 rounded-xl bg-bgBase border border-border-subtle text-xs text-textPrimary placeholder:text-textMuted/50 focus:outline-none focus:border-accentCyan resize-y"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-xl font-headline font-bold text-xs text-white bg-gradient-multiverse hover:shadow-glow-pulse active:scale-98 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>{t('contact.sending')}</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-white" />
                <span>{t('contact.send')}</span>
              </>
            )}
          </button>

        </form>

        {/* Fallback Direct Email */}
        <div className="pt-6 border-t border-border-subtle/60 text-center space-y-1 text-xs text-textMuted">
          <p>{t('contact.fallbackText')}</p>
          <a
            href="mailto:contact@yourdomain.com"
            className="font-mono font-bold text-accentCyan hover:underline"
          >
            [PLACEHOLDER: contact@yourdomain.com]
          </a>
        </div>

      </div>

    </div>
  );
};
