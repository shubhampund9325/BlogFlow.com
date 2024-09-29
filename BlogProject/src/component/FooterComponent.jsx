import React from 'react'
import { Footer, FooterTitle, FooterCopyright, FooterIcon } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'
function FooterComponent() {
    return (
        <Footer container className='border border-t-8 border-teal-500'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div>
                        <Link to="/" className='self-center whitespace-nowrap text-large sm sm:text-xl font-semibold dark:text-white '>
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl">MeadiaStream</span></Link>
                    </div>
                    <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 '>
                        <div>
                            <FooterTitle title="About">About</FooterTitle>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://react-project-4givriwln-shubham-punds-projects.vercel.app"
                                    target='_blank' rel='noopener noreferrer'>
                                    Other Project
                                </Footer.Link>
                                <Footer.Link href="https://react-project-4givriwln-shubham-punds-projects.vercel.app"
                                    target='_blank' rel='noopener noreferrer'>
                                    Other Project
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <FooterTitle title="Follow Us">Follow Us</FooterTitle>
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://react-project-4givriwln-shubham-punds-projects.vercel.app"
                                    target='_blank' rel='noopener noreferrer'>
                                    Pravicy & Policy
                                </Footer.Link>
                                <Footer.Link href="https://react-project-4givriwln-shubham-punds-projects.vercel.app"
                                    target='_blank' rel='noopener noreferrer'>
                                    Terms and conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>

                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between ">
                    <FooterCopyright href="#" by="MediaStream" year={new Date().getFullYear()} />
                </div>
                <div>

                </div>
                <div className='flex sm:mt-0  mt-4 sm:justify-center gap-5'>
                    <FooterIcon href="#" icon={BsFacebook} />
                    <FooterIcon href="#" icon={BsInstagram} />
                    <FooterIcon href="#" icon={BsTwitter} />
                    <FooterIcon href="#" icon={BsGithub} />
                </div>
                <div>

                </div>


            </div>
        </Footer>
    )
}

export default FooterComponent
