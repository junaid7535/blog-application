import React from 'react'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('')

    const handle = (e) => {
        e.preventDefault();
    }
  return (
    <div className='flex items-center justify-center h-screen'>

        <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>

        <div className='flex flex-col items-center justify-center'>

            <div className='w-full py-6 text-center'>

                <h1 className='text-3xl font-bold'><span className='text-primary'>Admin</span>
                Login
                </h1>

                <p className='font-light'> Enter your credentials to access the admin panel</p>
            </div>

                <form onSubmit={handle} className='mt-6 w-full sm:max-w-md text-gray-600'>
                    <div>
                        <label>Email</label>
                        <input onChange={() => setEmail(e.target.value)} value={email} type="email" reqired placeholder='your email id'
                        className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>

                    <div>
                        <label>Password</label>
                        <input onChange={() => setPassword(e.target.value)} value={password} type="password" reqired placeholder='your password'
                        className='border-b-2 border-gray-300 p-2 outline-none mb-6'/>
                    </div>

                    <button type='Submit' className='w-full py-3 font-medium bg-blue-300 cursor-pointer rounded '>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
