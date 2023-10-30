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
  pictureUrl: string,
  title?: string,
  picture?: string,
  price?: string,
  quantity: number,
  caffeineQuantityResumed?: string,
  caffeineQuantity?: number
};
