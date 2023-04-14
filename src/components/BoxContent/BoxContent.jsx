import doceria from '../../assets/doceria.png';
import kenziehub from '../../assets/kenziehub.png';
import devPath from '../../assets/devpath.png';

const BoxContent = () => {
  return (
    <>
      <div className='content'>
        <div className='project'>
          <img src={doceria} alt='' />
        </div>
        <a
          href='https://rikellyh.github.io/Doceria/'
          target='_blank'
          rel='noopener noreferrer'
          className='app-link'
        >
          Doceria
        </a>
        <span>(HTML, CSS e Javascript)</span>
        <div className='options-direct'>
          <a
            href='https://github.com/rikellyh/Doceria'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repositório
          </a>
          <a
            href='https://rikellyh.github.io/Doceria/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Deploy
          </a>
        </div>
      </div>
      <div className='content'>
        <div className='project'>
          <img src={kenziehub} alt='' />
        </div>
        <a
          href='https://kenzie-hub-rikellyh.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='app-link'
        >
          KenzieHub
        </a>
        <span>(React, Typescript e Styled-components)</span>
        <div className='options-direct'>
          <a
            href='https://github.com/rikellyh/kenzie-hub'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repositório
          </a>
          <a
            href='https://kenzie-hub-rikellyh.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Deploy
          </a>
        </div>
      </div>
      <div className='content'>
        <div className='project'>
          <img src={devPath} alt='' />
        </div>
        <a
          href='https://devpath-g05bmrmih-eriknegreiros.vercel.app/'
          target='_blank'
          rel='noopener noreferrer'
          className='app-link'
        >
          devPath
        </a>
        <span>(React, Typescript e Styled-components)</span>
        <div className='options-direct'>
          <a
            href='https://github.com/rikellyh/devPath'
            target='_blank'
            rel='noopener noreferrer'
          >
            Repositório
          </a>
          <a
            href='https://devpath-g05bmrmih-eriknegreiros.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Deploy
          </a>
        </div>
      </div>
    </>
  );
};

export default BoxContent;
