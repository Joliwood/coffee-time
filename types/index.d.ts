export type Coffee = {
  title: string,
  picture: string,
  buttonText: string,
  buttonVariant: string,
  price: string,
  caffeineQuantityResumed: string,
  caffeineQuantity: number
};

export type CoffeeInReducer = CoffeeSimplified[];

type CoffeeSimplified = {
  title: string,
  picture: string,
  price: string,
  caffeineQuantityResumed: string,
  caffeineQuantity: number
};
