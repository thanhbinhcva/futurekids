export default function StatusTimeline({ statuses }) {
  return (
    <ul className="border-l-4 border-blue-600 pl-4 space-y-4">
      {statuses.map((s, index) => (
        <li key={index} className="relative">
          <div className="absolute -left-5 top-1 w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="text-sm text-gray-600">{s.time}</div>
          <div className="font-medium text-gray-900">{s.status}</div>
        </li>
      ))}
    </ul>
  );
}
