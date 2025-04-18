interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div className='mx-14 flex max-w-5xl flex-col space-y-6 text-center text-white'>
      <h3 className='font-julius text-3xl'>{props.title}</h3>
      <div className='font-vietnam text-lg'>{props.subtitle}</div>
    </div>
  );
};

export default SectionHeader;
