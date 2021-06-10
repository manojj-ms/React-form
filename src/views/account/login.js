import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'


const Login = (props) => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const onSubmit = (values) => {
        const body = {
            email: values.email.toLowerCase(),
            password: values.password,
        };
        axios.post(`https://reqres.in/api/login`, body)
            .then(res => {
                console.log(res);
                console.log(res.data);
                {/*console.log(values);*/ }
                history.push('/dashboard');
            })

    }

    return (
        <div>
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign in
                        </h1>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email"
                                    {...register('email', { required: true })}
                                />
                            </div>
                            <div class="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password"
                                    {...register('password', { required: true })}
                                />
                            </div>
                            <div class="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a href="#" className="hover:underline">Forgot password?</a>
                        </div>
                        <div className="text-center mt-12">
                            <span>
                                Don't have an account?
                        </span>
                            <a href="#" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800"><Link to='/register'>Create One</Link></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default (Login);
