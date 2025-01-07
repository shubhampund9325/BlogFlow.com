// import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react'
// import React, { useState, useNavi } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import OAuth from '../component/OAuth';

// function SignUp() {
//     const [formData, setFormData] = useState({})
//     const [errorMessage, setErrorMessage] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();


//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // this is for preventing from refreshing page  when you submit form
//         if (!formData.username || !formData.email || !formData.password) {
//             return setErrorMessage('Please fill out all fields.');
//         }
//         try {
//             setLoading(true);
//             setErrorMessage(null);
//             const res = await fetch('/api/auth/signup', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(formData),
//             });
//             const data = await res.json();
//             if (data.success === false) {
//                 return setErrorMessage(data.message);
//             }
//             setLoading(false);
//             if (res.ok) {
//                 return navigate('/sign-in')
//             }
//         }


//         catch (error) {
//             setErrorMessage(error.message)
//         }
//     }
//     return (
//         <div className="min-h-screen mt-20">
//             <div className="flex p-3 max-w-3xl mx-auto  flex-col md:flex md:flex-row md:items-center gap-5">
//                 {/* leftside*/}
//                 <div className="flex-1 ">
//                     <Link to="/" className='   font-bold dark:text-white '>
//                         <span class="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl rounded">MeadiaStream</span></Link>
//                     <p className='text-sm mt-5'> This is Demo of Blogging Website project</p>
//                 </div>
//                 {/* rightside*/}
//                 <div className='flex-1'>
//                     <form className='flex flex-col gap-4' onSubmit={handleSubmit} >
//                         <div>
//                             <Label value='Your username' />
//                             <TextInput onChange={handleChange}
//                                 type='text'
//                                 placeholder='Username'
//                                 id='username'
//                             />
//                         </div>
//                         <div>
//                             <Label value='Your email' />
//                             <TextInput onChange={handleChange}
//                                 type='email'
//                                 placeholder='name@xyz.gmail.com'
//                                 id='email'
//                             />
//                         </div>
//                         <div>
//                             <Label value='Your password' />
//                             <TextInput onChange={handleChange}
//                                 type='password'
//                                 placeholder='Password'
//                                 id='password'
//                             />
//                         </div>
//                         <div className=' '>
//                             <Button type='submit' gradientDuoTone='purpleToPink' className='w-full' disabled={loading}>
//                                 {
//                                     loading ? (
//                                         <><Spinner size='sm' /><span className='pl-3'>Loading...</span></>
//                                     ) : 'Sign-up'
//                                 }
//                             </Button>
                           

//                         </div>
//                         <div>
//                         <OAuth/>
//                         </div>



//                     </form>
//                     <div className='flex gap-2 text-sm mt-5'>
//                         <span>Have an account? </span>
//                         <Link to='/sign-in' className='text-blue-500'>
//                             Sign in </Link>
//                     </div>
//                     {
//                         errorMessage && (
//                             <Alert className='mt-5' color='failure'>
//                                 Please fill out all fields.
//                             </Alert>
//                         )
//                     }
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default SignUp
import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../component/OAuth';

function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent refreshing page when submitting form
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessage(null); // Clear previous errors
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        return navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); // Ensure loading is reset
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className='font-bold dark:text-white'>
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-4xl rounded">MediaStream</span>
          </Link>
          <p className='text-sm mt-5'>This is a Demo of a Blogging Website project.</p>
        </div>
        {/* Right side */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Your username' />
              <TextInput onChange={handleChange} type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='Your email' />
              <TextInput onChange={handleChange} type='email' placeholder='name@xyz.gmail.com' id='email' />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput onChange={handleChange} type='password' placeholder='Password' id='password' />
            </div>
            <div>
              <Button type='submit' gradientDuoTone='purpleToPink' className='w-full' disabled={loading}>
                {loading ? (
                  <><Spinner size='sm' /><span className='pl-3'>Loading...</span></>
                ) : 'Sign-up'}
              </Button>
            </div>
            <div>
              <OAuth />
            </div>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account? </span>
            <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;