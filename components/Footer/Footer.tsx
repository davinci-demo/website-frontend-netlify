import { FaXTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className='flex flex-col'>
      <hr className='border-1 border-neutral-700' />
      <div className='flex flex-row justify-between p-5 text-white'>
        <div className='flex flex-col pr-4'>
          <h5 className='font-julius text-lg font-bold'>DA VINCI INSTITUTE</h5>
          <span className='text-md font-vietnam text-neutral-400'>
            © 2021 Da Vinci Institute of Arts, Sciences, and Humanities
          </span>
          <span className='text-md font-vietnam text-neutral-400'>
            <a
              href='#'
              className='underline underline-offset-2  hover:text-white'
            >
              501 (c) (3)
            </a>
          </span>
        </div>

        <div className='flex flex-col space-y-2 pl-4 text-right'>
          <h5 className='font-julius text-lg font-bold'>FOLLOW US</h5>
          <ul className='flex flex-row space-x-3 text-3xl'>
            <li>
              <a href='#'>
                <FaXTwitter className='fill-neutral-400 hover:fill-white' />
                <span className='invisible text-[0rem]'>X / Twitter</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaLinkedin className='fill-neutral-400 hover:fill-white' />
                <span className='invisible text-[0rem]'>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <FaFacebook className='fill-neutral-400 hover:fill-white' />
                <span className='invisible text-[0rem]'>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
