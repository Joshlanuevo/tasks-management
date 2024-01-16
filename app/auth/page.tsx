const AuthPage = () => {
  return (
    <div className="container mx-auto pt-40">
      <h1 className="text-center text-2xl font-bold mb-8">Welcome to Authentication</h1>
      <form className="w-full max-w-sm mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
          <input
            type="text"
            id="username"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-black text-white px-3 py-2 rounded-md">Sign Up</button>
      </form>
    </div>
  );
};

export default AuthPage;
