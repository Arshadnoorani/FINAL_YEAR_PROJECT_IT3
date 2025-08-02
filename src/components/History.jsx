import React from 'react';

const History = ({ items }) => {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-indigo-600 mb-2">Analysis History</h3>
      <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500">No analysis history found.</p>
        ) : (
          <ul className="space-y-4">
            {items.map((entry, index) => (
              <div key={index} className="p-3 border rounded-xl bg-gray-50">
                <p className="text-sm font-medium text-gray-800">{entry.date}</p>

                {/* Show prompt (user input or default) */}
                <p className="text-sm text-indigo-700 font-semibold mt-1">Prompt:</p>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{entry.prompt || 'None'}</p>

                {/* Show model response */}
                <p className="text-sm text-indigo-700 font-semibold mt-2">AI Response:</p>
                <p className="text-sm text-gray-600 whitespace-pre-wrap">{entry.answer || 'None'}</p>

                <img src={entry.imageURL} alt="Analyzed" className="w-24 mt-2 rounded-lg border" />
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;