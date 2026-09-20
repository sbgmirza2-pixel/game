export default function DownloadSection({ data }) {
  return (
    <section id="download" className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#81755D]/30 text-center">
        <h2 className="text-2xl font-bold text-[#635041] mb-2">Download Train 45</h2>
        <p className="text-gray-600 text-sm mb-6">
          Get the safe and official build directly to your system.
        </p>

        {/* System Requirements Box */}
        <div id="requirements" className="bg-[#F9F8F6] p-4 rounded-xl text-left mb-6 max-w-xl mx-auto">
          <h4 className="text-sm font-bold text-[#81755D] uppercase tracking-wider mb-2">
            System Requirements
          </h4>
          <ul className="text-xs md:text-sm space-y-1 text-gray-700">
            {data.requirements.map((req, i) => (
              <li key={i} className="flex justify-between">
                <span>{req.label}:</span>
                <span className="font-medium text-[#635041]">{req.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <button className="bg-[#635041] hover:bg-[#81755D] text-white text-lg font-semibold px-10 py-4 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5">
          Download APK Now ({data.size})
        </button>
      </div>
    </section>
  );
}