export type OtherProduct = {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  
  export type Product = {
    id: number;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    price: number;
    category: string;
    description: string;
    features: string;
    includes: [{quantity: number, item: string}];
    gallery: {
      first: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      second: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      third: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    };
    others?: OtherProduct[];
    new: boolean;
  };