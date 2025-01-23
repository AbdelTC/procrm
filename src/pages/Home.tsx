import React, { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import JobForm from '../components/JobForm';
import { ClipLoader } from 'react-spinners';

type Job = {
  id: number;
  title: string;
  location: string;
  company: string;
};

const Home: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const showMessage = (msg: string) => {
    setMessage(msg);
  };

  // Erfolgsmeldung automatisch zurücksetzen
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(null), 3000); // Nachricht nach 3 Sekunden entfernen
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Daten aus der API abrufen
  useEffect(() => {
    setLoading(true);
    fetch('http://192.168.178.82:5000/api/jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fehler beim Abrufen der Daten:', err.message);
        setError('Fehler beim Laden der Jobs.');
        setLoading(false);
      });
  }, []);

  const addJob = (job: { title: string; location: string; company: string }) => {
    fetch('http://192.168.178.82:5000/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((newJob) => {
        setJobs((prev) => [...prev, newJob]);
        showMessage('Job erfolgreich hinzugefügt!');
      })
      .catch((err) => console.error('Fehler beim Hinzufügen des Jobs:', err.message));
  };

  const editJob = (job: Job) => {
    fetch(`http://192.168.178.82:5000/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((updatedJob) => {
        setJobs((prev) =>
          prev.map((j) => (j.id === updatedJob.id ? updatedJob : j))
        );
        setEditingJob(null);
        showMessage('Job erfolgreich bearbeitet!');
      })
      .catch((err) =>
        console.error('Fehler beim Bearbeiten des Jobs:', err.message)
      );
  };

  const deleteJob = (id: number) => {
    fetch(`http://192.168.178.82:5000/api/jobs/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => {
        setJobs((prev) => prev.filter((job) => job.id !== id));
        showMessage('Job erfolgreich gelöscht!');
      })
      .catch((err) => console.error('Fehler beim Löschen des Jobs:', err.message));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#0B0B0B" size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="text-center mt-8 text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {message && (
          <div className="bg-green-200 text-green-800 p-4 mb-4 rounded">
            {message}
          </div>
        )}
        <h1 className="text-2xl font-bold text-primary text-center">Job Management</h1>
        {editingJob ? (
          <JobForm onSubmit={editJob} initialData={editingJob} />
        ) : (
          <>
            <JobForm onSubmit={addJob} />
            <hr className="my-6 border-gray-200" />
            {jobs.length === 0 ? (
              <p className="text-secondary text-center">Keine Jobs gefunden.</p>
            ) : (
              <JobList jobs={jobs} onEdit={setEditingJob} onDelete={deleteJob} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
