import { useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'member 1',
      role: 'role 1',
      department: 'department 1',
      image: '/api/placeholder/400/400',
      bio: 'bio of member 1'
    },
    {
        id: 2,
        name: 'member 2',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 2'
    },
    {
        id: 3,
        name: 'member 3',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 3'
    },
    {
        id: 4,
        name: 'member 4',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 4'
    },
    {
        id: 5,
        name: 'member 5',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 5'
    },
    {
        id: 6,
        name: 'member 6',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 6'
    },
    {
        id: 7,
        name: 'member 7',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 7'
    },
    {
        id: 8,
        name: 'member 8',
        role: 'role 1',
        department: 'department 1',
        image: '/api/placeholder/400/400',
        bio: 'bio of member 8'
    },
  ];

  const departments = ['All', ...new Set(teamMembers.map(member => member.department))];

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.bio.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || member.department === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the dedicated legal professionals of Namada and Co Advocates who work tirelessly to serve our clients with excellence and integrity.
          </p>
        </div>
      </div>

      {/* Search and filter section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search team members..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="relative w-full md:w-1/4">
            <button
              className="w-full flex items-center justify-between py-2 px-4 border border-gray-300 rounded-lg bg-white"
              onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
            >
              <span>{selectedDepartment} Department</span>
              <ChevronDown size={18} />
            </button>
            
            {showDepartmentDropdown && (
              <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    className="block w-full text-left px-4 py-2 hover:bg-indigo-50"
                    onClick={() => {
                      setSelectedDepartment(dept);
                      setShowDepartmentDropdown(false);
                    }}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Team members grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-1 text-sm font-medium text-indigo-600">{member.department}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-500">No team members found matching your search criteria.</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedDepartment('All');
              }}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Values section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every case we handle, putting our clients' needs at the forefront of everything we do.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Integrity</h3>
              <p className="text-gray-600">Our practice is built on honesty, ethical conduct, and maintaining the highest standards of professional integrity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-indigo-800 mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace innovative approaches to legal challenges, finding creative solutions that serve our clients' best interests.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}