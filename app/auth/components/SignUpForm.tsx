// SignUpForm.tsx
// import { useForm } from 'react-hook-form';

const SignUpForm: React.FC = () => {
//   const { register, handleSubmit } = useForm();

  return (
    <form> {/* onSubmit={handleSubmit(() => {})} */}
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">Username</label>
        <input type="text" id="username" className="w-full px-3 py-2 border rounded-md" /> {/* {...register('username')} */}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 border rounded-md" /> {/* {...register('email')} */}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">Password</label>
        <input type="password" id="password" className="w-full px-3 py-2 border rounded-md" /> {/* {...register('password')} */}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
