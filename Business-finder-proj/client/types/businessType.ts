export default interface Business {
  _id: string;
  category: string;
  description: string;
  name: string;
  owner: string;
  reviews: [
    {
      comment: string;
      userId: string;
      id: string;
    }
  ];
  subscribers: [string];
}
