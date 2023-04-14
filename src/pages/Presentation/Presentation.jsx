import avatar from '../../assets/avatar.png';
import '../../styles/components/presentation.sass';

const SectionPresentation = () => {
  return (
    <section id='#'>
      <h1>Oi,</h1>
      <h2>me chamo Rikelly</h2>
      <span className='dashed-text'>
        <s>mas pode me chamar de Kelly</s>
      </span>
      <div className='avatar-contact'>
        <img src={avatar} alt='' />
        <span>Desenvolvedora Web Fullstack</span>
        <div>
          <a
            href='https://wa.me/5581992889681'
            target='_blank'
            rel='noopener noreferrer'
          >
            Fale comigo
          </a>
          <a className='about' href='#aboutme'>
            Quem sou eu
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionPresentation;
