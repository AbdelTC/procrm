import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Login</h2>
      <form className="mt-4">
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
            placeholder="Gib dein Passwort ein"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Anmelden
        </button>
      </form>
    </div>
  );
};

export default Login;
