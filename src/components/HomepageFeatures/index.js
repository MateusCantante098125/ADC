import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
        O FoodTimer APP foi desenvolvido para facilitar o
        gerenciamento e controle de temporizadores de alimentos.
      </>
    ),
  },
  {
    title: 'Foque-se no que importa',
    Svg: require('@site/static/img/focus.svg').default,
    description: (
      <>
        O FoodTime APP permite-lhe focar noutras coisas enquanto deixa o seu alimento
        a cozinhar como por exemplo ir cortar uma batata enquanto frita um ovo.
      </>
    ),
  },
  {
    title: 'Fácil customização',
    Svg: require('@site/static/img/customize.svg').default,
    description: (
      <>
        Estenda ou customize os temporizadores dos seus alimentos 
        preferidos de maneira simples e eficaz..
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
