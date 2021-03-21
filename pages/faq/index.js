import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';

// eslint-disable-next-line react/prop-types
export default function FAQPage({ faqCategories }) {
  /* const [faqCategories, setFaqCategories] = React.useState([]);
  //console.log('rendirizou');
  //didMount
  React.useEffect(() => {
    console.log('aconteceu um efeito');
    fetch('https://instalura-api.vercel.app/api/content/faq')
      .then((respostaDoServidor) => respostaDoServidor.json())
      .then((respostaConvertida) => respostaConvertida.data)
      .then((resposta) => {
        setFaqCategories(resposta);
      });
  }, []);
  */
  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServidor) => respostaDoServidor.json())
    .then((respostaConvertida) => respostaConvertida.data);
  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}
