import React from 'react';

type Job = {
  id: number;
  title: string;
  location: string;
  company: string;
};

type Props = {
  jobs: Job[];
  onEdit: (job: Job) => void;
  onDelete: (id: number) => void;
};

const JobList: React.FC<Props> = ({ jobs, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Jobanzeigen</h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <li
            key={job.id}
            className="border rounded-lg shadow-sm bg-gray-100 p-4 flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
              <p className="text-gray-600">Standort: {job.location}</p>
              <p className="text-gray-600">Firma: {job.company}</p>
            </div>
            <div>
              <button
  className="bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 rounded-md mr-2"
  onClick={() => onEdit(job)}
>
  Bearbeiten
</button>
<button
  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
  onClick={() => onDelete(job.id)}
>
  Löschen
</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};




export default JobList;

