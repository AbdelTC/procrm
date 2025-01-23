import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Registrieren</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Gib deinen Namen ein"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">E-Mail</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Gib deine E-Mail ein"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Passwort</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Gib ein Passwort ein"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Registrieren
        </button>
      </form>
    </div>
  );
};

export default Register;
