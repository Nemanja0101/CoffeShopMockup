export default function EmployeeCard({ employee }) {
  const { name, role, image, bio, specialty } = employee;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
      {/* Circular background for employee image */}
      <div className="w-24 h-24 rounded-full bg-choco-100 flex items-center justify-center overflow-hidden border-2 border-choco-200">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-choco-400">☕</span>
        )}
      </div>

      {/* Employee name */}
      <h3 className="font-semibold text-lg text-center leading-snug">{name}</h3>

      {/* Role */}
      <span className="bg-choco-500 text-choco-50 text-xs font-semibold px-3 py-1 rounded-full">
        {role}
      </span>

      {/* Specialty */}
      {specialty && (
        <p className="text-choco-600 text-sm text-center">{specialty}</p>
      )}

      {/* Bio */}
      {bio && (
        <p className="text-choco-700 text-sm text-center leading-relaxed">
          {bio}
        </p>
      )}
    </div>
  );
}
