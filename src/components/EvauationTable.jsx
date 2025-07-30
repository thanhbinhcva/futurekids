import React, { useState } from "react";

const EvaluationTable = ({ students, evaluations, onChange, onClick, allFields, criteria }) => {

  return (
    <div className="overflow-auto px-4 py-6 bg-white rounded-2xl shadow-xl border border-cyan-200">
      <table className="w-full text-center text-sm md:text-base border-collapse">
        <thead>
          <tr className="bg-cyan-500 text-white text-sm">
            <th rowSpan={2} className="p-3 min-w-[150px] border border-white rounded-tl-xl">
              👧 Học sinh
            </th>
            {criteria.map((crit, index) => (
              <th
                key={index}
                colSpan={crit.fields.length}
                rowSpan={crit.fields.length === 1 ? 2 : 1}
                className="p-3 min-w-[180px] border border-white"
              >
                {crit.label}
              </th>
            ))}
          </tr>
          <tr className="bg-cyan-400 text-white text-sm">
            {criteria.map((crit) =>
              crit.fields.length > 1
                ? crit.fields.map((field, subIndex) => (
                    <th key={field + subIndex} className="p-2 border border-white">
                      {field}
                    </th>
                  ))
                : null
            )}
          </tr>
        </thead>

      <tbody>
        {students.map((student, sIndex) => (
          <tr key={student.id || sIndex} className={sIndex % 2 === 0 ? "bg-cyan-50" : "bg-white"}>
            <td className="border border-cyan-200 p-3 font-semibold text-cyan-700">
              {student.name}
            </td>
            {allFields.map((field, fIndex) => (
              <td key={fIndex} className="border border-cyan-100 p-2">
                <textarea
                  rows={3}
                  className="w-full text-sm border border-cyan-200 rounded-xl p-2 resize-none focus:outline-cyan-500"
                  value={evaluations[sIndex]?.[field] ?? ""}
                  onChange={(e) => onChange(sIndex, field, e.target.value)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>

      </table>

      <div className="mt-6 text-center">
        <button
          onClick={onClick}
          className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-cyan-600 transition"
        >
          💾 Lưu đánh giá
        </button>
      </div>
    </div>
  );
};

export default EvaluationTable;
