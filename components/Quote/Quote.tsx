interface QuoteProps {
  quote: string;
  author: string;
  citation?: string;
}

const Quote = (props: QuoteProps) => {
  return (
    <div className='m-2 mx-3 flex flex-col text-center font-julius text-3xl text-white'>
      <blockquote>&ldquo;{props.quote}&rdquo;</blockquote>
      <figcaption>
        — {props.author}
        {props.citation ? <cite>, {props.citation}</cite> : ''}
      </figcaption>
    </div>
  );
};

export default Quote;
