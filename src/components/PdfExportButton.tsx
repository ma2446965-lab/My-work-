import React, { useState, useRef } from 'react';
import { Download, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { AssessmentResult } from '../data/scoringEngine';
import { FIELD_DISPLAY_NAMES } from '../data/earningData';
import { APP_NAME } from '../constants/brand';

interface PdfExportButtonProps {
  result: AssessmentResult;
}

export const PdfExportButton: React.FC<PdfExportButtonProps> = ({ result }) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const pdfContainerRef = useRef<HTMLDivElement>(null);

  const isRtl = i18n.dir() === 'rtl';
  const currentLang = i18n.language === 'ar' ? 'ar' : 'en';

  const generatePdf = async () => {
    if (!pdfContainerRef.current) return;
    setLoading(true);

    try {
      // Temporarily reveal container off-screen
      const element = pdfContainerRef.current;
      element.style.display = 'block';

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF',
      });

      element.style.display = 'none';

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * pdfWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save(`${APP_NAME}_Career_Roadmap_${result.primaryField}.pdf`);
    } catch (err) {
      console.error('Failed to generate PDF', err);
    } finally {
      setLoading(false);
    }
  };

  const { resultNode, estimatedWeeks, earningTier } = result;

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={generatePdf}
        disabled={loading}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-headline font-bold text-sm text-white bg-gradient-multiverse hover:shadow-glow-pulse hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin text-white" />
        ) : (
          <Download className="w-4 h-4 text-white" />
        )}
        <span>{t('results.downloadPdf')}</span>
      </button>

      {/* Hidden Light-Mode High-Contrast Print Template */}
      <div
        ref={pdfContainerRef}
        style={{ display: 'none', width: '800px' }}
        dir={isRtl ? 'rtl' : 'ltr'}
        className="bg-white text-gray-900 font-sans p-10 space-y-6"
      >
        {/* PDF Header */}
        <div className="border-b-2 border-pink-500 pb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {APP_NAME} — Career Assessment Report
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Generated on {new Date().toLocaleDateString()} | Personalized Client-Side Strategy
            </p>
          </div>
          <div className="text-right rtl:text-left font-mono text-xs text-pink-600 font-bold uppercase">
            {result.entryLevel} Level
          </div>
        </div>

        {/* Primary Field & Skill */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="text-xs font-bold text-pink-600 uppercase tracking-wide">
            Primary Trajectory Domain
          </div>
          <h2 className="text-xl font-extrabold text-gray-900 mt-1">
            {FIELD_DISPLAY_NAMES[result.primaryField][currentLang]}
          </h2>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <span className="text-xs font-semibold text-gray-500">Recommended Next Skill:</span>
            <div className="text-lg font-bold text-cyan-700">
              {currentLang === 'ar' ? resultNode.skillNameAr : resultNode.skillNameEn}
            </div>
          </div>
        </div>

        {/* Why this skill */}
        <div className="space-y-2">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1">
            Strategic Focus Rationale
          </h3>
          <p className="text-xs text-gray-700 leading-relaxed">
            {currentLang === 'ar' ? resultNode.whyThisSkillAr : resultNode.whyThisSkillEn}
          </p>
        </div>

        {/* Timeline & First Step */}
        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div>
            <div className="text-xs font-semibold text-gray-500">Estimated Timeline</div>
            <div className="text-sm font-bold text-gray-900 mt-1">
              {estimatedWeeks.min} – {estimatedWeeks.max} Weeks (~{resultNode.baseHoursRequired} hrs)
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-500">Immediate First Step</div>
            <div className="text-xs font-bold text-pink-600 mt-1">
              {currentLang === 'ar' ? resultNode.firstStepAr : resultNode.firstStepEn}
            </div>
          </div>
        </div>

        {/* Full Roadmap Phases */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1">
            Full Step-by-Step Learning Roadmap
          </h3>
          <div className="space-y-3">
            {resultNode.roadmap.map((phase) => (
              <div
                key={phase.phaseNumber}
                className="p-3 bg-gray-50 rounded border border-gray-200 space-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-pink-600">
                    Phase {phase.phaseNumber}: {currentLang === 'ar' ? phase.titleAr : phase.titleEn}
                  </span>
                  <span className="text-[10px] font-mono bg-gray-200 text-gray-700 px-2 py-0.5 rounded">
                    ~{phase.estimatedHours} hrs
                  </span>
                </div>
                <p className="text-xs text-gray-700">
                  <strong className="text-gray-900">Outcome:</strong>{' '}
                  {currentLang === 'ar' ? phase.outcomeAr : phase.outcomeEn}
                </p>
                <div className="text-[11px] text-gray-600 pt-1">
                  <strong className="text-gray-800">Free Resources:</strong>{' '}
                  {phase.resources.map(r => r.name).join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Earning Potential Table */}
        <div className="space-y-2 pt-2">
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider border-b border-gray-200 pb-1">
            Global Remote & Freelance Earning Potential
          </h3>
          <table className="w-full text-xs text-left rtl:text-right border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 font-bold">
              <tr>
                <th className="p-2 border-b">Experience Level</th>
                <th className="p-2 border-b">Monthly Earning (USD)</th>
                <th className="p-2 border-b">Hourly Rate (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2 font-medium">Selected ({result.answers.partC.overallExperience} yrs exp)</td>
                <td className="p-2 font-bold text-green-700">{earningTier.monthly}</td>
                <td className="p-2 font-bold text-cyan-700">{earningTier.hourly}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[10px] text-gray-500 italic">
            Estimates based on global freelance market benchmarks.
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 pt-4 text-center text-[10px] text-gray-400">
          {APP_NAME} — Client-Side Career Assessment Engine. Confidential & Personal Use Only.
        </div>
      </div>
    </div>
  );
};
