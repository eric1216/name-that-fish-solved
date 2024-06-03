// If you have any types that are SHARED BY MANY COMPONENTS,put them here

type FishListObjTypes = {
  name: string;
  url: string;
};

export type FishListPropType = {
  fishListProp: FishListObjTypes[];
};
