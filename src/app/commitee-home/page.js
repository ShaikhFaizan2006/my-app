'use client'
import React, { useState } from 'react';
import { FileText, Calendar, AlertCircle, LogOut, HelpCircle, ChevronDown, FileImage, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LipiBookDashboard = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [reportTitle, setReportTitle] = useState('');
  const [reportDescription, setReportDescription] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [selectedLocation, setSelectedLocation] = useState('Pune, Maharashtra');
  const [showPeriodDropdown, setShowPeriodDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const periods = ['This Month', 'Last Month', 'This Quarter', 'This Year'];
  const locations = ['Pune, Maharashtra', 'Mumbai, Maharashtra', 'Delhi', 'Bangalore, Karnataka'];

  // Report submission handler
  const handleReport = () => {
    if (reportTitle && reportDescription) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setReportTitle('');
        setReportDescription('');
      }, 5000);
    }
  };

  const router = useRouter();

  const handlelogout = () => {
    router.push('/commitee-login');
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5E6D3' }}>
      {/* Success Notification */}
     {showSuccess && (
  <div className="fixed top-30 right-6 bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg z-50">
    <CheckCircle className="w-5 h-5 text-white" />
    <span>Report submitted successfully!</span>
  </div>
)}



      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-[#F5E6D3] border-b border-[#d4c4b0] flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-4">
          <Image
            src="/images/rgstc.png"
            alt="RGSTC Logo"
            width={50}
            height={50}
            className="w-12 h-12 sm:w-14 sm:h-14"
          />
        </div>
        <h1 className="flex-1 text-center text-black text-lg sm:text-xl lg:text-2xl font-bold px-2 sm:px-4">
          RGSTC MUMBAI IN COLLABORATION WITH VIT, PUNE
        </h1>
        <Image
          src="/images/VIT.png"
          alt="VIT Logo"
          width={50}
          height={50}
          className="w-12 h-12 sm:w-14 sm:h-14"
        />
      </header>

      <div className="flex flex-col lg:flex-row flex-1">
        {/* Sidebar */}
        <aside className="w-full lg:w-56 xl:w-64 p-4 lg:p-6" style={{ backgroundColor: '#F5E6D3' }}>
          <div className="mb-8 flex justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="inline-block">
                <div className="flex justify-center items-center mb-8">
                  {/* Logo */}
                  <div className="text-center mb-4 sm:mb-6">
                    <Image
                      src="/images/lipibook.png"
                      alt="LipiBook Logo"
                      width={120}
                      height={100}
                      className="mx-auto w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('summary')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm sm:text-base ${activeTab === 'summary' ? 'font-semibold' : ''}`}
              style={{ color: '#000000' }}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>T - Summary</span>
            </button>

            <button
              onClick={() => setActiveTab('updates')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm sm:text-base ${activeTab === 'updates' ? 'font-semibold' : ''}`}
              style={{ color: '#000000' }}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Updates</span>
            </button>

            <button
              onClick={() => setActiveTab('report')}
              className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm sm:text-base ${activeTab === 'report' ? 'font-semibold' : ''}`}
              style={{ color: '#000000' }}
            >
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Report</span>
            </button>

            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm sm:text-base" style={{ color: '#000000' }}>
              <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
              <span onClick={handlelogout}>Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8" style={{ backgroundColor: '#E8D5BA' }}>
          {/* Summary Tab */}
          {activeTab === 'summary' && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal">T - Summary</h2>
                <button className="bg-black text-white px-4 sm:px-6 py-2 text-sm sm:text-base w-full sm:w-auto">
                  Download Summary
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {/* Total Transactions */}
                <div className="rounded-lg p-4 relative" style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}>
                  <h3 className="text-base font-bold mb-2">Total Transactions</h3>

                  {/* Period Dropdown */}
                  <div className="relative mb-1">
                    <button
                      onClick={() => {
                        setShowPeriodDropdown(!showPeriodDropdown);
                        setShowLocationDropdown(false);
                      }}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <span className="text-xs">{selectedPeriod}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showPeriodDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-[150px]">
                        {periods.map((period) => (
                          <button
                            key={period}
                            onClick={() => {
                              setSelectedPeriod(period);
                              setShowPeriodDropdown(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100 transition-colors"
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Location Dropdown */}
                  <div className="relative mb-4">
                    <button
                      onClick={() => {
                        setShowLocationDropdown(!showLocationDropdown);
                        setShowPeriodDropdown(false);
                      }}
                      className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                    >
                      <span className="text-xs">{selectedLocation}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {showLocationDropdown && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 min-w-[180px]">
                        {locations.map((location) => (
                          <button
                            key={location}
                            onClick={() => {
                              setSelectedLocation(location);
                              setShowLocationDropdown(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-xs hover:bg-gray-100 transition-colors"
                          >
                            {location}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="text-4xl font-normal text-right">200</div>
                </div>

                {/* Total MODISCRIPT DOCX */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}>
                  <h3 className="text-base font-bold mb-8">Total MODISCRIPT DOCX</h3>
                  <div className="text-4xl font-normal text-right">2.5L</div>
                </div>

                {/* Payment Amount */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}>
                  <h3 className="text-base font-bold mb-8">Payment Amount</h3>
                  <div className="text-3xl font-normal text-right">₹90000</div>
                </div>

                {/* Other Region Access */}
                <div className="rounded-lg p-4" style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}>
                  <h3 className="text-base font-bold mb-8">Other Region Access</h3>
                  <div className="text-2xl font-normal text-right">UK, Nepal</div>
                </div>
              </div>
            </div>
          )}

          {/* Updates Tab */}
          {activeTab === 'updates' && (
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-12 text-center">Updates</h2>
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <div className="mb-6">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" fill="none" stroke="#8B6F47" strokeWidth="2">
                    <rect x="20" y="15" width="60" height="70" rx="3" />
                    <path d="M35 40 L45 50 L65 30" />
                    <circle cx="35" cy="60" r="3" fill="#8B6F47" />
                    <circle cx="50" cy="60" r="3" fill="#8B6F47" />
                    <circle cx="65" cy="60" r="3" fill="#8B6F47" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-normal text-center">
                  Upcoming feature updates Event Posters
                </h3>
              </div>
            </div>
          )}

          {/* Report Tab */}
          {activeTab === 'report' && (
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal mb-8 text-center">Report</h2>
              <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                  <label className="block text-base sm:text-lg font-normal mb-2">
                    Title of the Report
                  </label>
                  <input
                    type="text"
                    value={reportTitle}
                    onChange={(e) => setReportTitle(e.target.value)}
                    className="w-full px-4 py-3 text-sm sm:text-base outline-none"
                    style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-base sm:text-lg font-normal mb-2">
                    Describe issue/any idea
                  </label>
                  <textarea
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    rows="8"
                    className="w-full px-4 py-3 resize-none text-sm sm:text-base outline-none"
                    style={{ backgroundColor: '#F5E6D3', border: '1px solid #D4A574' }}
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="bg-black text-white px-8 sm:px-12 py-2.5 sm:py-3 text-base sm:text-lg"
                    onClick={handleReport}
                  >
                    Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-[#e8d7c3] px-3 py-3 border-t border-[#d4c4b0] flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-6 h-6"></div>
          <p className="text-[#2c1810] text-xs sm:text-sm md:text-base text-center flex-1">
            भारत इतिहास संशोधक मंडळ, पुणे | LipiBook
          </p>
          <button className="text-[#5c3d2e] hover:text-[#8b4513] transition-colors duration-200">
            <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default LipiBookDashboard;
