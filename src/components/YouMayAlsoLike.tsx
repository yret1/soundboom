
import YouMayAlsoLikeArticle from "./YouMayAlsoLikeArticle";

type OtherProduct = {
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

interface YouMayAlsoLikeProps {
  others: OtherProduct[];
}

const YouMayAlsoLike: React.FC<YouMayAlsoLikeProps> = ({others}) => {
  return (
    <section className="flex flex-col justify-center items-center mt-40 lg:px-40">
      <h1 className="text-black text-24 font-bold mb-6 md:text-32">
        YOU MAY ALSO LIKE
      </h1>
      <article className="flex flex-col md:flex-row">
        {others.map((item, index) => (
          <YouMayAlsoLikeArticle 
          key={index}
          slug={item.slug}
          name={item.name}
          image={item.image}
          />
        ))}
        
      </article>
    </section>
  );
};

export default YouMayAlsoLike;
