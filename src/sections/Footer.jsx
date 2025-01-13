const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300">
      <div className="flex gap-2 text-white-500">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/tchak101"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://x.com/TathagataChak16"
          target="_blank"
          rel="noopener noreferrer">
          
         <div className="social-icon">
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div> 
        </a>
          <a href="https://www.linkedin.com/in/tathagata-chakraborty-1353051b4/"
          target="_blank"
          rel="noopener noreferrer">
          <div className="social-icon">
            <img src="/assets/icons8-linkedin-100.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </div>
          </a>
      </div>

      <p className="text-white-500">
        © 2025 Tathagata Chakraborty. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
