import React, { useState } from 'react';

type Props = {
  onSubmit: (job: { title: string; location: string; company: string }) => void;
  initialData?: { title: string; location: string; company: string };
};

const JobForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Job>({
    id: initialData?.id || 0,
    title: initialData?.title || '',
    location: initialData?.location || '',
    company: initialData?.company || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-2xl font-semibold text-secondary">
        {initialData ? 'Job bearbeiten' : 'Neuen Job hinzufügen'}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Titel</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Standort</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Firma</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
      >
        {initialData ? 'Änderungen speichern' : 'Hinzufügen'}
      </button>
    </form>
  );
};
  

export default JobForm;
